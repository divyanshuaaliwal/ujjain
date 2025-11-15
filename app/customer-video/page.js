import CustomerVideo from "./customerVideo";
import { getMetaData } from "@/app/Data/metaDataJson";

export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/customer-video`
    return getMetaData(url);
}

const page = () => {
    return <CustomerVideo/>
}

export default page;