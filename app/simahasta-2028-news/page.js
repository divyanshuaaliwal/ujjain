import Simahasta2028News from "./simahstra2028News";
import { getMetaData } from "@/app/Data/metaDataJson";

export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/simahasta-2028-news`
    return getMetaData(url);
}

export default function simahstra2028NewsPage() {
    return <Simahasta2028News/>
}