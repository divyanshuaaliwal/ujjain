'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { attractions } from '../../Data/thingsToDoInUjjainData';
import styles from './thing.module.css';
import { InternalPageHeading, InternalPageWrapper } from '../../MainLayouts';
import { Timer, Hotel, MapPin, Clock9, Hourglass, AlarmClockCheck, Info, CheckCircle } from 'lucide-react';
import { useInternalPageContext } from '@/app/contexts/InternalPagesContext';
import Link from 'next/link';
import Image from 'next/image';

export default function Thing() {

    const [activeTab1, setActiveTab1] = useState(null);
    const [activeTab2, setActiveTab2] = useState(null);
    const [activeTab3, setActiveTab3] = useState(null);
    const [activeTab4, setActiveTab4] = useState(null);
    

    const { getSubtitle, getObjectDataListOrArrayDataList } = useInternalPageContext();
    const { slug } = useParams();
    const place = attractions.find( (place) => place.slug === slug);

    
   
    useEffect(() => {
        setActiveTab1('highlights');
        setActiveTab2('photography');
        setActiveTab3('history');
        setActiveTab4('dressCode');
    }, [])


    if (!place) {
        return <div className={styles.notFound}>Place not found</div>;
    } 

    const handleTabChange1 = (tab) => setActiveTab1(tab);
    const handleTabChange2 = (tab) => setActiveTab2(tab);
    const handleTabChange3 = (tab) => setActiveTab3(tab);
    const handleTabChange4 = (tab) => setActiveTab4(tab);


    const tabs1 = ['highlights', 'transportation', 'facilities', 'rules', 'languagesSpoken'];
    const tabs2 = ['photography', 'crowd', 'visitorTips', 'specialEvents','peakSeason'];
    const tabs3 = ['history', 'significance', 'architecture', 'yearEstablished'];
    const tabs4 = ['dressCode', 'conservationStatus', 'management', 'annualVisitors'];




    return (
        <InternalPageWrapper>

            <InternalPageHeading title={place.name} />

            <div className={styles.heroGrid}>

                <Link href={'/'}>
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
                </Link>

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
                            <strong><Hourglass size={16} className={styles.icon} /> Best time to visit:</strong> {place.bestTimeToVisit}
                        </p>
                        <p>
                            <strong><Timer size={16} className={styles.icon} /> Recommended visit duration</strong> {place.recommendedVisitDuration}
                        </p>

                        {
                            place.aarti_timings && <p>
                                <strong><Clock9 size={16} className={styles.icon} /> Aarti Timings:</strong> {place.aarti_timings}
                            </p>
                        }


                        <p className={styles.overviewText}>
                            <Info size={16} className={styles.icon} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                            {place.detailedDescription}
                        </p>
                    </div>


                    <Link href={`/book-now/things-to-do/${slug}`}
                            className={styles.bookNowButtonHero} >
                          Enquire Now  <CheckCircle size={16} className={styles.icon} style={{ marginLeft: '6px' }} />
                    </Link>
                </div>


                <div>
                    <div className={styles.tabContainer}>
                        {
                            tabs1.map((tab1) => (
                                <button
                                    key={tab1}
                                    className={`${styles.tabButton} ${tab1 === activeTab1 ? styles.active : ''}`}
                                    onClick={() => handleTabChange1(tab1)}
                                >
                                    {getSubtitle(tab1)}
                                </button>
                            ))
                        }
                    </div>
                    <section className={styles.section}>
                        <h3 className={styles.sectionTitle}>{getSubtitle(activeTab1)}</h3>

                        {

                            getObjectDataListOrArrayDataList(place[activeTab1])

                        }
                    </section>

                </div>


                <div>
                    <div className={styles.tabContainer}>
                        {
                            tabs2.map((tab2) => (
                                <button
                                    key={tab2}
                                    className={`${styles.tabButton} ${tab2 === activeTab2 ? styles.active : ''}`}
                                    onClick={() => handleTabChange2(tab2)}
                                >
                                    {getSubtitle(tab2)}
                                </button>
                            ))
                        }
                    </div>
                    <section className={styles.section}>
                        <h3 className={styles.sectionTitle}>{getSubtitle(activeTab2)}</h3>

                        {

                            getObjectDataListOrArrayDataList(place[activeTab2])

                        }
                    </section>

                </div>

                <div>
                    <div className={styles.tabContainer}>
                        {
                            tabs3.map((tab3) => (
                                <button
                                    key={tab3}
                                    className={`${styles.tabButton} ${tab3 === activeTab3 ? styles.active : ''}`}
                                    onClick={() => handleTabChange3(tab3)}
                                >
                                    {getSubtitle(tab3)}
                                </button>
                            ))
                        }
                    </div>
                    <section className={styles.section}>
                        <h3 className={styles.sectionTitle}>{getSubtitle(activeTab3)}</h3>
                        {getObjectDataListOrArrayDataList(place[activeTab3])}
                    </section>
                </div>

                <div>
                    <div className={styles.tabContainer}>
                        {
                            tabs4.map((tab4) => (
                                <button
                                    key={tab4}
                                    className={`${styles.tabButton} ${tab4 === activeTab4 ? styles.active : ''}`}
                                    onClick={() => handleTabChange4(tab4)}
                                >
                                    {getSubtitle(tab4)}
                                </button>
                            ))
                        }
                    </div>
                    <section className={styles.section}>
                        <h3 className={styles.sectionTitle}>{getSubtitle(activeTab4)}</h3>
                        {getObjectDataListOrArrayDataList(place[activeTab4])}
                    </section>
                </div>

            </div>


        </InternalPageWrapper>
    );
}