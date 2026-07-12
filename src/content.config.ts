import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    category: z.string().default('思考'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    seriesSlug: z.string().optional(),
    seriesTitle: z.string().optional(),
    seriesDescription: z.string().optional(),
    seriesOrder: z.coerce.number().int().positive().optional(),
    references: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      note: z.string().optional(),
    })).optional(),
  }),
});

export const collections = { posts };
