import React from 'react';
import styles from './TourPackages.module.css';

import TravelPackageCard from '../components/TourPackages/TravelPackageCard';
import {Alltours} from "../Data/completeToursData";
import {SectionHeader, Wrapper} from '../MainLayouts';
export default function Home() {
  
    const topTours = Alltours.sort((a, b) => b.rating - a.rating).slice(0, 4);
   

    return (
        <Wrapper>
           
            <SectionHeader 
                title="Ujjain & Omkareshwar Tour Packages from Indore" 
                description="We provide affordable and customized Ujjain & Omkareshwar tour packages from Indore that include taxi service, hotel booking, darshan arrangements, and guided visits. Enjoy a smooth and spiritual journey to both Jyotirlinga temples with us."
            />


            <div className={styles.cardContainer}>
                {
                    topTours.map((pkg, index) => (
                        <TravelPackageCard key={index} pkg={pkg} />
                    ))
                }
            </div>
        </Wrapper>
    );
}
