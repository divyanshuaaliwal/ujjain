"use client";

import { InternalPageContextProvider } from "./contexts/InternalPagesContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function ClientProviders({ children }) {
    return (
        <>
            <Navbar />
            <InternalPageContextProvider>
                <main>{children}</main>
            </InternalPageContextProvider>
            <Footer />
        </>
    );
}
