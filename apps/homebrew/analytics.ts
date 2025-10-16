const CATEGORIES = {
  install: 'install',
  installOnRequest: 'install-on-request',
  caskInstall: 'cask-install',
};

const DAYS = {
  '30d': '30d',
  '90d': '90d',
  '365d': '365d',
};

const BASE_URL = 'https://formulae.brew.sh/api/analytics';

const LIMIT = 100;

const category = CATEGORIES.install;
const days = DAYS['30d'];

const url = `${BASE_URL}/${category}/${days}.json`;
// eslint-disable-next-line no-console
console.info(url);

interface Analytics {
  [key: string]: unknown;
  items: unknown[];
}

const res = await fetch(url);
const data = (await res.json()) as Analytics;

const { items, ...rest } = data;
const top100 = items.slice(0, LIMIT);
const result = {
  ...rest,
  items: top100,
};

// eslint-disable-next-line no-console
console.info(result);
