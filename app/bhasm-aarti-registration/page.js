import BhasmAarti from "./bhasmAartiRegistration";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/bhasm-aarti-registration`
    return getMetaData(url);
}

export default function BAPage() {
    return <BhasmAarti/>
}