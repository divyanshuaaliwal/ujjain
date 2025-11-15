import ThingsToDo from "./thingsToDo";
import { getMetaData } from "@/app/Data/metaDataJson";

export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/things-to-do`
    return getMetaData(url);
}

export default function ThingsToDoPage() {
    return <ThingsToDo/>
}