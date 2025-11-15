import PoojaBooking from "./poojaBooking";
import { getMetaData } from "@/app/Data/metaDataJson";

export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/pooja-booking`
    return getMetaData(url);
}

export default function PoojaBookingPage() {
    return <PoojaBooking/>
}