import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: 'fql0d3wl',
  dataset: 'production',
  apiVersion: '2023-06-19',
  useCdn: true,
  token: process.env.PORTFOLIO_SANITY_TK
})

const builder = imageUrlBuilder(client);

export const urlFor = source => builder.image(source);
