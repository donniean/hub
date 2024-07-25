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
    uuid: 'string';
    desc: 'string';
    avatar: 'string';
    name: 'string';
    type: 'string';
  };
  items: Item[];
}

interface Item {
  uuid: 'string';
  favIndex: number;
  createdAt: number;
  updatedAt: number;
  state: 'active';
  categoryUuid: number;
  details: {
    loginFields: LoginField[];
    notesPlain?: string;
    sections: Section[];
    passwordHistory?: {
      value: string;
      time: number;
    }[];
  };
  overview: {
    subtitle: string;
    icons: null;
    urls: {
      label: string;
      url: string;
      mode: string;
    }[];
    title: string;
    url: string;
    ps: number;
    pbe: number;
    // cspell: disable-next-line
    pgrng: boolean;
    watchtowerExclusions: null;
  };
}

interface LoginField {
  value: string;
  id: string;
  name: string;
  fieldType: 'T' | 'P' | '';
  designation: string;
}

interface Section {
  title: string;
  name: string;
  fields: {
    title: string;
    id: string;
    value: {
      // cspell: disable-next-line
      totp: string;
    };
    guarded: boolean;
    multiline: boolean;
    // cspell: disable-next-line
    dontGenerate: boolean;
    inputTraits: {
      keyboard: string;
      correction: string;
      capitalization: string;
    };
  }[];
}

export type { Data };
