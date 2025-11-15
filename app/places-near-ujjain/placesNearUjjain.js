import styles from './placesNearUjjain.module.css';
import Image from 'next/image';
import { placesNearUjjain } from '../Data/placesNearUjjainData';
import { SectionHeader, Wrapper } from '../MainLayouts';
import Link from 'next/link';

import { MapPin, Clock, Tag, ArrowRight } from 'lucide-react';
import TwoButtons from '../components/TwoButtons';

const Card = ({ place }) => {
    const {
        name,
        slug,
        image,
        distance_from_ujjain_km,
        travel_time,
        tags = [],
    } = place;

    return (
        <div className={styles.card}>
            <Link href={`/places-near-ujjain/${slug}`}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </Link>

            <div className={styles.cardContent}>
                <h2 className={styles.title}>{name}</h2>

                <p className={styles.details}>
                    <MapPin size={16} style={{ marginRight: '6px' }} />
                    {distance_from_ujjain_km} km from Ujjain
                </p>

                <p className={styles.details}>
                    <Clock size={16} style={{ marginRight: '6px' }} />
                    {travel_time}
                </p>

                <div className={styles.details}>
                    {
                        tags.slice(0, 3).map( (tag, index) => (
                            <span key={index} className={styles.tag}>
                                <Tag size={14} style={{ marginRight: '5px' }} />
                                {tag}
                            </span>
                        ))
                    }
                </div>

               

                <TwoButtons category={"places-near-ujjain"} slug={slug}  />
            </div>
        </div>
    );
};


export default function PlacesNearUjjain() {
    return (
        <Wrapper>

            <SectionHeader
                title="Near By Places"
                description="Explore nearby attractions in Ujjain with convenient and budget-friendly travel packages."
            />
            <div className={styles.cardGrid}>
                {
                    placesNearUjjain.map((place, index) => (
                        <Card key={index} place={place} />
                    ))
                }
            </div>

        </Wrapper>
    );
}
