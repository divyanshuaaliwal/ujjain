'use client'

import styles from './category.module.css';
import Image from 'next/image';
import { vehiclePackages } from '../../Data/vehiclePackagesData';
import { MapPin, Briefcase, Users } from 'lucide-react';
import { SectionHeader, Wrapper } from '../../MainLayouts';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useInternalPageContext } from '@/app/contexts/InternalPagesContext';
import TwoButtons from '@/app/components/TwoButtons';

const Card = ({ taxi }) => {
    const {
        slug,
        vehicle_name,
        pricing,
        km,
        luggage,
        total_person_capacity,
        gallery,
        category,
    } = taxi;

    return (
        <div className={styles.card}>

            <Link href={`/taxi-booking/${category}/${slug}`}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={gallery[0]}
                        alt={vehicle_name}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </Link>
            <div className={styles.cardContent}>
                <h2 className={styles.title}>{vehicle_name}</h2>


                <p className={styles.details}>
                    <MapPin size={16} style={{ marginRight: '6px' }} />
                    {km}
                </p>
                <div className={styles.innerData}>

                    <p className={styles.details}>
                        <Briefcase size={16} style={{ marginRight: '6px' }} />
                        {luggage}
                    </p>
                    <p className={styles.details}>
                        <Users size={16} style={{ marginRight: '6px' }} />
                        {total_person_capacity} persons
                    </p>
                </div>

                <div className={styles.priceBox}>
                    <span className={styles.currentPrice}>₹{pricing.current_price}</span>
                    <span className={styles.originalPrice}>₹{pricing.original_price}</span>
                    <span className={styles.discount}>{pricing.discount_percentage}% OFF</span>
                </div>

                <TwoButtons category={`taxi-booking/${category}`} slug={slug} />
            </div>
        </div>
    );
};

export default function Vehicles() {

    const {category} = useParams();
    const vehicles = vehiclePackages.filter( vehicle => vehicle.category === category);

    const {getSubtitle} = useInternalPageContext();

    return (
        <Wrapper>
            <div className={styles.parent}>
                
                <div>
                    <SectionHeader
                          title={`${getSubtitle(category)} Booking`}
                    />
                    <div className={styles.cardGrid}>
                        {
                            vehicles.map((taxi, index) => (
                                <Card key={index} taxi={taxi}/>
                            ))
                        }
                    </div>
                </div>

            </div>
        </Wrapper>
    );
}
