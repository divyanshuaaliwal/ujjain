import Maheshwar from "./maheshwar";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/maheshwar`
    return getMetaData(url);
}

export default function MaheshwarPage() {
    return <Maheshwar/>
}