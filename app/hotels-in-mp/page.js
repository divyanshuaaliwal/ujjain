import Hotels from "./Hotels";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/hotels-in-mp`
    return getMetaData(url);
}

export default function HotelsPage() {
    return <Hotels/>
}