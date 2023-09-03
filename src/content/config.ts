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
    seo: reference('seo').optional(),
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

const SEOCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(3).max(100).optional(), // title of the page
    description: z.string().min(3).max(100).optional(), // description of the page
    keywords: z.array(z.string().min(2).max(100)).optional(), // keywords for the page
    image: z.string().min(50).max(500).optional(), // url of the image
    imageAlt: z.string().min(3).max(100).optional(), // description of the image
  }),
})

export const collections = {
  product: productCollection,
  how: howCollection,
  features: featuresCollection,
  price: priceCollection,
  form: formCollection,
  testimonial: testimonialCollection,
  seo: SEOCollection,
}
