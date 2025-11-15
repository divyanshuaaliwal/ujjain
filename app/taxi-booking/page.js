import TaxiBooking from "./taxiBooking";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/taxi-booking`
    return getMetaData(url);
}

export default function TaxiBookingPage() {
    return <TaxiBooking/>
}