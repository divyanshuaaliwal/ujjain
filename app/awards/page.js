import React from 'react'
import Awards from './awards'
import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/awards`
    return getMetaData(url);
}

const page = () => {
  return <Awards/>
}

export default page