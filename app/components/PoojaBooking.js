
import styles from './PoojaBooking.module.css';
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

    const topRatedPoojas = pujaData.sort((a, b) => b.rating - a.rating).slice(0, 4); 
        

    return (
        <Wrapper>

            <SectionHeader 
                title="Bhasma Aarti Pooja Booking in Ujjain Mahakal Temple" 
                description="We offer trusted Bhasma Aarti booking services at Shri Mahakaleshwar Jyotirlinga Temple. Skip the long queues and secure your entry for the sacred early morning ritual with our support."
            />


            {
                <div className={styles.grid}>
                    {
                        topRatedPoojas.map((puja) => (
                            <PujaCard key={puja.id} puja={puja} />
                        ))
                    }
                </div>
            }
        </Wrapper>
    );
}
