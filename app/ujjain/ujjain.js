'use client';
import styles from './ujjain.module.css';
import { SectionHeader } from '../MainLayouts';
import { Star, Info, } from 'lucide-react';
import { useInternalPageContext } from '../contexts/InternalPagesContext';
import { ujjainDarshan } from "../Data/ujjainDarshanData";
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

export default function Ujjain() {


    const { getListWithoutLines } = useInternalPageContext();



    return (
        <>

            <div className={styles.heroSection1}>

                <div className={styles.heroOverlay}>

                    <h1 className={styles.heroHeading}>
                        <span className={styles.om}>ॐ</span> Ujjain Darshan
                    </h1>

                    <h2 className={styles.heroSubheading}>Discover the Glory of Shri Mahakaleshwar</h2>

                    <div className={styles.divider}></div>

                    <p className={styles.heroText}>
                        Witness timeless traditions, sacred chants, and the divine aura of Ujjain’s most revered temple
                    </p>
                </div>


            </div>

            {/* Main Content Container */}
            <div className={styles.container}>


                <div>
                    <SectionHeader title="The Place of Mahakal" />

                    <div className={styles.heroGrid3}>

                        <div className={styles.videoWrapper}>
                            <video
                                className={styles.videoElement}
                                src={ujjainDarshan.video}
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
                                Ujjain, steeped in myth and sanctity, stands as a beacon of devotion where Lord Shiva is eternally worshipped in his fierce Mahakaleshwar form on the Shipra’s banks.
                            </span>
                            {
                                getListWithoutLines(ujjainDarshan.ujjainOverview)
                            }
                        </section>
                    </div>
                </div>

                <div>
                    <SectionHeader title={"Rituals and Poojas"} />

                    <div className={styles.heroGrid}>
                        {
                            ujjainDarshan.ritualsAndPoojas.map((ritualAndPooja) => (
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
                            ujjainDarshan.ghats.map((ghat) => (
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
                                src={ujjainDarshan.spiritualSignificance}
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
                                As one of the Sapta Puri and the site of the Kumbh Mela, Ujjain holds unmatched religious importance, symbolizing cosmic balance and spiritual awakening.
                            </span>

                            {
                                getListWithoutLines(ujjainDarshan.city)
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
                                getListWithoutLines(ujjainDarshan.practicalTips)
                            }
                        </section>

                        <div className={styles.videoWrapper}>
                            <video
                                className={styles.videoElement}
                                src={ujjainDarshan.templeVideo}
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
                    <SectionHeader title={"Temples in Ujjain"} />

                    <div className={styles.heroGrid}>
                        {
                            ujjainDarshan.temples.map((temple) => (
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