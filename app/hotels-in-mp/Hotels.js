'use client';

import { useState, useEffect } from "react";
import { Star, MapPin, Filter, ArrowUpDown, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { allHotels } from "../Data/allHotelsData";
import styles from './Hotels.module.css';
import { InternalPageHeading } from "../MainLayouts";
import Image from "next/image";

const mpHotels = allHotels.filter( hotel => hotel.hotelFor === "mp");

  export default function Hotels() {

    const [selectedStars, setSelectedStars] = useState([]);
    const [sortBy, setSortBy] = useState("");
    
  
    const [filteredHotels, setFilteredHotels] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    
    const ratings = [3, 4, 5];
    const hotelsPerPage = 5;


    useEffect(() => {

        let updatedHotels = [...(mpHotels || [])];

        // stars rating filter 
        if (selectedStars.length > 0) {
            updatedHotels = updatedHotels.filter(hotel => selectedStars.includes(Math.floor(hotel.rating || 0)));
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
                updatedHotels.sort((a, b) => getPriceValue(a.currentPrice) - getPriceValue(b.currentPrice));
                break;

            case "price-high":
                updatedHotels.sort((a, b) => getPriceValue(b.currentPrice) - getPriceValue(a.currentPrice));
                break;

            case "rating":
                updatedHotels.sort((a, b) => (b.rating || 0) - (a.rating || 0));
                break;

            default:
                // No sorting, keep original order
                break;
        }

        setFilteredHotels(updatedHotels);
        setCurrentPage(1); // Reset to first page on filter/sort change

    }, [selectedStars, sortBy]);

    // Pagination calculations
    const totalPages = Math.ceil((filteredHotels?.length || 0) / hotelsPerPage);
    const indexOfLastHotel = currentPage * hotelsPerPage;
    const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
    const currentHotels = filteredHotels?.slice(indexOfFirstHotel, indexOfLastHotel) || [];


    // Handlers
    const toggleStar = (star) => {
        setSelectedStars((prevStars) =>
            prevStars.includes(star)
                ? prevStars.filter((s) => s !== star)
                : [...prevStars, star]
        );
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
                    title="Hotel Booking in Madhya Pradesh"
                />

                <div className={styles.heroContent}>

                    <p className={styles.heroDescription}>
                        We enable wildlife travelers to instantly book a wide range of hotels and resorts — from luxury to budget — across.

                    </p>
                </div>
            </div>

            <div className={styles.mainContent}>
                <div className={styles.contentWrapper}>
                    {/* Filter and Sort Section */}
                    <div className={styles.filterSection}>
                        <div className={styles.sortFilterContainer}>

                            {/* sort by star rating */}
                            <div className={styles.starFilter}>
                                <h3 className={styles.filterTitle}>
                                    <Filter className={styles.filterIcon} />
                                    Hotel Rating
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
                                                {/* star icon */}
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

                            {/* sort by price and rating */}
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

                    {/* Hotels List */}
                    <div className={styles.hotelsList}>
                        {
                            currentHotels.length > 0 ? (
                                currentHotels.map((hotel, index) => (
                                    
                                    <div key={index} className={styles.hotelCard}>
                                        <div className={styles.hotelGrid}>
                                            <Link
                                                href={`/hotels-in-mp/${hotel.slug}`}
                                                className={styles.hotelImageContainer}
                                            >
                                                <Image
                                                    src={hotel.heroImage}
                                                    alt={hotel.id}
                                                    fill
                                                    className={styles.hotelImage}
                                                />
                                                {
                                                    hotel.amenities && (
                                                        <div className={styles.featuredBadge}>Featured</div>
                                                    )
                                                }
                                            </Link>

                                            <div className={styles.hotelDetails}>
                                                <div className={styles.hotelHeader}>
                                                    <div>
                                                        <Link
                                                            href={`/hotels-in-mp/${hotel.slug}`}
                                                            className={styles.hotelLink}
                                                        >
                                                            <h3 className={styles.hotelName}>{hotel.title}</h3>
                                                        </Link>
                                                        <div className={styles.locationContainer}>
                                                            <MapPin className={styles.locationIcon} />
                                                            <span>{hotel.location}</span>
                                                        </div>
                                                    </div>
                                                    <div className={styles.ratingContainer}>
                                                        <div className={styles.ratingWrapper}>
                                                            <Star className={styles.ratingStar} />
                                                            <span className={styles.ratingValue}>
                                                                {hotel.rating}
                                                            </span>
                                                            <span className={styles.reviewsCount}>
                                                                ({hotel.reviews} Reviews)
                                                            </span>
                                                        </div>
                                                        <div className={styles.priceContainer}>
                                                            {hotel.currentPrice}
                                                            <span className={styles.priceUnit}> / Night</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className={styles.hotelAddress}>{hotel.subtitle}</p>

                                                <div className={styles.amenitiesGrid}>
                                                    {
                                                        hotel?.amenities.slice(0, 6).map((amenity, idx) => (
                                                        <div key={idx} className={styles.amenityItem}>
                                                                <CheckCircle className={styles.amenityIcon} />
                                                                <span>{amenity}</span>
                                                            </div>
                                                        ))
                                                    }
                                                </div>

                                                <Link
                                                      href={`/hotels-in-mp/${hotel.slug}`}
                                                    className={styles.bookButton}
                                                >
                                                    Enquire Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className={styles.noResults}>
                                    <p>No hotels found matching your criteria.</p>
                                </div>
                            )
                        }

                        {/* Pagination */}
                        {(filteredHotels?.length || 0) > hotelsPerPage && (
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
