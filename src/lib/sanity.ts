import{ createClient } from "next-sanity";

export const client = createClient ({
    apiVersion: "2023-03-20",
    dataset: "production",
    projectId: "nh9rayqa",
    useCdn: false,
});

export async function getSanityAuthor() {
    const query = `*[_type == "author"] | order(_createdAt asc) {
        name
    }`;
    return await client.fetch(query);
}