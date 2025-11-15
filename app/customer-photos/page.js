import CustomerPhotos from "./customerPhotos";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/customer-photos`
    return getMetaData(url);
}
const page = () => {
    return <CustomerPhotos/>
}

export default page;