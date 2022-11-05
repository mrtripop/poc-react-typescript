import sanityClient, { ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const config: ClientConfig = {
  projectId: 'y5u2vh1c',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:
    'skuWhjCKLxE4dzyIim4fM7XfQldtN1R3VfmOrSAdbsZHXuQO8LCVZ4Hvt0iek4xtXPPxB123dQ6q9QYBionnLpkr2Rxt1CQuxZBxF6bnHM5EPuXxKpPRLlZRb791mTvrLevOD7BOD9QA1KxmJRDBiL0XbnUVbzLJCoCV3vbwgeB7AKPuvlm9',
};

export const client = sanityClient(config);

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
