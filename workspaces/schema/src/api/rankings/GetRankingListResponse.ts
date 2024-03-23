import { createSelectSchema } from 'drizzle-zod';
import type { z } from 'zod';

import { book, ranking } from '../../models';

export const GetRankingListResponseSchema = createSelectSchema(ranking)
  .pick({
    id: true,
    rank: true,
  })
  .extend({
    book: createSelectSchema(book)
      .pick({
        id: true,
      })
  })
  .array();

export type GetRankingListResponse = z.infer<typeof GetRankingListResponseSchema>;
