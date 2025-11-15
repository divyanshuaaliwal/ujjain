import AbhishekBookingComponent from "./abhishekBooking";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/abhishek-booking`
    return getMetaData(url);
}

export default function ABPage() {
    return <AbhishekBookingComponent/>
}