import About from "./aboutUs";
import { getMetaData } from "@/app/Data/metaDataJson";

export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/about-us`
    return getMetaData(url);
}

const page = () => {
    return  <About/>
}

export default page;