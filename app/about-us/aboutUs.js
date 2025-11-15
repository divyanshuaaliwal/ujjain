"use client";

import { CheckCircle } from 'lucide-react';
import { SectionHeader, Wrapper } from '../MainLayouts';
import styles from './aboutUs.module.css';
import comfortableTravelImg from "../assets/comfortableTravel.png";
import stayNearTempleImg from "../assets/stayNearTheTemple.png";
import darshan from "../assets/darshan.png";
import CountUp from 'react-countup';


const Headings = ({ title }) => {
    return (
        <div className={styles.internalPagesHeadingContainer}>
            <h2 className={styles.internalPagesTitle}>{title}</h2>
            <div className={styles.internalPagesDivider}>
                <span className={styles.dividerIcon}>🔱</span>
            </div>
        </div>
    );
};

export default function About() {

    const features = [
        {
            heading: "Comfortable Stay",
            image: stayNearTempleImg.src,
            items: [
                "Clean & hygienic rooms",
                "Walking distance from Mahakal",
                "Verified hotels & guesthouses",
                "AC & Non-AC room options",
                "Early check-in available",
                "Friendly staff familiar with pilgrim needs",
                "Budget to premium category stays",
                // "24x7 reception & support",
                // "Rooms with temple view (on request)"
            ]
        },
        {
            heading: "Smooth Travel",
            image: comfortableTravelImg.src,
            items: [
                "Experienced, respectful drivers",
                "AC vehicles for long journeys",
                "Flexible pickup & drop locations",
                "Private & shared cab options",
                "All vehicles regularly sanitized",
                "Local sightseeing available",
                "Punctual service with live tracking",
                // "Trained drivers for senior citizens",
                // "Round-the-clock travel support"
            ]
        },
        {
            heading: "Spiritual Darshan",
            image: darshan.src, // make sure this is in public/images/
            items: [
                "Darshan slot booking assistance",
                "On-ground support staff",
                "Real-time updates during your visit",
                "Guided entry during rush hours",
                "Help with Bhasma Aarti bookings",
                "Priority access support (where applicable)",
                "Puja Samagri arrangements on request",
                // "Assistance for elderly & differently-abled",
                // "24x7 helpline during darshan journey"
            ]
        }
    ];

    const stats = [
        { number: 10000, suffix: "+", label: "Pilgrims Served" },
        { number: 150, suffix: "+", label: "Verified Stays" },
        { number: 50, suffix: "+", label: "Experienced Drivers" },
        { number: 24, suffix: "x7", label: "Live Assistance" },
    ];

  const whyChooseUS = [
    "Devotion-first approach rooted in spirituality and service",
    "100% verified and trusted stays & travel partners",
    "Transparent pricing with absolutely no hidden charges",
    "On-ground assistance from experienced local support staff",
    "Customized experiences designed for every pilgrim’s comfort",
    // "Seamless booking and dedicated customer care",
];



    return (
        <Wrapper>
            <div className={styles.container}>

                <SectionHeader
                    title={"About Us"}
                    description={"Our mission is to redefine the Ujjain Mahakal Darshan experience - making it more comfortable, organized, and spiritually enriching. We have transformed this holy journey into a smooth, respectful, and memorable experience for devotees."}
                />

                <div className={styles.cardGrid}>
                    {
                        features.map((section, index) => (
                            <div key={index}>
                                <Headings title={section.heading} />
                                <div className={styles.card}>
                                    <div
                                        className={styles.cardBackground}
                                        style={{ backgroundImage: `url(${section.image})` }}
                                    />
                                    <div className={styles.cardOverlay}>
                                        <ul className={styles.cardList}>
                                            {
                                                section.items.map((item, idx) => (
                                                    <li key={idx}>
                                                        <CheckCircle className={styles.icon} />
                                                        <span>{item}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>


                <div className={styles.ourStoryGrid}>
                    <div>                   
                        <Headings title={"Our Story"} />
                        <p className={styles.storyParagraph}>
                         UjjainMahakal.com was founded with a deep devotion to Mahakal Baba and a mission to make every pilgrim’s journey seamless. What started as a small initiative to help a few friends, has now served 10,000+ pilgrims with love and respect. Over time, it has grown into a trusted platform.
                        </p>
                    </div>

                    <div>
                        <Headings title={"Why Us ?"} /> 
                        <ul className={styles.valueList}>
                            {
                                whyChooseUS.map((item, index) => (
                                    <li key={index}>
                                        <CheckCircle className={styles.icon}/>   <span> {item} </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className={styles.statsSection}>
                    <Headings title={"Our Journey in Numbers"} />
                    <div className={styles.statsGrid}>
                        {
                            stats.map((item, index) => (
                                <div key={index} className={styles.statCard}>
                                    <h3>
                                        <CountUp end={item.number} duration={2} />
                                        {item.suffix}
                                    </h3>
                                    <p>{item.label}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>



            </div>

        </Wrapper>
    );
}
