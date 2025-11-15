'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { allHotels } from '../../Data/allHotelsData';
import Image from 'next/image';
import styles from './Hotel.module.css';
import { InternalPageHeading, InternalPageWrapper } from '../../MainLayouts';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Hotel, MapPin, Tag, Star, Info, CheckCircle, Clock9, Users } from 'lucide-react';
import { useInternalPageContext } from '@/app/contexts/InternalPagesContext';
import Link from 'next/link';


export default function HelicopterTourPage() {

    const [activeTab, setActiveTab] = useState(null);
    const { slug } = useParams();
    const [activeRoom, setActiveRoom] = useState(null);
    const [activeDining, setActiveDining] = useState(null);

    const { getObjectDataListOrArrayDataList, getSubtitle } = useInternalPageContext();

    const hotel = allHotels.find(h => h.slug === slug);

    useEffect(() => {
        if (!hotel) return;

        setActiveTab('highlights');
        setActiveRoom(hotel.roomTypes[0].name);
        setActiveDining(hotel.diningOptions[0].name);
    }, [hotel]);


    const tabs = ['highlights', 'amenities', 'specialServices', 'nearbyAttractions', 'policies'];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleRoomChange = (room) => {
        setActiveRoom(room);
    };

    const handleDiningChange = (dining) => {
        setActiveDining(dining);
    };


    if (!hotel) {
        return <div className={styles.notFound}>Hotel not found</div>;
    }

    return (
        <InternalPageWrapper>

            <InternalPageHeading title={hotel.title} />

            <div className={styles.heroGrid}>
                <div className={styles.heroImageWrapper}>
                    <Image
                        src={hotel.heroImage}
                        alt={hotel.title}
                        fill
                        className={styles.heroImage}
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
                <div className={styles.overviewCard}>
                    <h3 className={styles.cardTitle}>Tour Overview</h3>
                    <div className={styles.overviewDetails}>
                        <p>
                            <strong><Hotel size={16} className={styles.icon} /> About:</strong> {hotel.subtitle}
                        </p>
                        <p>
                            <strong><MapPin size={16} className={styles.icon} /> Location:</strong> {hotel.location}
                        </p>
                        <p>
                            <strong><Clock9 size={16} className={styles.icon} /> Duration:</strong> {hotel.duration}
                        </p>
                        <p>
                            <strong><Users size={16} className={styles.icon} /> Guests:</strong> {hotel.guests}
                        </p>
                        <p className={styles.priceInfo}>
                            <strong><Tag size={16} className={styles.icon} /> Price:</strong>{' '}
                            <span className={styles.currentPrice}>₹{hotel.currentPrice}</span>{' '}
                            <span className={styles.originalPrice}>₹{hotel.originalPrice}</span>{' '}
                            <span className={styles.saving}>(Save ₹{hotel.saving})</span>
                        </p>
                        <Stack spacing={1} direction="row" alignItems="center" className={styles.ratingParent}>
                            <Star size={16} className={styles.icon} />
                            <span className={styles.ratingLabel}> Customer Rating:</span>
                            <Rating
                                name="half-rating-read"
                                defaultValue={hotel.rating}
                                precision={0.5}
                                readOnly
                                size="small"
                            />
                            <span className={styles.ratingValue}>({hotel.rating})</span>
                        </Stack>
                        <p className={styles.overviewText}>
                            <Info size={16} className={styles.icon} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                            {hotel.overview}
                        </p>
                    </div>

                    <Link href={`/book-now/hotels-in-mp/${slug}`} className={styles.bookNowButtonHero}>
                        Enquire Now  <CheckCircle size={16} className={styles.icon} style={{ marginRight: '6px', }} />
                    </Link>
                </div>
            </div>


            <div className={styles.heroGrid}>
                <div>
                    <div className={styles.tabContainer}>
                        {
                            tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
                                    onClick={() => handleTabChange(tab)}
                                >
                                    {getSubtitle(tab)}
                                </button>
                            ))
                        }
                    </div>

                    <section className={styles.section}>
                        <h3 className={styles.sectionTitle}>{getSubtitle(activeTab)}</h3>
                        {
                            getObjectDataListOrArrayDataList(hotel[activeTab])
                        }
                    </section>
                </div>

                <div>
                    <div className={styles.tabContainer}>
                        {
                            hotel.roomTypes.map((room) => (
                                <button
                                    key={room.name}
                                    className={`${styles.tabButton} ${activeRoom === room.name ? styles.active : ''}`}
                                    onClick={() => handleRoomChange(room.name)}
                                >
                                    {getSubtitle(room.name)}
                                </button>
                            ))
                        }
                    </div>
                    <section className={styles.section}>
                        <h3 className={styles.sectionTitle}>{getSubtitle(activeRoom)}</h3>

                        {
                            hotel.roomTypes.filter((room) => room.name === activeRoom).map((room) => (
                                <ul key={room.name} className={styles.roomDetails}>
                                    {
                                        Object.entries(room).map(([key, value]) => {

                                            if (key === "name") return null;

                                            const label = key
                                                .replace(/([A-Z])/g, ' $1')   // space before capital letters
                                                .replace(/^./, str => str.toUpperCase()); // capitalize first letter

                                            // Format value (if array like amenities)
                                            const displayValue = Array.isArray(value)
                                                ? value.join(', ')
                                                : value;

                                            return (
                                                <li key={key} className={styles.listItem}>
                                                    <strong>{label}:</strong> {displayValue}
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            ))
                        }
                    </section>

                </div>
            </div>

            <div className={styles.heroGrid}>
                <div>
                    <div className={styles.tabContainer}>
                        {
                            hotel.diningOptions.map((dining) => (
                                <button
                                    key={dining.name}
                                    className={`${styles.tabButton} ${activeDining === dining.name ? styles.active : ''}`}
                                    onClick={() => handleDiningChange(dining.name)}
                                >
                                    {getSubtitle(dining.name)}
                                </button>
                            ))
                        }
                    </div>
                    <section className={styles.section}>
                        <h3 className={styles.sectionTitle}>{getSubtitle(activeDining)}</h3>

                        {
                            hotel.diningOptions.filter((dining) => dining.name === activeDining).map((dining) => (
                                <ul key={dining.name} className={styles.roomDetails}>
                                    {
                                        Object.entries(dining).map(([key, value]) => {

                                            if (key === "name") return null;

                                            const label = key
                                                .replace(/([A-Z])/g, ' $1')   // space before capital letters
                                                .replace(/^./, str => str.toUpperCase()); // capitalize first letter

                                            // Format value (if array like amenities)
                                            const displayValue = Array.isArray(value)
                                                ? value.join(', ')
                                                : value;

                                            return (
                                                <li key={key} className={styles.listItem}>
                                                    <strong>{label}:</strong> {displayValue}
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            ))
                        }
                    </section>

                </div>


                <div>
                    <section className={styles.section2}>
                        <h3 className={styles.sectionTitle}>Cancellation Policy</h3>
                        {
                            getObjectDataListOrArrayDataList(hotel.cancellationPolicy)
                        }
                    </section>
                </div>
            </div>

        </InternalPageWrapper>
    );
}