import Contact from "../components/Contact";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/contact`
    return getMetaData(url);
}

export default function ContactPage() {
    return <Contact/>
}