import { defineCollection, z } from 'astro:content';

const legislacion = defineCollection({
  type: 'content',
  schema: z.object({
    code: z.string(),
    title: z.string(),
    type: z.string(),
    subject: z.string(),
    imperialDate: z.string(),
    civilDate: z.string(),
    status: z.enum(['Vigente', 'Derogado', 'Suspendido']),
    order: z.number().optional(),
  }),
});

export const collections = { legislacion };
