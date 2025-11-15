'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './vehicle.module.css';
import { InternalPageHeading, InternalPageWrapper } from '../../../MainLayouts';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Clock, Route, Tag, Star, Briefcase, Users, CheckCircle, MapPin, Info } from 'lucide-react';
import { vehiclePackages } from '@/app/Data/vehiclePackagesData';
import { useInternalPageContext } from '@/app/contexts/InternalPagesContext';
import Link from 'next/link';


export default function Vehicle() {

    const [activeTab, setActiveTab] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const { getSubtitle, getObjectDataListOrArrayDataList } = useInternalPageContext();


    const { slug } = useParams();
    const vehicle = vehiclePackages.find((vehicle) => vehicle.slug === slug);

    useEffect(() => {
        setActiveTab('inclusions');
    }, [vehicle])

    if (!vehicle) {
        return <div className={styles.notFound}>Vehicle not found</div>;
    }


    const tabs = ['inclusions', 'exclusions', 'features', 'policies', 'notes'];


    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };


    return (
        <InternalPageWrapper>

            <InternalPageHeading title={vehicle.vehicle_name} />

            <div className={styles.heroGrid}>

                <div>
                    <div className={styles.heroImageWrapper}>
                        {/* Hero Image */}
                        <Image
                            src={vehicle.gallery[currentIndex]}
                            alt={vehicle.vehicle_name}
                            fill
                            className={styles.heroImage}
                            style={{ objectFit: 'cover' }}
                            priority
                        />

                        {/* Thumbnails */}

                    </div>

                    <div className={styles.thumbnailContainer}>
                        {
                            vehicle.gallery.map((img, index) => (
                                <div
                                    key={index}
                                    className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    <Image
                                        src={img}
                                        alt={`Thumbnail ${index + 1}`}
                                        width={150} // Add these
                                        height={70}
                                        className={styles.thumbnailImage}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>




                <div className={styles.overviewCard}>

                    <h3 className={styles.cardTitle}>Tour Overview</h3>

                    <div className={styles.overviewDetails}>


                         <p className={styles.priceInfo}>
                            <strong><Tag size={16} className={styles.icon} /> Price:</strong>{' '}
                            <span className={styles.currentPrice}>₹{vehicle.pricing.current_price}</span>{' '}
                            <span className={styles.originalPrice}>₹{vehicle.pricing.original_price}</span>{' '}
                            <span className={styles.saving}>(Save {vehicle.pricing.discount_percentage} %)</span>
                        </p>

                         <p className={styles.priceInfo}>
                            <strong><Tag size={16} className={styles.icon} /> Driver charges:</strong>{' '}
                            <span className={styles.driverPrice}>₹{vehicle.driver_charges}</span>{' '}
                            {/* <span className={styles.originalPrice}>₹{vehicle.pricing.original_price}</span>{' '} */}
                            {/* <span className={styles.saving}>(Save {vehicle.pricing.discount_percentage} %)</span> */}
                        </p>


                        <p>
                            <strong>
                                <MapPin size={16} className={styles.icon} /> Km Limit:
                            </strong>{' '}
                            {vehicle.km}
                        </p>

                        <p>
                            <strong>
                                <Briefcase size={16} className={styles.icon} /> Luggage:
                            </strong>{' '}
                            {vehicle.luggage}
                        </p>

                        <p>
                            <strong>
                                <Users size={16} className={styles.icon} /> Capacity:
                            </strong>{' '}
                            {vehicle.total_person_capacity} persons
                        </p>


                        <p>
                            <strong><Route size={16} className={styles.icon} /> Route:</strong>{' '}
                            {vehicle.starting_point} → {vehicle.ending_point}
                        </p>

                        <p>
                            <strong><Clock size={16} className={styles.icon} />   Duration:</strong> {vehicle.duration}
                        </p>


                       
                        <Stack spacing={1} direction="row" alignItems="center" className={styles.ratingParent}>
                            <Star size={16} className={styles.icon} />
                            <span className={styles.ratingLabel}> Customer Rating:</span>
                            <Rating
                                name="half-rating-read"
                                defaultValue={vehicle.rating}
                                precision={0.5}
                                readOnly
                                size="small"
                            />
                            <span className={styles.ratingValue}>({vehicle.rating})</span>
                        </Stack>
                        <p className={styles.overviewText}>
                            <Info size={16} className={styles.icon} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                            {vehicle.overview}
                        </p>


                    </div>
                    <Link href={`/book-now/taxi-booking/${slug}`} className={styles.bookNowButtonHero}>
                        Enquire Now  <CheckCircle size={16} className={styles.icon} style={{ marginRight: '6px', }} />
                    </Link>


                </div>




                <div>

                    <section className={styles.specifications}>
                        <h3 className={styles.sectionTitle}>{getSubtitle('specifications')}</h3>
                        {
                            getObjectDataListOrArrayDataList(vehicle['specifications'])
                        }
                    </section>
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
                            getObjectDataListOrArrayDataList(vehicle[activeTab])
                        }
                    </section>
                </div>

            </div>


        </InternalPageWrapper>
    );
}