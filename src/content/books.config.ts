import { defineCollection, z } from "astro:content";
// z -> zod schema
/**
 * Esto lo que hace es crear una coleccion a partir de un esquema
 * que esta en los markdown de la carpeta books, donde estan definidos
 * estos atributos
 */
const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readTime: z.number(),
    description: z.string(),
    buy: z.object({
      spain: z.string(),
      usa: z.string(),
    }),
  }),
});

export const collections = { books };
