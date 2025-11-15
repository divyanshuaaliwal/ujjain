"use client";

import { useState } from "react";
import { MapPin, ChevronUp, ChevronDown } from "lucide-react";
import styles from "./ItineraryAccordion.module.css";

export default function ItineraryAccordion({ itinerary = [] }) {

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.accordionContainer}>
            
            <h2 className={styles.title}>Tour Itinerary</h2>
            {
                itinerary.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <button
                            className={styles.header}
                            onClick={() => toggle(index)}
                            aria-expanded={openIndex === index}
                        >
                            <div className={styles.headerLeft}>
                                <MapPin className={styles.icon} />
                                <h3 className={styles.headerText}>{`${item.day}: ${item.activity}`}</h3>
                            </div>
                            <span className={styles.toggle}>
                                {openIndex === index ?
                                    <ChevronUp className={styles.chevron} /> :
                                    <ChevronDown className={styles.chevron} />
                                }
                            </span>
                        </button>
                        <div
                            className={`${styles.content} ${openIndex === index ? styles.contentOpen : ''}`}
                            aria-hidden={openIndex !== index}
                        >
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
