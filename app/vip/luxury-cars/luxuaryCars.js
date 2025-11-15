'use client'

import styles from './luxuaryCars.module.css';
import Image from 'next/image';
import { cars } from '../../Data/luxuaryCarsData';
import { SectionHeader, Wrapper } from '../../MainLayouts';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function LuxuaryCars() {
    return (
        <Wrapper>
            <div className={styles.parent}>

                <div>
                    <SectionHeader
                        title="Luxuary Cars"
                    />
                    <div className={styles.cardGrid}>
                        {
                            cars.map((car) => (
                                <div key={car.slug} className={styles.card}>

                                    <Link href={`/book-now/${car.category}/${car.slug}`} >
                                        <div className={styles.imageWrapper}>
                                            <Image
                                                src={car.img}
                                                alt={car.slug}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </Link>
                                    <div className={styles.cardContent}>
                                        <h2 className={styles.title}>{car.vehicle_name}</h2>

                                        {
                                            car.inclusions.map( (item, index) => {
                                                return <span key={index} className={styles.details}> <CheckCircle size={14} style={{ marginRight: '6px', color:"#ff7300" }}   />{item}</span>
                                            })
                                        }

                                         <Link href={`/book-now/${car.category}/${car.slug}`} className={styles.bookNow}>
                                            Enquire Now
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </Wrapper>
    );
}
