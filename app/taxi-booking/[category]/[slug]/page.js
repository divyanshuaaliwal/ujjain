import Vehicle from "./vehicle";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata({params}) {
    const {category, slug} = await params;
    const url = `https://ujjainmahakal.com/taxi-booking/${category}/${slug}`
    return getMetaData(url);
}

export default function VehiclePage() {
    return <Vehicle/>
}