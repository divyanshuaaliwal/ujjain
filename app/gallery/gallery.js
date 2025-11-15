import { InternalPageHeading, Wrapper } from '../MainLayouts';
import styles from './gallery.module.css';
import Image from 'next/image';
import { galleryData } from '../Data/galleryData';

export default function GalleryPage() {
    return (
        <Wrapper>

            <InternalPageHeading title={galleryData.title} />
            <p className={styles.description}>{galleryData.description}</p>
            
            <div className={styles.container}>


                <div className={styles.galleryGrid}>
                    {
                        galleryData.images.map((src, index) => (
                            <div key={index} className={styles.imageWrapper}>
                                <Image
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className={styles.image}
                                />

                            </div>
                        ))
                    }
                </div>
            </div>
        </Wrapper>
    );
}
