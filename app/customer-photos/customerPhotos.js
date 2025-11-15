import { Wrapper, SectionHeader } from "../MainLayouts";
import styles from "./customerPhotos.module.css";

import img1 from "../assets/horizontal.jpg";
import img2 from "../assets/vertical.jpg";
import Image from "next/image";

const CustomerPhotos = () => {
    const imageUrls = [img1, img2, img1, img2, img1, img2, img1, img2, img2, img2, img1,img1];

    return (
        <Wrapper>
            <SectionHeader
                title="Customer Photos"
                description="Cherished moments shared by our devotees and travelers."
            />

            <section className={styles.customerPhotosSection}>
                <div className={styles.photoGrid}>
                    {imageUrls.map((url, index) => (
                        <div className={styles.photoWrapper} key={index}>
                            <Image
                                src={url}
                                alt={`Customer Photo ${index + 1}`}
                                className={styles.photo}
                                placeholder="blur"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </Wrapper>
    );
};

export default CustomerPhotos;
