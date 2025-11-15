'use client';

import styles from './maheshwar.module.css';
import { SectionHeader } from '../MainLayouts';
import { Star, Info, } from 'lucide-react';
import { useInternalPageContext } from '../contexts/InternalPagesContext';
import { maheshwarDarshan } from "../Data/maheshwarData";
import { Clock, MapPin, Sun, Flame } from 'lucide-react';

const RitualCard = ({ ritual }) => {
    const { name, description, location, duration, timing, benefits } = ritual;

    return (
        <div className={styles.card}>
              <div>
                <h3 className={styles.cardTitle}>{name}</h3>
                <p className={styles.cardDescription}>{description}</p>
            </div>

            <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                    <MapPin size={18} className={styles.cardIcon} />
                    <span><strong>Location:</strong> {location}</span>
                </div>
                <div className={styles.infoItem}>
                    <Clock size={18} className={styles.cardIcon} />
                    <span><strong>Duration:</strong> {duration}</span>
                </div>
                <div className={styles.infoItem}>
                    <Sun size={18} className={styles.cardIcon} />
                    <span><strong>Timing:</strong> {timing}</span>
                </div>

                <div className={styles.featuresContainer}>
                    {
                        benefits.map((feature, index) => (
                            <div key={index} className={styles.featureItem}>

                                <span className={styles.featureLabel}>{feature}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};


const Ghats = ({ Ghat }) => {
    const { name, description, significance, location, timings, facilities } = Ghat;

    return (
        <div className={styles.card}>
             <div>
                <h3 className={styles.cardTitle}>{name}</h3>
                <p className={styles.cardDescription}>{description}</p>
            </div>

            <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                    <MapPin size={18} className={styles.cardIcon} />
                    <span><strong>Location:</strong> {location}</span>
                </div>

                <div className={styles.infoItem}>
                    <Star size={18} className={styles.cardIcon} />
                    <span><strong>Significance:</strong> {significance}</span>
                </div>

                <div className={styles.infoItem}>
                    <Sun size={18} className={styles.cardIcon} />
                    <span><strong>Timing:</strong> {timings}</span>
                </div>

                <div className={styles.featuresContainer}>
                    {
                        facilities.map((feature, index) => (
                            <div key={index} className={styles.featureItem}>

                                <span className={styles.featureLabel}>{feature}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};


const Temples = ({ temple }) => {
    const { name, description, architecture, location, timings, features } = temple;

    return (
        <div className={styles.card}>
             <div>
                <h3 className={styles.cardTitle}>{name}</h3>
                <p className={styles.cardDescription}>{description}</p>
            </div>

            <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                    <MapPin size={18} className={styles.cardIcon} />
                    <span><strong>Location:</strong> {location}</span>
                </div>

                <div className={styles.infoItem}>
                    <Star size={18} className={styles.cardIcon} />
                    <span><strong>architecture:</strong> {architecture}</span>
                </div>

                <div className={styles.infoItem}>
                    <Sun size={18} className={styles.cardIcon} />
                    <span><strong>Timing:</strong> {timings}</span>
                </div>

                <div className={styles.infoItem}>
                    <Flame size={18} className={styles.cardIcon} />
                    <span><strong>features:</strong> {features}</span>
                </div>
            </div>
        </div>
    );
};



export default function Maheshwar() {


    const { getListWithoutLines } = useInternalPageContext();



    return (
        <>

            <div className={styles.heroSection1}>

                <div className={styles.heroOverlay}>

                    <h1 className={styles.heroHeading}>
                        <span className={styles.om}>ॐ</span> Maheshwar
                    </h1>

                    <h2 className={styles.heroSubheading}>Experience the Serenity of Maheshwar</h2>

                    <div className={styles.divider}></div>

                    <p className={styles.heroText}>
                        Discover the timeless charm of Maheshwar, where the sacred Narmada River flows beside ancient temples and the legacy of Queen Ahilyabai Holkar endures.
                    </p>
                </div>


            </div>

            {/* Main Content Container */}
            <div className={styles.container}>


                <div>
                   <SectionHeader title="The Royal Town of Maheshwar" />

                    <div className={styles.heroGrid3}>

                        <div className={styles.videoWrapper}>
                         <video
    className={styles.videoElement}
    src={maheshwarDarshan.video1}
    loop
    autoPlay
    muted
                    playsInline={true}
    preload="auto"
    controls={false}
    disablePictureInPicture
/>

                            <div className={styles.videoOverlay}></div>
                        </div>



                        <section className={styles.section}>
                            <Info size={15} className={styles.icon} style={{ marginLeft: '-18px', verticalAlign: 'middle', color: ' #4b5563' }} />

                            <span className={styles.listItem2Heading}>
                                Experience the divine aura of Maheshwar, where the sacred Narmada forms ‘Om’ and Lord Shiva’s presence fills the island with timeless spiritual energy.
                            </span>
                            {
                                getListWithoutLines(maheshwarDarshan.maheshwarOverview)
                            }
                        </section>
                    </div>
                </div>

                <div>
                    <SectionHeader title={"Rituals and Poojas"} />

                    <div className={styles.heroGrid}>
                        {
                            maheshwarDarshan.ritualsAndPoojas.map((ritualAndPooja) => (
                                <div key={ritualAndPooja.name}>
                                    {
                                        <RitualCard ritual={ritualAndPooja} />

                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div>
                    <SectionHeader title={"Ghats"} />

                    <div className={styles.heroGrid}>
                        {
                            maheshwarDarshan.ghats.map((ghat) => (
                                <div key={ghat.name}>
                                    {
                                        <Ghats Ghat={ghat} />

                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div>
                    <SectionHeader title="About" />

                    <div className={styles.heroGrid3}>

                        <div className={styles.videoWrapper}>
                          <video
    className={styles.videoElement}
    src={maheshwarDarshan.video2}
    loop
    autoPlay
    muted
                    playsInline={true}
    preload="auto"
    controls={false}
    disablePictureInPicture
/>

                            <div className={styles.videoOverlay}></div>
                        </div>

                        <section className={styles.section}>
                            <Info size={15} className={styles.icon} style={{ marginLeft: '-18px', verticalAlign: 'middle', color: ' #4b5563' }} />

                            <span className={styles.listItem2Heading}>
                                Steeped in history and devotion, Maheshwar is renowned for its majestic Ahilya Fort, ancient temples, and handwoven Maheshwari sarees. Situated on the banks of the Narmada River, it reflects the spiritual and cultural glory of Madhya Pradesh.
                            </span>

                            {
                                getListWithoutLines(maheshwarDarshan.city)
                            }
                        </section>
                    </div>
                </div>

                <div>
                    <SectionHeader title="Practical Tips" />

                    <div className={styles.heroGrid2}>



                        <section className={styles.section}>
                            <Info size={15} className={styles.icon} style={{ marginLeft: '-18px', verticalAlign: 'middle', color: ' #4b5563' }} />

                            <span className={styles.listItem2Heading}>
                                Plan ahead by booking early, dressing traditionally, carrying minimal belongings, and preparing for a deeply moving but early-morning experience at the temple.
                            </span>
                            {
                                getListWithoutLines(maheshwarDarshan.practicalTips)
                            }
                        </section>

                        <div className={styles.videoWrapper}>
                           <video
    className={styles.videoElement}
    src={maheshwarDarshan.video3}
    loop
    autoPlay
    muted
                    playsInline={true}
    preload="auto"
    controls={false}
    disablePictureInPicture
/>

                            <div className={styles.videoOverlay}></div>
                        </div>
                    </div>
                </div>

                <div>
                    <SectionHeader title={"Temples in Maheshwar"} />

                    <div className={styles.heroGrid}>
                        {
                            maheshwarDarshan.temples.map((temple) => (
                                <div key={temple.name}>
                                    {
                                        <Temples temple={temple} />

                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>



        </>

    );
}