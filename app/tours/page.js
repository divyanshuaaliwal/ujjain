
import Tours from './Tours';
import { Suspense } from 'react';

import { getMetaData } from "@/app/Data/metaDataJson";
export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/tours`
    return getMetaData(url);
}

export default function ToursPage() {
    return (
        <Suspense fallback={<div>Loading tours...</div>}>
            <Tours />
        </Suspense>
    );
}