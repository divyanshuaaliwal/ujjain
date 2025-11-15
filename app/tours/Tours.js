'use client';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from "react";
import { Star, Clock, Filter, ListFilterPlus, ArrowUpDown, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Alltours, ratings, toursFor } from "../Data/completeToursData";
import styles from './Tours.module.css';
import { InternalPageHeading } from "../MainLayouts";
import Image from "next/image";


export default function Tours() {

    const [selectedStars, setSelectedStars] = useState([]);
    const [selectedTourFor, setSelectedTourFor] = useState(null);
    const [sortBy, setSortBy] = useState('');
    const [filteredtours, setFilteredtours] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const searchParams = useSearchParams();
    const toursPerPage = 5;
       
    useEffect(() => {
        const destination = searchParams?.get("destination")?.replaceAll(' ', '-').toLowerCase() || '';
        setSelectedTourFor(destination);
    }, [searchParams]);

    useEffect(() => {
        setFilteredtours(Alltours);
        setCurrentPage(1);
    }, [])


    function toTitleCase(str) {
        return str
            .toLowerCase()
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }



    useEffect(() => {

        let updatedTours = [...Alltours || []];

        // stars rating filter 
        if (selectedStars.length > 0) {
            updatedTours = updatedTours.filter((tour) => {
                return selectedStars.includes(Math.floor(tour.rating || 0))
            });
        }

        if (selectedTourFor !== '') {
            updatedTours = updatedTours.filter((tour) => {
                return tour.tourFor.replaceAll(' ', '-').toLowerCase() === selectedTourFor;
            });

        }
        // Helper function to convert price string to number
        const getPriceValue = (price) => {
            if (typeof price === "string") {
                const numeric = price.replace(/[^0-9]/g, "");
                return parseInt(numeric, 10) || 0;
            }
            return typeof price === "number" ? price : 0;
        };

        // Sorting logic
        switch (sortBy) {
            case "price-low":
                updatedTours.sort((a, b) => getPriceValue(a.currentPrice) - getPriceValue(b.currentPrice));
                break;

            case "price-high":
                updatedTours.sort((a, b) => getPriceValue(b.currentPrice) - getPriceValue(a.currentPrice));
                break;

            case "rating":
                updatedTours.sort((a, b) => (b.rating || 0) - (a.rating || 0));
                break;

            default:
                // No sorting, keep original order
                break;
        }

        setFilteredtours(updatedTours);
        setCurrentPage(1); // Reset to first page on filter/sort change

    }, [selectedStars, selectedTourFor, sortBy]);

    // Pagination calculations
    const totalPages = Math.ceil((filteredtours?.length || 0) / toursPerPage);
    const indexOfLasttour = currentPage * toursPerPage;
    const indexOfFirsttour = indexOfLasttour - toursPerPage;
    const currenttours = filteredtours?.slice(indexOfFirsttour, indexOfLasttour) || [];


    // Handlers
    const toggleStar = (star) => {
        setSelectedStars((prevStars) =>
            prevStars.includes(star)
                ? prevStars.filter((s) => s !== star)
                : [...prevStars, star]
        );
    };

    const toggleSelectedTourFor = (tourName) => {
        const slug = tourName.replaceAll(' ', '-').toLowerCase();
        if (selectedTourFor !== slug) {
            setSelectedTourFor(slug);
        } else {
            setSelectedTourFor('');
        }
    };
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <div className={styles.pageContainer}>
            <div className={styles.heroSection}>

                <InternalPageHeading
                    title="Tour Booking"
                />

                <div className={styles.heroContent}>

                    <p className={styles.heroDescription}>
                        Explore top destinations like Ujjain, Omkareshwar, and more with our customizable tour packages. From spiritual journeys to cultural escapes, we make your travel seamless and memorable.
                    </p>
                </div>
            </div>

            <div className={styles.mainContent}>
                <div className={styles.contentWrapper}>

                    <div className={styles.filterSection}>
                        <div className={styles.sortFilterContainer}>


                            <div className={styles.starFilter}>
                                <h3 className={styles.filterTitle}>
                                    <Filter className={styles.filterIcon} />
                                    tour Rating
                                </h3>
                                <div className={styles.starButtons}>
                                    {
                                        ratings.map((star) => (
                                            <button
                                                key={star}
                                                onClick={() => toggleStar(star)}
                                                className={`${styles.starButton} ${selectedStars.includes(star) ? styles.activeStar : ""
                                                    }`}
                                            >

                                                <Star
                                                    className={`${styles.starIcon} ${selectedStars.includes(star) ? styles.filledStar : ""
                                                        }`}
                                                />
                                                <span>{star} Star</span>
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={styles.starFilter}>
                                <h3 className={styles.filterTitle}>
                                    <ListFilterPlus className={styles.filterIcon} />
                                    tour For
                                </h3>
                                <div className={styles.starButtons}>
                                    {
                                        toursFor.map((tourName) => (
                                            <button
                                                key={tourName}
                                                onClick={() => toggleSelectedTourFor(tourName)}
                                                className={`${styles.starButton} ${selectedTourFor === tourName.replaceAll(' ', '-').toLowerCase() ? styles.activeStar : ""}`}

                                            >
                                                <span>{toTitleCase(tourName)}</span>
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>


                            <div className={styles.sortOptions}>
                                <h3 className={styles.filterTitle}>
                                    <ArrowUpDown className={styles.filterIcon} />
                                    Sort By
                                </h3>
                                <select
                                    value={sortBy}
                                    onChange={handleSortChange}
                                    className={styles.sortSelect}
                                >
                                    <option className={styles.option} value="">Default</option>
                                    <option className={styles.option} value="price-low">Price: Low to High</option>
                                    <option className={styles.option} value="price-high">Price: High to Low</option>
                                    <option className={styles.option} value="rating">Rating</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Tours List */}
                    <div className={styles.toursList}>
                        {
                            currenttours.length > 0 ? (
                                currenttours.map((tour, index) => (
                                    <div key={index} className={styles.tourCard}>
                                        <div className={styles.tourGrid}>
                                            <Link
                                                href={`/${tour.slug}`}
                                                className={styles.tourImageContainer}
                                            >
                                                <Image
                                                    src={tour.image}
                                                    alt={tour.id}
                                                    className={styles.tourImage}
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                />
                                                {
                                                    tour.priceInclusive && (
                                                        <div className={styles.featuredBadge}>Featured</div>
                                                    )
                                                }
                                            </Link>

                                            <div className={styles.tourDetails}>
                                                <div className={styles.tourHeader}>
                                                    <div>
                                                        <Link
                                                            href={`/${tour.slug}`}
                                                            className={styles.tourLink}
                                                        >
                                                            <h3 className={styles.tourName}>{tour.title}</h3>
                                                        </Link>
                                                        <div className={styles.locationContainer}>
                                                            <Clock className={styles.locationIcon} />
                                                            <span>{tour.duration}</span>
                                                        </div>
                                                        <p className={styles.tourAddress}>{tour.subtitle}</p>
                                                    </div>
                                                    <div className={styles.ratingContainer}>
                                                        <div className={styles.ratingWrapper}>
                                                            <Star className={styles.ratingStar} />
                                                            <span className={styles.ratingValue}>
                                                                {tour.rating}
                                                            </span>
                                                            <span className={styles.reviewsCount}>
                                                                ({tour.reviews} Reviews)
                                                            </span>
                                                        </div>
                                                        <div className={styles.priceContainer}>
                                                            ₹{tour.currentPrice}
                                                            <span className={styles.priceUnit}> / Night</span>
                                                        </div>
                                                        
                                                        <Link
                                                            href={`/${tour.slug}`}
                                                            className={styles.bookButton}
                                                        >
                                                          Enquire Now
                                                        </Link>

                                                        
                                                    </div>
                                                </div>



                                                <div className={styles.amenitiesGrid}>
                                                    {
                                                        tour.priceInclusive.slice(0, 4).map((amenity, idx) => (
                                                            <div key={idx} className={styles.amenityItem}>
                                                                <CheckCircle className={styles.amenityIcon} />
                                                                <span>{amenity}</span>
                                                            </div>
                                                        ))
                                                    }
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className={styles.noResults}>
                                    <p>No tours found matching your criteria.</p>
                                </div>
                            )
                        }

                        {/* Pagination */}
                        {(filteredtours?.length || 0) > toursPerPage && (
                            <div className={styles.pagination}>
                                <button
                                    onClick={prevPage}
                                    disabled={currentPage === 1}
                                    className={`${styles.paginationButton} ${currentPage === 1 ? styles.disabledButton : ""
                                        }`}
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                <div className={styles.pageNumbers}>

                                    <button

                                        className={`${styles.pageButton} ${styles.activePage
                                            }`}
                                    >
                                        {currentPage}
                                    </button>

                                </div>

                                <button
                                    onClick={nextPage}
                                    disabled={currentPage === totalPages}
                                    className={`${styles.paginationButton} ${currentPage === totalPages ? styles.disabledButton : ""
                                        }`}
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
