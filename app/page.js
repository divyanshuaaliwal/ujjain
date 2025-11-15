import './globals.css';
import HeroCarousel from './components/HeroCarousel';
import TourPackages from './components/TourPackages';
import PoojaBooking from './components/PoojaBooking';
import MahakalTourPackages from './components/MahakalTourPackages';
import VehiclesPackages from './components/VehiclesPackages';
import PlacesNearUjjain from './components/PlacesNearUjjain';
import ThingsToDoInUjjain from './components/ThingsToDoInUjjain';
import Awards from './components/Awards';
import Contact from './components/Contact';



export default function Home() {
    return (
        <>
            <HeroCarousel />
            <main>
                <TourPackages />
                <MahakalTourPackages />
                <VehiclesPackages />
                <PoojaBooking />
                <ThingsToDoInUjjain />
                <PlacesNearUjjain />
                <Awards />
                <Contact />
            </main>
        </>
    );
}