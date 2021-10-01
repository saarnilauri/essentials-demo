import React from "react";
import sanityClient from '@sanity/client';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

const configuredSanityClient = sanityClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: true,
  apiVersion: "v1",
});

export const Figure = ({ image, caption="" }) => {

  if (!image) {
    return null;
  }
  const imageProps = useNextSanityImage(
		configuredSanityClient,
		image.asset
	);

  console.log(image, imageProps);
  
  return (
    <figure>
      <Image src={image.asset.url} alt="" width="640" height="320" layout="responsive" sizes="(max-width: 800px) 100vw, 800px" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};
