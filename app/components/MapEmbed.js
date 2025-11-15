"use client";
import React from "react";
import styles from "./Contact.module.css";

const MapEmbed = () => {
    return (
        <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Mahakaleshwar%20Temple,%20Ujjain&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className={styles.map}
            allowFullScreen
            loading="lazy"
        ></iframe>
    );
};

export default MapEmbed;
