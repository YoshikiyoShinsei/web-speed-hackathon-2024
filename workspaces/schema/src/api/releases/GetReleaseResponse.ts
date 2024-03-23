import { createSelectSchema } from 'drizzle-zod';
import type { z } from 'zod';

import { book, release } from '../../models';

export const GetReleaseResponseSchema = createSelectSchema(release)
  .pick({
    dayOfWeek: true,
    id: true,
  })
  .extend({
    books: createSelectSchema(book)
      .pick({
        id: true,
      })
      .array(),
  });

export type GetReleaseResponse = z.infer<typeof GetReleaseResponseSchema>;
