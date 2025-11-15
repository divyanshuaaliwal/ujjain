import Hotel from "./Hotel";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata({params}) {
    const {slug} = await params;
    const url = `https://ujjainmahakal.com/hotels-in-mp/${slug}`
    return getMetaData(url);
}

export default function HotelPage() {
    return <Hotel/>
}