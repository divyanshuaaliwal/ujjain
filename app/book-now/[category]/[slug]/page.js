import UserEnquiryForm from "./itemEnquiry";
import { getMetaData } from "@/app/Data/metaDataJson";

export async function generateMetadata({params}) {
    const {category, slug} = await params;
    const url = `https://ujjainmahakal.com/book-now/${category}/${slug}`
    return getMetaData(url);
}

export default function UserEnquiryFormPage() {
    return <UserEnquiryForm/>
}


