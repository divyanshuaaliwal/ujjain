import styles from './thingsToDo.module.css';
import Image from 'next/image';
import { attractions } from '../Data/thingsToDoInUjjainData';
import { SectionHeader, Wrapper } from '../MainLayouts';
import Link from 'next/link';

import { MapPin, Clock, Tag } from 'lucide-react';
import TwoButtons from '../components/TwoButtons';

const Card = ({ place }) => {
    const {
        name,
        slug,
        image,
        location,
        timings,
        specialEvents = [],
    } = place;

    return (
        <div className={styles.card}>
            <Link href={`/things-to-do/${slug}`}>
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
                    {location} 
                </p>

                <p className={styles.details}>
                    <Clock size={16} style={{ marginRight: '6px' }} />
                    {timings}
                </p>

                <div className={styles.details}>
                    {
                        specialEvents.slice(0, 2).map( (event, index) => (
                            <span key={index} className={styles.tag}>
                                <Tag size={14} style={{ marginRight: '5px' }} />
                                {event.name}
                            </span>
                        ))
                    }
                </div>

             
             
                <TwoButtons category={"things-to-do"} slug={slug} />
            </div>
        </div>
    );
};


export default function ThingsToDo() {
    return (
        <Wrapper>

        <SectionHeader
            title="Things to do in Ujjain"
            description="Discover top attractions around Ujjain with easy access and pocket-friendly travel options."
        />

            <div className={styles.cardGrid}>
                {
                    attractions.map((place, index) => (
                        <Card key={index} place={place} />
                    ))
                }
            </div>

        </Wrapper>
    );
}
