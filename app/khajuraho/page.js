import Khajuraho from "./khajuraho";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/khajuraho`
    return getMetaData(url);
}

export default function KhajurahoPage() {
    return <Khajuraho/>
}