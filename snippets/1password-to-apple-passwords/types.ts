import type { z } from 'zod';

import type { applePasswordSchema, onePasswordDataSchema } from './schemas';

type OnePasswordData = z.infer<typeof onePasswordDataSchema>;

type ApplePassword = z.infer<typeof applePasswordSchema>;

export type { ApplePassword, OnePasswordData };
