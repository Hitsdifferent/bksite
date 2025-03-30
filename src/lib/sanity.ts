import{ createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient ({
    apiVersion: "2023-03-20",
    dataset: "production",
    projectId: "nh9rayqa",
    useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getServices() {
    const query = `*[_type == "services"]{
      title,
      smallDescription,
      image {
            asset -> {
                _id,
                url
            }
        },
      "slug": slug.current
    }`;
  
    return await client.fetch(query);
}

export async function getAuthor() {
    const query = `*[_type == "author"] | order(_createdAt asc) {
        name,
        image {
            asset -> {
                _id,
                url
            }
        }
    }`;
    return await client.fetch(query);
}

export async function getPromise() {
    const query = `*[_type == "promises"]{
        title,
        Description,
        image {
            asset -> {
                _id,
                url
            }
        }
    }`;
    return await client.fetch(query);
}