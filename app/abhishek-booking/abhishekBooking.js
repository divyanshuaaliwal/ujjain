'use client';
import { useEffect, useState } from 'react';
import styles from './abhishekBooking.module.css';
import { SectionHeader } from '../MainLayouts';
import { Info } from 'lucide-react';
import { useInternalPageContext } from '../contexts/InternalPagesContext';
import { abhishekBooking } from "../Data/abhishekBooking";
import AbhishekBooking from '../components/AbhishekBookingVideoComponent';


export default function AbhishekBookingComponent() {

    const [activeTab, setActiveTab] = useState('');

    const tabs = ['dressCode', 'genderRestrictions', 'bookingInfo', 'offerings'
    ];

    const { getSubtitle, getObjectDataListOrArrayDataList, getListWithoutLines } = useInternalPageContext();
    useEffect(() => {
        setActiveTab('dressCode');
    }, []);

    return (
        <>

            <AbhishekBooking />


            {/* Main Content Container */}
            <div className={styles.container}>
                <div>
                    <SectionHeader title="Sacred Essence of Mahakal" />

                    <div className={styles.heroGrid3}>

                        <div className={styles.videoWrapper}>
                            <video
                                className={styles.videoElement}
                                src={abhishekBooking.video1}
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
                                Experience the divine serenity as Lord Mahakal is worshipped with sacred offerings, Vedic chants, and an atmosphere filled with unwavering devotion.
                            </span>
                            {
                                getListWithoutLines(abhishekBooking["overview"])
                            }
                        </section>
                    </div>
                </div>

                <div>


                    <div className={styles.heroGrid}>

                        <div>
                            <SectionHeader title="Location" />

                            <section className={styles.section}>
                                {
                                    getListWithoutLines(abhishekBooking["location"])
                                }
                            </section>

                        </div>
                        <div>
                            <SectionHeader title="Timings" />

                            <section className={styles.section}>
                                {
                                    getListWithoutLines(abhishekBooking["timing"])
                                }
                            </section>

                        </div>
                        <div>
                            <SectionHeader title="Procedure" />

                            <section className={styles.section}>
                                {
                                    getListWithoutLines(abhishekBooking["procedure"])
                                }
                            </section>

                        </div>

                    </div>
                </div>

                <div>
                    <SectionHeader title="Guidelines" />

                    <div className={styles.heroGrid2}>



                        <section className={styles.section}><Info size={15} className={styles.icon} style={{ marginLeft: '-18px', verticalAlign: 'middle', color: ' #4b5563' }} />

                            <span className={styles.listItem2Heading}>
                                To attend the Abhishek ritual, devotees are expected to maintain purity, wear modest traditional attire, and arrive early to complete security checks and settle before the ceremony begins.
                            </span>
                            {
                                getListWithoutLines(abhishekBooking["guidelines"])
                            }
                        </section>

                        <div className={styles.videoWrapper}>
                            <video
                                className={styles.videoElement}
                                src={abhishekBooking.video2}
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
                    <SectionHeader title="Ritual Steps" />

                    <div className={styles.heroGrid3}>

                        <div className={styles.videoWrapper}>
                            <video
                                className={styles.videoElement}
                                src={abhishekBooking.video3}
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
                                Immerse yourself in every step of the ritual—from the purification of the Lingam to the sacred Abhishek, graceful decoration, and concluding Aarti—each moment drawing you closer to the divine presence of Lord Mahakal.
                            </span>

                            {
                                getListWithoutLines(abhishekBooking["ritualSteps"])
                            }
                        </section>
                    </div>
                </div>

                <div className={styles.finalContainer}>
                    <div className={styles.tabContainer}>
                        {
                            tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {getSubtitle(tab)}
                                </button>
                            ))
                        }
                    </div>

                    <section className={styles.section}>
                        <h3 className={styles.sectionTitle}>{getSubtitle(activeTab)}</h3>
                        {
                            getObjectDataListOrArrayDataList(abhishekBooking[activeTab])
                        }
                    </section>
                </div>
            </div>
        </>

    );
}