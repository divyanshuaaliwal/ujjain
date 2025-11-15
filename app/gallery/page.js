import React from 'react'
import Gallery from "./gallery";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/gallery`
    return getMetaData(url);
}
const page = () => {
  return (
    <div>
        <Gallery/>
    </div>
  )
}

export default page