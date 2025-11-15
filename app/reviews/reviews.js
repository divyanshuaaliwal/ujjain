import { Wrapper, SectionHeader } from "../MainLayouts";
import styles from "./reviews.module.css";

import img1 from "../assets/whatsAppScreenShot.jpg";
import img2 from "../assets/whatsAppScreenShot2.jpg";
import Image from "next/image";

const Reviews = () => {
    const imageUrls = [img1, img2, img1, img2, img1, img1, img1, img2, img1, img1, img1, img2];

    return (
        <Wrapper>
            <SectionHeader
                title="Customer Reviews"
                description="Voices of devotion and unforgettable memories from our travelers."
            />

            <section className={styles.customerPhotosSection}>
                <div className={styles.photoGrid}>
                    {imageUrls.map((url, index) => (
                        <div className={styles.photoWrapper} key={index}>
                            <Image
                                src={url}
                                alt={`Customer Photo ${index + 1}`}
                                placeholder="blur"
                                width={300}
                                height={550}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className={styles.photo}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </Wrapper>
    );
};

export default Reviews;