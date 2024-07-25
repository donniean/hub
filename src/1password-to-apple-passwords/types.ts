interface Data {
  accounts: Account[];
}

interface Account {
  attrs: {
    accountName: string;
    name: string;
    avatar: string;
    email: string;
    uuid: string;
    domain: string;
  };
  vaults: Vault[];
}

interface Vault {
  attrs: {
    uuid: string;
    desc: string;
    avatar: string;
    name: string;
    type: string;
  };
  items: Item[];
}

interface Item {
  uuid: string;
  favIndex: number;
  createdAt: number;
  updatedAt: number;
  state: 'active';
  categoryUuid: string;
  details: {
    htmlForm?: {
      htmlMethod?: string;
      htmlAction?: string;
      htmlId?: string;
      htmlName?: string;
    };
    loginFields: LoginField[];
    notesPlain?: string;
    sections: Section[];
    passwordHistory?: {
      value: string;
      time: number;
    }[];
    password?: '';
  };
  overview: {
    subtitle: string;
    icons: null;
    urls?: {
      label: string;
      url: string;
      mode: string;
    }[];
    tags?: string[];
    title: string;
    url: string;
    ps?: number;
    pbe?: number;
    // cspell: disable-next-line
    pgrng?: boolean;
    watchtowerExclusions: null;
  };
}

interface LoginField {
  value: string;
  id: string;
  name?: string;
  fieldType: string;
  designation?: string;
}

interface Section {
  title: string;
  name?: string;
  fields: {
    title: string;
    id: string;
    value: SectionFiledValue;
    guarded: boolean;
    clipboardFilter?: string;
    multiline: boolean;
    // cspell: disable-next-line
    dontGenerate: boolean;
    inputTraits: {
      keyboard: string;
      correction: string;
      capitalization: string;
    };
  }[];
  hideAddAnotherField?: boolean;
}

type SectionFiledValue =
  | {
      // cspell: disable-next-line
      totp: string;
    }
  | { concealed: string }
  | { url: string }
  | { phone: string }
  | { string: string }
  | { menu: string }
  | { date: number }
  | {
      monthYear: number;
    }
  | {
      email: {
        email_address: string;
        provider: null;
      };
    }
  | {
      sshKey: {
        privateKey: string;
        metadata: {
          privateKey: string;
          publicKey: string;
          fingerprint: string;
          keyType:
            | string
            | {
                rsa: 4096;
              };
        };
      };
    }
  | {
      address: {
        street: string;
        city: string;
        country: string;
        zip: string;
        state: string;
      };
    }
  | {
      creditCardNumber: string;
    }
  | {
      creditCardType: string;
    };

export type { Data };
