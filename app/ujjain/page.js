
import Ujjain from "./ujjain";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/ujjain`
    return getMetaData(url);
}

export default function UjjainPage() {
    return <Ujjain/>
}