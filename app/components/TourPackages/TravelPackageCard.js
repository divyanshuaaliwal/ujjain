"use client";

import Image from 'next/image';
import { Clock, MapPin } from 'lucide-react';
import { PackageFeatures } from './PackageFeatures';
import styles from './TravelPackageCard.module.css';
import Link from 'next/link';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import TwoButtons from '../TwoButtons';

export default function TravelPackageCard({ pkg }) {


    return (
        <div className={styles.card}>
            {/* Hero Section */}
            <div className={styles.heroContainer}>
                
                <Link href={`/${pkg.slug}`}>
                    <Image
                        src={pkg.image}
                        alt={pkg.title}
                        width={500}
                        height={300}
                        className={styles.heroImage}
                    />
                </Link>
            </div>

            {/* Details Section */}
            <div className={styles.detailsSection}>
                {/* <div className={styles.packageInfo}> */}
                   
                    <h3 className={styles.packageTitle}>{pkg.title}</h3>
                    

                    <div className={styles.infoItem1}>
                        <Clock size={18} className={styles.infoIcon} />
                        <span>{pkg.duration}</span>
                    </div>

                    <div className={styles.infoItem}>
                        <MapPin size={19} className={styles.infoIcon} />
                        <span className={styles.route} >{pkg.route}</span>
                    </div>

                    <div className={styles.priceContainer}>
                        <span className={styles.currencySymbol}>₹</span>
                        <span className={styles.currentPrice}>{pkg.currentPrice}</span>
                        <span className={styles.originalPrice}>₹{pkg.originalPrice}</span>
                        <span className={styles.perPerson}>per person</span>
                    </div>
                 
                    <Stack spacing={1} direction="row" alignItems="center" className={styles.ratingParent}>
                        <span className={styles.ratingLabel}>Customer Rating:</span>
                        <Rating name="half-rating-read" defaultValue={pkg.rating} precision={0.5} readOnly size="small" />
                        <span className={styles.ratingValue}>({pkg.rating})</span>
                    </Stack>

                    <TwoButtons slug={pkg.slug}/>
                {/* </div> */}
            </div>
            
            <PackageFeatures features={pkg.features} />
        </div>
    );
}
