'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { pujaData } from '../../Data/poojaData';
import Image from 'next/image';
import styles from './pooja.module.css';
import { InternalPageHeading, InternalPageWrapper } from '../../MainLayouts';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {Timer, Hotel, MapPin, Tag, Star, Info, CheckCircle} from 'lucide-react';
import { useInternalPageContext } from '@/app/contexts/InternalPagesContext';
import Link from 'next/link';

export default function Pooja() {

    const [activeTab, setActiveTab] = useState(null);
    const [activeTab2, setActiveTab2] = useState(null);
    const [activeTab3, setActiveTab3] = useState(null);

    const {getSubtitle, getObjectDataListOrArrayDataList} = useInternalPageContext();


    const { slug } = useParams();
    const pooja = pujaData.find((pooja) => pooja.slug === slug);
    
    useEffect(() => {
        setActiveTab("benefits");
        setActiveTab2("suitable_for");
        setActiveTab3("frequency");
    }, []);

    if (!pooja) {
        return <div className={styles.notFound}>Pooja not found</div>
    }

 

    const tabs = ['benefits', 'materials_used', 'procedure', 'follow_up', 'preparation_required'];
    const tabs2 = ['suitable_for', 'not_suitable_for', 'accessibility', 'follow_up'];
    const tabs3 = ['frequency', 'seasonal_offer', 'priest_qualification',  'environmental_impact', 'languages_supported'];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleTabChange2 = (tab2) => {
        setActiveTab2(tab2);
    };

    const handleTabChange3 = (tab3) => {
        setActiveTab3(tab3);
    };




    return (
        <InternalPageWrapper>

            <InternalPageHeading title={pooja.title} />

            <div className={styles.heroGrid}>
                
                <div className={styles.heroImageWrapper}>
                    <Image
                        src={pooja.image}
                        alt={pooja.title}
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
                            <strong><Hotel size={16} className={styles.icon} /> About:</strong> {pooja.subtitle}
                        </p>
                         <p>
                            <strong><Timer size={16} className={styles.icon} />  Duration:</strong> {pooja. duration}
                        </p>
                         <p>
                            <strong><Timer size={16} className={styles.icon} />  Best Time:</strong> {pooja. best_time}
                        </p>
                        <p>
                            <strong><MapPin size={16} className={styles.icon} /> Location:</strong> {pooja.location}
                        </p>
                        <p className={styles.priceInfo}>
                            <strong><Tag size={16} className={styles.icon} /> Price:</strong>{' '}
                            <span className={styles.currentPrice}>₹{pooja.pricing.discount_amount}</span>{' '}
                            <span className={styles.originalPrice}>₹{pooja.pricing.original_price}</span>{' '}
                            <span className={styles.saving}>(Save {pooja.pricing.discount_percentage}%)</span>
                        </p>
                        <Stack spacing={1} direction="row" alignItems="center" className={styles.ratingParent}>
                            <Star size={16} className={styles.icon} />
                            <span className={styles.ratingLabel}> Customer Rating:</span>
                            <Rating
                                name="half-rating-read"
                                defaultValue={pooja.rating}
                                precision={0.5}
                                readOnly
                                size="small"
                            />
                            <span className={styles.ratingValue}>({pooja.rating})</span>
                        </Stack>
                        <p className={styles.overviewText}>
                            <Info size={16} className={styles.icon} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                            {pooja.description}
                        </p>
                    </div>
                    <Link href={`/book-now/pooja-booking/${slug}`} className={styles.bookNowButtonHero}>
                       Enquire Now  <CheckCircle size={16} className={styles.icon} style={{ marginRight: '6px', }} />
                    </Link>

    
                </div>

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
                                getObjectDataListOrArrayDataList(pooja[activeTab])
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
                          
                            getObjectDataListOrArrayDataList(pooja[activeTab2])
                            
                        }
                    </section>

                </div>
                
                <div className={styles.finalItem}>
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

                        {
                          
                            getObjectDataListOrArrayDataList(pooja[activeTab3])
                            
                        }
                    </section>

                </div>
            </div>


        </InternalPageWrapper>
    );
}