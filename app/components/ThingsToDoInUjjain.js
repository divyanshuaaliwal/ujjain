import React from 'react';
import styles from './ThingsToDoInUjjain.module.css';
import { SectionHeader, Wrapper } from '../MainLayouts';
import { attractions } from "../Data/thingsToDoInUjjainData";
import Image from 'next/image';
import { MapPin, Clock, Ticket, Tags, Star} from 'lucide-react';
import Link from 'next/link';
import TwoButtons from '../components/TwoButtons';

const ThingsToDoInUjjain = () => { 

   const topRatedAttractions = attractions.sort((a, b) => b.rating - a.rating).slice(0, 4); 
    
    return (
        <Wrapper>
            <SectionHeader 
                title="Things To Do In Ujjain" 
                description="From attending the divine Bhasma Aarti, visiting ancient temples, exploring ghats, to experiencing local culture, there are many things to do in Ujjain that make your trip memorable."
            />


            <section className={styles.attractionsGrid}>
                {
                    topRatedAttractions.map((attraction) => {
                        return (
                            <div key={attraction.id} className={styles.attractionCard}>
                                
                                <Link href={`/things-to-do/${attraction.slug}`}>
                                    <div className={styles.imageContainer}>
                                        <Image
                                            src={attraction.image}
                                            fill
                                            alt={attraction.name}
                                            className={styles.attractionImage} />
                                    </div>
                                </Link>
                                <div className={styles.attractionInfo}>
                                    <h3>{attraction.name}</h3>
                                    <p>{attraction.description}</p>

                                    <div className={styles.extraInfo}>
                                        <p><MapPin size={16} /> <strong>Location:</strong> <span  className={styles.lines}>{attraction.location}</span></p>
                                        <p><Clock size={16} /> <strong>Timings:</strong> <span  className={styles.lines}>{attraction.timings}</span></p>
                                        <p><Ticket size={16} /> <strong>Entry Fee:</strong> <span  className={styles.lines}>{attraction.entryFee}</span></p>
                                        <p><Tags size={16} /> <strong>Category:</strong> <span  className={styles.lines}>{attraction.category}</span> </p>
                                        <p><Star size={16} /> <strong>Rating:</strong> <span  className={styles.lines}>{attraction.rating}</span></p>
                                    </div>

                                   
                                    <TwoButtons category={"things-to-do"} slug={attraction.slug} />
                                    
                                </div>
                            </div>
                        );
                    })
                }
            </section>
        </Wrapper>
    );
};

export default ThingsToDoInUjjain;
