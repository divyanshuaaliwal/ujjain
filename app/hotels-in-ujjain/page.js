import { Suspense } from "react";
import Hotels from "./Hotels"
import { getMetaData } from "@/app/Data/metaDataJson";

export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/hotels-in-ujjain`
    return getMetaData(url);
}

export default function HotelsPage() {

    return (
        <Suspense fallback={<div>Loading tours...</div>}>
            <Hotels />
        </Suspense>
    )
}