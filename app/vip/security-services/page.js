import SecurityServices from "./securityServices";
import { getMetaData } from "@/app/Data/metaDataJson";


export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/vip/security-services`
    return getMetaData(url);
}

export default function SecurityServicesPage() {
    return <SecurityServices/>
}