import VIPDarshanForm from "./vipDarshan";

import { getMetaData } from "@/app/Data/metaDataJson";

export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/vip-darshan`
    return getMetaData(url);
}

export default function vipDarshanPage() {
    return <VIPDarshanForm/>
}
