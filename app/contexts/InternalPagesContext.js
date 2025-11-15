"use client";

import { createContext, useContext } from "react";
import styles from "./Contexts.module.css"
import { Landmark, Hotel, HeaterIcon as Helicopter, UtensilsCrossed, Mountain } from 'lucide-react';


const InternalPageContext = createContext();

export const InternalPageContextProvider = ({ children }) => {

    function getSubtitle(tab) {
        if (!tab || typeof tab !== 'string') return '';
        return tab
            .replaceAll(/([A-Z_])/g, ' $1')
            .replaceAll(/_/g, '')
            .replace(/^./, char => char.toUpperCase());
    }


    function getObjectDataListOrArrayDataList(data) {

        if (Array.isArray(data)) {
            return (
                <ul>
                    {
                        data.map((item, index) => (
                            <li key={index} className={styles.listItem}>
                                {
                                    typeof item === 'object'
                                        ? getObjectDataListOrArrayDataList(item) // recursive call
                                        : item
                                }
                            </li>
                        ))
                    }
                </ul>
            );
        }
        else if (data && typeof data === 'object') {
            return (
                <ul>
                    {
                        Object.entries(data).map(([key, value]) => {
                            const label = key
                                .replace(/_/g, ' ')
                                .replace(/([A-Z])/g, ' $1')
                                .replace(/^./, str => str.toUpperCase());

                            return (
                                <li key={key} className={styles.listItem}>
                                    <strong>{label}:</strong>{" "}
                                    {
                                        typeof value === 'object'
                                            ? getObjectDataListOrArrayDataList(value) // recursive call
                                            : value
                                    }
                                </li>
                            );
                        })
                    }
                </ul>
            );
        }
        else {
            return (
                <ul>
                    <li className={styles.listItem}>
                        {String(data)}
                    </li>
                </ul>
            );
        }
    }


    function getListWithoutLines(data) {

        if (Array.isArray(data)) {
            return (
                <ul>
                    {
                        data.map((item, index) => (
                            <li key={index} className={styles.listItem2}>
                                {
                                    typeof item === 'object'
                                        ? getObjectDataListOrArrayDataList(item) // recursive call
                                        : item
                                }
                            </li>
                        ))
                    }
                </ul>
            );
        }
        else if (data && typeof data === 'object') {
            return (
                <ul>
                    {
                        Object.entries(data).map(([key, value]) => {
                            const label = key
                                .replace(/_/g, ' ')
                                .replace(/([A-Z])/g, ' $1')
                                .replace(/^./, str => str.toUpperCase());

                            return (
                                <li key={key} className={styles.listItem2}>
                                    <strong>{label}:</strong>{" "}
                                    {
                                        typeof value === 'object'
                                            ? getObjectDataListOrArrayDataList(value) // recursive call
                                            : value
                                    }
                                </li>
                            );
                        })
                    }
                </ul>
            );
        }
        else {
            return (
                <ul>
                    <li className={styles.listItem2}>
                        {String(data)}
                    </li>
                </ul>
            );
        }
    }



    function getIcon(iconName, size = 20) {

        switch (iconName) {

            case 'highlights':
                return <Landmark size={size} />;
            case 'hotel':
                return <Hotel size={size} />;
            case 'transport':
                return <Helicopter size={size} />;
            case 'meals':
                return <UtensilsCrossed size={size} />;
            case 'sightseeing':
                return <Mountain size={size} />;
            default:
                return <Landmark size={size} />;
        }
    };

    return (
        <InternalPageContext.Provider value={{ getSubtitle, getObjectDataListOrArrayDataList, getIcon, getListWithoutLines }}>
            {children}
        </InternalPageContext.Provider>
    );
};

// Custom hook to use context easily
export const useInternalPageContext = () => useContext(InternalPageContext);