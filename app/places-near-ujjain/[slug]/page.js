import Place from "./place";
import { getMetaData } from "@/app/Data/metaDataJson";

export async function generateMetadata({params}) {
    const {slug} = await params;
    const url = `https://ujjainmahakal.com/places-near-ujjain/${slug}`
    return getMetaData(url);
}

export default function PlacePage() {
    return <Place/>
}