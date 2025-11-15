import React from 'react'
import Reviews from './reviews';
import { getMetaData } from "@/app/Data/metaDataJson";

export async function generateMetadata() {
  const url = `https://ujjainmahakal.com/reviews`
  return getMetaData(url);
}

const page = () => {
  return <Reviews/>
}

export default page