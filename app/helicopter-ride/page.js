import HelicopterRide from "./HelicopterRide";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/helicopter-ride`
    return getMetaData(url);
}

export default function HelicopterRidePage() {
    return <HelicopterRide/>
}