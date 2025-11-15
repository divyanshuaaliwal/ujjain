"use client";

import { useInternalPageContext } from '@/app/contexts/InternalPagesContext';
import styles from './TravelPackageCard.module.css';

export function PackageFeatures({ features }) {

    const { getIcon } = useInternalPageContext();

    return (
        <div className={styles.featuresContainer}>
            {
                features.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                        <div className={styles.featureIcon}>
                            {getIcon(feature.icon)}
                        </div>
                        <span className={styles.featureLabel}>{feature.label}</span>
                    </div>
                ))
            }
        </div>
    );
}
