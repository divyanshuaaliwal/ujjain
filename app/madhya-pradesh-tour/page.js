import MPTours from "./madhyaPradeshTour";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/madhya-pradesh-tour`
    return getMetaData(url);
}

export default function MPTourPage() {
    return <MPTours/>
}