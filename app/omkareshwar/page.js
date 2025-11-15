import Omkareshwar from "./omkareshwar";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/omkareshwar`
    return getMetaData(url);
}

export default function OmkareshwarPage() {
    return <Omkareshwar/>
}