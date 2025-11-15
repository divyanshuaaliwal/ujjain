import styles from './PlacesNearUjjain.module.css';
import Image from 'next/image';
import { placesNearUjjain } from '../Data/placesNearUjjainData';
import { SectionHeader, Wrapper } from '../MainLayouts';
import Link from 'next/link';

const PlacesNearUjjain = () => {
    return (
        
        <Wrapper>
         
            <SectionHeader 
                title="Places Near Ujjain" 
                description="Discover beautiful places near Ujjain like Omkareshwar, Mandu, Maheshwar, and Indore. These destinations are perfect for extending your spiritual and cultural journey."
            />



            <div className={styles.cardGrid}>
                {
                    placesNearUjjain.map( (place) => (
                        <Link key={place.id} href={`/places-near-ujjain/${place.slug}`}>
                            <div className={styles.circleCard} key={place.id}>
                                <Image
                                    src={place.image}
                                    alt={place.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <h3 className={styles.name}>{place.name}</h3>
                                    <p className={styles.meta}>{place.distance_from_ujjain_km} km away</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </Wrapper>
    );
};

export default PlacesNearUjjain;