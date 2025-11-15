'use client'
import TourPage from "../components/MP_Tours";
import Tour from "../components/Ujjain_Tour"
import { useParams, notFound } from 'next/navigation';
import { allMPTours } from '../Data/madhyaPradeshTourData';
import { Alltours } from '../Data/completeToursData';

export default function Page() {
  const { slug } = useParams();

  const mpTour = allMPTours.find(tour => tour.slug === slug);
  const ujjainTour = Alltours.find(tour => tour.slug === slug);

  if (mpTour) return <TourPage slug={slug} />;
  if (ujjainTour) return <Tour slug={slug} />;

  notFound();
}
