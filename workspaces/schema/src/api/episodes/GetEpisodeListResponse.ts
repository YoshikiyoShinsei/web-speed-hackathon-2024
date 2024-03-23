import { createSelectSchema } from 'drizzle-zod';
import type { z } from 'zod';

import { episode } from '../../models';

export const GetEpisodeListResponseSchema = createSelectSchema(episode)
  .pick({
    chapter: true,
    description: true,
    id: true,
    name: true,
    nameRuby: true,
  })
  .array();

export type GetEpisodeListResponse = z.infer<typeof GetEpisodeListResponseSchema>;
