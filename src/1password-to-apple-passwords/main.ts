import * as console from 'node:console';
import { readFileSync } from 'node:fs';
import path from 'node:path';

import { onePasswordDataSchema } from './schemas';
import type { ApplePassword, OnePasswordData } from './types';

interface OnePasswordToApplePasswordsOptions {
  input: OnePasswordData;
}

function onePasswordToApplePasswords({
  input,
}: OnePasswordToApplePasswordsOptions): ApplePassword[] {
  const flattedVaults = (input?.accounts ?? []).flatMap(
    (account) => account.vaults,
  );
  const flattedItems = flattedVaults.flatMap((vault) =>
    vault.items.map((item) => ({ vaultAttrs: vault.attrs, ...item })),
  );
  console.log(flattedItems, flattedItems.length);

  return [
    { title: '', url: '', username: '', password: '', notes: '', otpAuth: '' },
  ];
}

export function main() {
  const { dirname } = import.meta;
  const inputFilePath = path.resolve(dirname, '1password-data.json');

  const json = readFileSync(inputFilePath, 'utf8');

  const data: unknown = JSON.parse(json);
  const input = onePasswordDataSchema.parse(data);

  onePasswordToApplePasswords({ input });
}
