import Vehicles from "./category";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata({params}) {
    const {category} = await params;
    const url = `https://ujjainmahakal.com/taxi-booking/${category}`
    return getMetaData(url);
}

export default function VehiclePage() {
    return <Vehicles/>
}