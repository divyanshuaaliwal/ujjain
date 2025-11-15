import PlacesNearUjjain from "./placesNearUjjain";
import { getMetaData } from "@/app/Data/metaDataJson";

export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/places-near-ujjain`
    return getMetaData(url);
}

export default function PlacesNearUjjainPage() {
    return <PlacesNearUjjain/>
}