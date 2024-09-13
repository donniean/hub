import { z } from 'zod';

const sectionFiledValueSchema = z.union([
  // cSpell: disable-next-line
  z.object({ totp: z.string() }).strict(),
  z.object({ concealed: z.string() }).strict(),
  z.object({ url: z.string() }).strict(),
  z.object({ phone: z.string() }).strict(),
  z.object({ string: z.string() }).strict(),
  z.object({ menu: z.string() }).strict(),
  z.object({ creditCardNumber: z.string() }).strict(),
  z.object({ creditCardType: z.string() }).strict(),
  z.object({ date: z.number() }).strict(),
  z.object({ monthYear: z.number() }).strict(),
  z
    .object({
      email: z
        .object({ email_address: z.string(), provider: z.null() })
        .strict(),
    })
    .strict(),
  z
    .object({
      sshKey: z
        .object({
          privateKey: z.string(),
          metadata: z
            .object({
              privateKey: z.string(),
              publicKey: z.string(),
              fingerprint: z.string(),
              keyType: z.union([
                z.string(),
                z.object({ rsa: z.number() }).strict(),
              ]),
            })
            .strict(),
        })
        .strict(),
    })
    .strict(),
  z
    .object({
      address: z
        .object({
          street: z.string(),
          city: z.string(),
          country: z.string(),
          zip: z.string(),
          state: z.string(),
        })
        .strict(),
    })
    .strict(),
  z
    .object({
      file: z
        .object({
          fileName: z.string(),
          documentId: z.string(),
          decryptedSize: z.number(),
        })
        .strict(),
    })
    .strict(),
]);

const sectionSchema = z
  .object({
    title: z.string(),
    name: z.string().optional(),
    fields: z
      .object({
        title: z.string(),
        id: z.string(),
        value: sectionFiledValueSchema,
        guarded: z.boolean(),
        clipboardFilter: z.string().optional(),
        multiline: z.boolean(),
        // cSpell: disable-next-line
        dontGenerate: z.boolean(),
        inputTraits: z
          .object({
            keyboard: z.string(),
            correction: z.string(),
            capitalization: z.string(),
          })
          .strict(),
      })
      .strict()
      .array(),
    hideAddAnotherField: z.boolean().optional(),
  })
  .strict();

const loginFieldSchema = z
  .object({
    value: z.string(),
    id: z.string(),
    name: z.string().optional(),
    fieldType: z.string(),
    designation: z.string().optional(),
  })
  .strict();

const itemSchema = z
  .object({
    uuid: z.string(),
    favIndex: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    state: z.string(),
    categoryUuid: z.string(),
    details: z
      .object({
        htmlForm: z
          .object({
            htmlMethod: z.string().optional(),
            htmlAction: z.string().optional(),
            htmlId: z.string().optional(),
            htmlName: z.string().optional(),
          })
          .strict()
          .optional(),
        loginFields: loginFieldSchema.array(),
        notesPlain: z.string().optional(),
        sections: sectionSchema.array(),
        passwordHistory: z
          .object({
            value: z.string(),
            time: z.number(),
          })
          .strict()
          .array()
          .optional(),
        password: z.string().optional(),
      })
      .strict(),
    overview: z
      .object({
        subtitle: z.string(),
        icons: z.null(),
        urls: z
          .object({
            label: z.string(),
            url: z.string(),
            mode: z.string(),
          })
          .strict()
          .array()
          .optional(),
        tags: z.string().array().optional(),
        title: z.string(),
        url: z.string(),
        ps: z.number().optional(),
        pbe: z.number().optional(),
        // cSpell: disable-next-line
        pgrng: z.boolean().optional(),
        watchtowerExclusions: z.null(),
      })
      .strict(),
  })
  .strict();

const vaultSchema = z
  .object({
    attrs: z
      .object({
        uuid: z.string(),
        desc: z.string(),
        avatar: z.string(),
        name: z.string(),
        type: z.string(),
      })
      .strict(),
    items: itemSchema.array(),
  })
  .strict();

const accountSchema = z
  .object({
    attrs: z
      .object({
        accountName: z.string(),
        name: z.string(),
        avatar: z.string(),
        email: z.string(),
        uuid: z.string(),
        domain: z.string(),
      })
      .strict(),
    vaults: vaultSchema.array(),
  })
  .strict();

const onePasswordDataSchema = z
  .object({
    accounts: accountSchema.array(),
  })
  .strict();

const applePasswordSchema = z
  .object({
    title: z.string(),
    url: z.string(),
    username: z.string(),
    password: z.string(),
    notes: z.string(),
    otpAuth: z.string(),
  })
  .strict();

export { applePasswordSchema, onePasswordDataSchema };
