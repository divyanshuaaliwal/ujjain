import PayOnlineForm from "./pay";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/pay-online`
    return getMetaData(url);
}

export default function PayOnlinePage() {
    return <PayOnlineForm/>
}