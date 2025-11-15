import Thing from "./thing";
import { getMetaData } from "@/app/Data/metaDataJson";

export async function generateMetadata({params}) {
    const {slug} = await params;
    const url = `https://ujjainmahakal.com/things-to-do/${slug}`
    return getMetaData(url);
}

export default function ThingsToDoPage() {
    return <Thing/>
}