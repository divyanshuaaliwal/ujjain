'use client';
import React, { useState , useEffect} from 'react';
import styles from './itemEnquiry.module.css';
import { InternalPageHeading } from '../../../MainLayouts';
import { useParams } from 'next/navigation';

import { allHotels } from '@/app/Data/allHotelsData'; // hotels-in-mp + hotels-in-ujjain
import { Alltours } from '@/app/Data/completeToursData';  //tours
// import { helicopterRides } from '@/app/Data/helicopterTravelPackagesData'; // just ignore it 
import { cars } from '@/app/Data/luxuaryCarsData'; // luxury-cars
import { allMPTours } from '@/app/Data/madhyaPradeshTourData'; // madhya-pradesh-tour
import { placesNearUjjain } from '@/app/Data/placesNearUjjainData'; // places-near-ujjain
import { pujaData } from '@/app/Data/poojaData'; // pooja-booking
import { services } from '@/app/Data/securityServices'; // security-services
import { attractions } from '@/app/Data/thingsToDoInUjjainData';  // things-to-do
import { vehiclePackages } from '@/app/Data/vehiclePackagesData'; // taxi-booking





const UserEnquiryForm = () => {

    const { category, slug } = useParams();


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        packageCategory: category,
        packageSlug:'',
    });

    useEffect(() => {
        if (slug) {
            setFormData(prev => ({
                ...prev,
                packageSlug: slugToService(slug),
            }));
        }
    }, [slug]);

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const getPackageLabel = (category) => {
        switch (category) {
            case 'taxi-booking':
                return 'Taxi Booking';
            case 'madhya-pradesh-tour':
                return 'Madhya Pradesh Tour Package';
            case 'hotels-in-mp':
                return 'Madhya Pradesh Hotel Package';
            case 'pooja-booking':
                return 'Pooja Package';
            case 'tours':
                return 'Full Darshan Package';
            case 'hotels-in-ujjain':
                return 'Ujjain Hotel Package';
            case 'places-near-ujjain':
                return 'Place Package';
            case 'things-to-do':
                return 'Activity Package';
            case 'security-services':
                return 'Security Service Package';
            case 'luxury-cars':
                return 'Luxury Car Package';
            case 'darshan-booking':
                return 'Darshan Booking Package';
            default:
                return null;
        }
    };

    function slugToService(slug) {

        if (!slug) return '';

        // Split by hyphens
        const words = slug.split('-');

        // Remove trailing numeric word(s)
        while (words.length && !isNaN(words[words.length - 1])) {
            words.pop();
        }

        // Capitalize each word
        const titleCase = words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        return titleCase;
    }


    const findSlug = (slug) => {

        if (category === 'darshan-booking') {
            return true; // ✅ manually allow this category
        }

        const categoryMap = {
            'taxi-booking': vehiclePackages,
            'madhya-pradesh-tour': allMPTours,
            'hotels-in-mp': allHotels,
            'hotels-in-ujjain': allHotels,
            'pooja-booking': pujaData,
            'tours': Alltours,
            'places-near-ujjain': placesNearUjjain,
            'things-to-do': attractions,
            'security-services': services,
            'luxury-cars': cars,
        };

        const dataList = categoryMap[category];
        if (!dataList) return false;

        return dataList.some(item => item.slug === slug);
    };


    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        } else if (!formData.phone.match(/^[6-9]\d{9}$/)) {
            newErrors.phone = 'Enter a valid 10-digit phone number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);

            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                // console.log('Form Submitted:', formData);
                setIsSuccess(true);
                setErrors({}); // ✅ clear all errors here
                setTimeout(() => {
                    
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: '',
                        city: '',
                        state: '',
                        country: '',
                        pincode: '',
                        packageCategory: category,
                        packageSlug: slugToService(slug),
                    });
                    setIsSuccess(false);
                }, 10000);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };


    if (!getPackageLabel(category) || !findSlug(slug)) {
        return <div className={styles.notFound}>Service not found</div>;
    }




    return (
        <div className={styles.wrapperContainer}>
            <div className={styles.formContainer}>
                <InternalPageHeading title="Want to Enquire Something ?" />

                {
                    isSuccess ? (
                        <div className={styles.successMessage}>
                            <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none" />
                                <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>
                            <h2>Thank you!</h2>
                            <p>We have received your request.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.form}>

                            <div className={styles.grid}>
                                <div className={styles.inputGroup}>
                                    <input
                                        readOnly
                                        disabled
                                        id={category}
                                        name={category}
                                        value={getPackageLabel(category)}
                                        className={styles.fixedInput}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <input
                                        readOnly
                                        disabled
                                        id={slug}
                                        name={slug}
                                        value={
                                            (() => {
                                                const words = slug.replaceAll('-', ' ').split(' ');
                                                const lastWord = words[words.length - 1];
                                                if (!isNaN(lastWord)) {
                                                    words.pop(); // remove last word if it's a number
                                                }
                                                return words
                                                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                                    .join(' ');
                                            })()
                                        }

                                        className={styles.fixedInput}
                                    />
                                </div>

                            </div>

                            {
                                ['name', 'email', 'phone', 'subject', 'city', 'state', 'country', 'pincode'].map((field) => (
                                    <div key={field} className={styles.inputGroup}>
                                        <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                        <input
                                            id={field}
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            placeholder={`Enter your ${field}`}
                                            className={errors[field] ? styles.errorInput : ''}
                                        />
                                        {errors[field] && <p className={styles.error}>{errors[field]}</p>}
                                    </div>
                                ))
                            }

                            <div className={styles.inputGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Write your message here"
                                />
                            </div>

                            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                            </button>
                        </form>
                    )
                }
            </div>
        </div>
    );
}

export default UserEnquiryForm;