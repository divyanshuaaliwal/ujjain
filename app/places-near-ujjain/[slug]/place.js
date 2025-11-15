'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { placesNearUjjain } from '../../Data/placesNearUjjainData';
import Image from 'next/image';
import styles from './place.module.css';
import { InternalPageHeading, InternalPageWrapper } from '../../MainLayouts';
import { Timer, Hotel, MapPin, Clock9, Hourglass, AlarmClockCheck, Info, CheckCircle } from 'lucide-react';
import { useInternalPageContext } from '@/app/contexts/InternalPagesContext';
import Link from 'next/link';

export default function Place() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeTab, setActiveTab] = useState(null);
    const tabs = ['activities', 'famous_food', 'festivals', 'accommodation', 'attractions'];
    
    const { getSubtitle, getObjectDataListOrArrayDataList } = useInternalPageContext();

    const { slug } = useParams();
    const place = placesNearUjjain.find((place) => place.slug === slug);
    const RemainingPlaces = placesNearUjjain.filter((place) => place.slug !== slug);
    const lengthOfArray = RemainingPlaces.length;

    
    useEffect( () => {
        setActiveTab('activities');
    }, [])
    
    if (!place) {
        return <div className={styles.notFound}>Place not found</div>;
    }

 

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % lengthOfArray);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + lengthOfArray) % lengthOfArray);
    };

    

 
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };



  

    return (
        <InternalPageWrapper>

            <InternalPageHeading title={place.name} />

            <div className={styles.heroGrid}>

               
                    <div className={styles.heroImageWrapper}>
                        <Image
                            src={place.image}
                            alt={place.name}
                            fill
                            className={styles.heroImage}
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
               
                <div className={styles.overviewCard}>
                    <h3 className={styles.cardTitle}>Place Overview</h3>

                    <div className={styles.overviewDetails}>
                        <p>
                            <strong><Hotel size={16} className={styles.icon} /> About:</strong> {place.description}
                        </p>
                        <p>
                            <strong><MapPin size={16} className={styles.icon} /> Location:</strong> {place.location}
                        </p>
                        <p>
                            <strong><AlarmClockCheck size={16} className={styles.icon} /> Timings:</strong> {place.timings}
                        </p>


                        <p>
                            <strong><Hourglass size={16} className={styles.icon} /> Distance from ujjain:</strong> {place.distance_from_ujjain_km} km
                        </p>
                        <p>
                            <strong><Timer size={16} className={styles.icon} /> Travel Time:</strong> {place.travel_time}
                        </p>

                        {
                            place.aarti_timings && <p>
                                <strong><Clock9 size={16} className={styles.icon} /> Aarti Timings:</strong> {place.aarti_timings}
                            </p>
                        }


                        <p className={styles.overviewText}>
                            <Info size={16} className={styles.icon} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                            {place.detailed_description}
                        </p>
                    </div>


                       <Link href={`/book-now/places-near-ujjain/${slug}`} className={styles.bookNowButtonHero}>
                       Enquire Now  <CheckCircle size={16} className={styles.icon} style={{ marginRight: '6px', }} />
                    </Link>
                    
                </div>


                <div >
                    <div className={styles.tabContainer}>
                        {
                            tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className={`${styles.tabButton} ${tab === activeTab ? styles.active : ''}`}
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

                            getObjectDataListOrArrayDataList(place[activeTab])

                        }
                    </section>

                </div>
  

                <div>
                    <section className={styles.section3}>


                        <h3 className={styles.sectionTitle}>Other Places</h3>
                     
                        <div className={styles.placeCard}>
                                

                            <div className={styles.placeImageWrapper}>
                                <Link href={`/places-near-ujjain/${RemainingPlaces[currentIndex].slug}`}>
                                <Image

                                    src={RemainingPlaces[currentIndex].image}
                                    alt={RemainingPlaces[currentIndex].name}
                                    fill
                                    className={styles.placeImage}
                                    style={{ objectFit: 'cover' }}
                                />
                                </Link>
                            </div>

                            <Link href={`/places-near-ujjain/${RemainingPlaces[currentIndex].slug}`}>
                            <div className={styles.placeInfo}>
                                <h3 className={styles.placeTitle}>{RemainingPlaces[currentIndex].name}</h3>
                                <p className={styles.placeLocation}>{RemainingPlaces[currentIndex].location}</p>
                                <p className={styles.placeDistance}>{RemainingPlaces[currentIndex].distance_from_ujjain_km} km from Ujjain</p>
                            </div>
                            </Link>
                        

                            <div className={styles.carousel}>
                                <div className={styles.controls}>
                                    <button onClick={goToPrev} className={styles.navButton}>⟨</button>
                                    <button onClick={goToNext} className={styles.navButton}>⟩</button>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>


        </InternalPageWrapper>
    );
}