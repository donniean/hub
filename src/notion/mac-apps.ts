// cSpell: disable-next-line
import { Client, isFullPage } from '@notionhq/client';
// cSpell: disable-next-line
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import dotenvFlow from 'dotenv-flow';

dotenvFlow.config();

const { NOTION_TOKEN } = process.env;

const DATABASE_ID = '084e53e346d24d95bbda60a0abef0839';

if (!NOTION_TOKEN) {
  throw new Error('Notion token is not provided');
}

interface Properties {
  Name: Extract<PageObjectResponse['properties'][string], { type: 'title' }>;
  Installation: Extract<
    PageObjectResponse['properties'][string],
    { type: 'select' }
  >;
  Paid: Extract<PageObjectResponse['properties'][string], { type: 'checkbox' }>;
  Tags: Extract<
    PageObjectResponse['properties'][string],
    { type: 'multi_select' }
  >;
  Priority: Extract<
    PageObjectResponse['properties'][string],
    { type: 'number' }
  >;
  Installed: Extract<
    PageObjectResponse['properties'][string],
    { type: 'checkbox' }
  >;
  'formula / cask': Extract<
    PageObjectResponse['properties'][string],
    { type: 'rich_text' }
  >;
}

const notion = new Client({
  auth: NOTION_TOKEN,
});

const response = await notion.databases.query({
  database_id: DATABASE_ID,
  sorts: [
    { property: 'Installed', direction: 'descending' },
    { property: 'Priority', direction: 'descending' },
    { property: 'Name', direction: 'ascending' },
  ],
});

const formulas: string[] = [];
const casks: string[] = [];

// @ts-expect-error - The response object is not typed
// eslint-disable-next-line consistent-return
response.results.forEach((page) => {
  if (!isFullPage(page)) {
    return null;
  }

  const properties = page.properties as unknown as Properties;
  const installedField = properties.Installed;
  const isInstalled = installedField.checkbox;
  if (!isInstalled) {
    return null;
  }

  const installation = properties.Installation.select?.name ?? '';
  if (!['Homebrew', 'Homebrew Cask'].includes(installation)) {
    return null;
  }

  const formulaField = properties['formula / cask'];
  const formula = formulaField.rich_text[0]?.plain_text;
  if (!formula) {
    return null;
  }

  if (installation === 'Homebrew') {
    formulas.push(formula.trim());
  }

  if (installation === 'Homebrew Cask') {
    casks.push(formula.trim());
  }
});

const formulasCommand = `brew install \\
  ${formulas.join(' \\\n  ')}
`;
const casksCommand = `brew install --cask \\
  ${casks.join(' \\\n  ')}
`;

console.log(`${formulas.length} formulas`);
console.log(formulasCommand);

console.log(`${casks.length} casks`);
console.log(casksCommand);
