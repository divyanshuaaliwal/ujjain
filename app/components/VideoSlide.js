"use client";
import React, { useEffect, useRef } from 'react';
import styles from './HeroCarousel.module.css';

const VideoSlide = ({ video }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (!video || !videoElement) return;

        videoElement.pause();
        videoElement.removeAttribute('src'); 
        videoElement.load();

        const handleCanPlay = () => {
            videoElement.play().catch((error) => {
                console.error("Video playback error:", error);
            });
        };

        // Attach event listener
        videoElement.addEventListener("canplay", handleCanPlay);

        // Set new source
        videoElement.src = video;
        videoElement.load();

        return () => {
            videoElement.removeEventListener("canplay", handleCanPlay);
        };
    }, [video]);

    if (!video) return null;

    return (
        <div className={styles.videoWrapper}>
            <video
                ref={videoRef}
                className={styles.videoElement}
                loop
                autoPlay
                muted
                playsInline={true} 
                preload="auto"
                controls={false}
                disablePictureInPicture
            />
            {/* <div className={styles.videoOverlay}></div> */}
        </div>
    );
};

export default VideoSlide;
