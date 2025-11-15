import B2BRegistrationForm from "./b2b";
import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/b2b-registration`
    return getMetaData(url);
}

export default function B2BPage() {
    return <B2BRegistrationForm/>
}