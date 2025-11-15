import { Wrapper, SectionHeader } from "../MainLayouts";
import styles from "./customerVideo.module.css";

const CustomerVideos = () => {

    const videoUrls = [
        "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/bhasmAarti.mp4",
        "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/k1.mp4",
        "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/k1.mp4",
        "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/k1.mp4",
        "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/k1.mp4",
    ];

    return (
        <Wrapper>

             <SectionHeader
            title="Customer Videos"
            description="Real experiences from our happy visitors captured in motion."
          />

            <section className={styles.customerVideosSection}>
                <div className={styles.videoGrid}>
                    {
                        videoUrls.map((url, index) => (

                            <div className={styles.videoWrapper} key={index}>
                                <video
                                    className={styles.video}
                                    src={url}
                                    loop
                                    autoPlay
                                    muted
                                    playsInline={true}
                                    preload="auto"
                                    controls={false}
                                    disablePictureInPicture
                                />
                            </div>

                        ))
                    }
                </div>
            </section>

        </Wrapper>
    );
};

export default CustomerVideos;
