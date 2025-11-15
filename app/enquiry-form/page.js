import UserEnquiryForm from "./enquiry";

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/enquiry-form`
    return getMetaData(url);
}

export default function EnquiryPage() {
    return <UserEnquiryForm/>
}