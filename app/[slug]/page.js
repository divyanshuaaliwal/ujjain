import TourPage from "./tour";
import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata({params}) {
    const {slug} = await params;
    const url = `https://ujjainmahakal.com/${slug}`
    return getMetaData(url);
}

export default function Page() {
  
    return <TourPage/>
}