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

export async function getProject() {
    const query = `*[_type == "project"] {
        title,
        client,
        "slug": slug.current,
        category-> {
            name
        },
        pageBuilder[]{
            _type,
            _key,
            heading,
            image {
                asset->{url}
            },
            images[]{
                asset->{url}
            }
        }
    }`;
    return await client.fetch(query);
}

export async function getSingle(slug) {
    const query = `*[_type == "project" && slug.current == $slug][0] {
        title,
        client,
        "slug": slug.current,
        category-> {
            name
        },
        Description,
        pageBuilder[]{
            _type,
            _key,
            heading,
            image {
                asset->{url}
            },
            images[]{
                _type,
                _type == "image" => { asset->{url} },
                _type == "video" => { videoFile{asset->{url}}, videoUrl }
            }
        }
    }`;
    return await client.fetch(query, { slug }); // 👈 Geef de slug mee
}