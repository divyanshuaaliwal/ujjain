'use client'

import styles from './securityServices.module.css';
import Image from 'next/image';
import { services } from '../../Data/securityServices';
import { SectionHeader, Wrapper } from '../../MainLayouts';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';


export default function SecurityServices() {
    return (
        <Wrapper>
            <div className={styles.parent}>
                <div>
                    <SectionHeader
                        title="Security Services"
                    />
                    <div className={styles.cardGrid}>
                        {
                            services.map((service, index) => (
                                <div key={index} className={styles.card}>

                                   <Link href={`/book-now/${service.category}/${service.slug}`} >
                                        <div className={styles.imageWrapper}>
                                            <Image
                                                src={service.image}
                                                alt={service.slug}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </Link>
                                    <div className={styles.cardContent}>
                                        <h2 className={styles.title}>{service.service_name}</h2>
                                        {
                                            service.inclusions.map((item, index) => {
                                                return <span key={index} className={styles.details}> <CheckCircle size={14} style={{ marginRight: '6px', color:"#ff7300" }}   />{item}</span>
                                            })
                                        }
                                          
                                        <Link href={`/book-now/${service.category}/${service.slug}`} className={styles.bookNow}>
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