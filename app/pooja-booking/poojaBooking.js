
import styles from './poojaBooking.module.css';
import {pujaData} from '../Data/poojaData';
import Image from 'next/image';
import { SectionHeader, Wrapper } from '../MainLayouts';
import Link from 'next/link';
import TwoButtons from '../components/TwoButtons';


const PujaCard = ({ puja }) => {
    return (
        <div className={styles.card}>
            <Link href={`pooja-booking/${puja.slug}`} className={styles.imgContainer}>
                <Image src={puja.image} alt={puja.title} fill className={styles.image} />
             </Link>
            <div className={styles.content}>
                <h3 className={styles.title}>{puja.title}</h3>
                <p className={styles.subtitle}>{puja.subtitle}</p>
                <p className={styles.location}>{puja.location}</p>
                <TwoButtons category={"pooja-booking"} slug={puja.slug} />
            </div>
        </div>
    );
};


export default function PoojaBooking() {
    return (
        <Wrapper>

            <SectionHeader
                title="Puja Booking"
                description="Comfortable stays near the temple for a peaceful pilgrimage experience"
            />

            {
                <div className={styles.grid}>
                    {
                        pujaData.map((puja) => (
                            <PujaCard key={puja.id} puja={puja} />
                        ))
                    }
                </div>
            }
        </Wrapper>
    );
}
