import { createClient } from "next-sanity";
import  imageUrlBuilder  from "@sanity/image-url";


export const client = createClient({
  apiVersion: "v2022-03-07",
  dataset: "blog",
  projectId: "6okigkyk",
  useCdn: false, // Use the CDN for assets (optional)
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}