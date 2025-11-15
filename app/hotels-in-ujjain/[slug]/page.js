import UjjainHotel from "./Hotel";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata({params}) {
    const {slug} = await params;
    const url = `https://ujjainmahakal.com/hotels-in-ujjain/${slug}`
    return getMetaData(url);
}

export default function HotelPage() {
    return <UjjainHotel/>
}