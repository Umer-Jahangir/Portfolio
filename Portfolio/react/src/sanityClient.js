import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: "2023-01-01",
  useCdn: true,
});


const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
