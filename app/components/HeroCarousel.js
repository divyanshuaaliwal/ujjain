"use client"
import React, { useState } from "react";
import styles from './HeroCarousel.module.css';
import VideoSlide from "./VideoSlide";
import Link from "next/link";
const v1 = "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/Ujjain.mp4";
const v2 = "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/Ujjain - The City of Mahakal 🔱 Mahakal Lok Corridor In Ujjain.mp4";
const v3 = "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/shivjee.mp4";

const HeroCarousel = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const videos = [v1, v2, v3];

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
        setIsVideoLoaded(false);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
        setIsVideoLoaded(false);
    };

    return (
        <div className={styles.carouselContainer}>
            
            <VideoSlide
                video={videos[currentIndex]}
                onLoaded={() => setIsVideoLoaded(true)}
                isActive={true}
            />


            <div className={styles.contentOverlay}>

                <h1 className={styles.title}>Ujjain Mahakal Tour & Travels in Indore – Ujjain & Omkareshwar Tour Agency</h1>
                <p className={styles.description}>Welcome to Ujjain Mahakal Tour & Travels in Indore, your trusted travel partner for Ujjain Mahakal Darshan and Omkareshwar Jyotirlinga tours. We offer complete pilgrimage services including Bhasma Aarti booking, taxi & car rentals, hotel reservations, and customized tour packages. With reliable support and affordable pricing, we make your spiritual journey from Indore to Ujjain and Omkareshwar comfortable and memorable.</p>

                <div className={styles.buttonGroup}>
                    <Link href="/bhasm-aarti-registration" className={styles.bookingButton}>Bhasm Aarti Enquiry</Link>
                    <Link href="/abhishek-booking" className={styles.bookingButton}>Abhishek Enquiry</Link>
                    <Link href="/vip-darshan" className={styles.bookingButton}>VIP Darshan Enquiry</Link>
                </div>
            
            </div>



            <div className={styles.controls}>
                <button onClick={goToPrev} className={styles.navButton}>⟨</button>
                <div className={styles.muteButton}>🌿 Divine Journey</div>
                <button onClick={goToNext} className={styles.navButton}>⟩</button>
            </div>

            {
                isVideoLoaded && <div className={styles.videoOverlay}></div>
            }

        </div>
    );
};

export default HeroCarousel;
