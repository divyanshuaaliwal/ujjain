import Pooja from "./pooja";
import { getMetaData } from "@/app/Data/metaDataJson";


export async function generateMetadata({ params }) {
    const { slug } = await params; 
    const url = `https://ujjainmahakal.com/pooja-booking/${slug}`
    return getMetaData(url);
}

export default async function EachPoojaPage() {
    return <Pooja />
}
