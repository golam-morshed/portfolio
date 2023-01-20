import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = SanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-1-1',
    useCdn: true,
    token: process.env.SANITY_API_TOKEN
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => { builder.image(source) }