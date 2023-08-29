import { z, defineCollection, reference } from 'astro:content'

const productCollection = defineCollection({
  type: 'content',
  schema: z.object({
    card_title: z.string().min(3).max(40),
    card_excerpt: z.string().min(3).max(120),
    page_title: z.string().min(3).max(100),
    img: z.string(),
    order: z.number(),
    how: reference('how'),
    features: reference('features'),
    price: reference('price'),
    form: reference('form'),
  }),
})

const howCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(3).max(100).optional().default('Comment ça marche ?'),
    steps: z
      .array(
        z.object({
          title: z.string().min(3).max(100),
          text: z.string().min(3).max(500),
        }),
      )
      .optional(),
  }),
})

const featuresCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(3).max(100).optional().default('Comment ça marche ?'),
  }),
})

const priceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(3).max(100).optional().default('Tarifs'),
    grid: z
      .array(
        z.object({
          title: z.string().min(3).max(100),
          text: z.string().min(3).max(100),
        }),
      )
      .optional(),
  }),
})

const formCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(3).max(100).optional().default('Comment ça marche ?'),
  }),
})

const testimonialCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string().min(3).max(100),
    stars: z.number().min(0).max(5).optional(),
    order: z.number(),
  }),
})

export const collections = {
  product: productCollection,
  how: howCollection,
  features: featuresCollection,
  price: priceCollection,
  form: formCollection,
  testimonial: testimonialCollection,
}
