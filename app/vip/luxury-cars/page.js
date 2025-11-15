import LuxuaryCars from "./luxuaryCars";
import { getMetaData } from "@/app/Data/metaDataJson";

export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/vip/luxury-cars`
    return getMetaData(url);
}

export default function LuxuryCarsPage() {
    return <LuxuaryCars/>
}