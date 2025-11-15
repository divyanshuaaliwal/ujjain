'use client';

import React, { useState } from 'react';
import styles from './vipDarshan.module.css';
import { InternalPageHeading } from '../MainLayouts';
import Link from 'next/link';

export default function VIPDarshanForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        temple: '',
        darshanDate: '',
        darshanTime: '',
        numberOfPersons: '',
        city: '',
        state: '',
        country: '',
        pincode: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            newErrors.email = 'Enter a valid email';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        } else if (!formData.phone.match(/^[6-9]\d{9}$/)) {
            newErrors.phone = 'Enter a valid 10-digit phone number';
        }

        if (!formData.temple) newErrors.temple = 'Please select a temple';
        if (!formData.darshanDate) newErrors.darshanDate = 'Darshan date is required';
        if (!formData.darshanTime) newErrors.darshanTime = 'Darshan time is required';
        if (!formData.numberOfPersons) {
            newErrors.numberOfPersons = 'Number of persons is required';
        } else if (!/^[1-9]\d*$/.test(formData.numberOfPersons)) {
            newErrors.numberOfPersons = 'Enter a valid number of persons';
        }

        if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
            newErrors.pincode = 'Enter a valid 6-digit pincode';
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

    const handleSubmit =  (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);

          
                // console.log('VIP Darshan Form Submitted:', formData);
                setIsSuccess(true);

                
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        temple: '',
                        darshanDate: '',
                        darshanTime: '',
                        numberOfPersons: '',
                        city: '',
                        state: '',
                        country: '',
                        pincode: ''
                    });
                   
          
          
                setIsSubmitting(false);
            
        }
    };
    
    return (
        <div className={styles.wrapperContainer}>
            <div className={styles.formContainer}>
                <InternalPageHeading title="VIP Darshan Booking" />

                {isSuccess ? (
                    <div className={styles.successMessage}>
                        <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none" />
                            <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                        <h2>Thank you!</h2>
                        <p>Your VIP Darshan request has been received.</p>
                           <Link href="/" className={styles.goHomeButton}>
                                                     Go to Home
                                                 </Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className={errors.name ? styles.errorInput : ''}
                            />
                            {errors.name && <p className={styles.error}>{errors.name}</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className={errors.email ? styles.errorInput : ''}
                            />
                            {errors.email && <p className={styles.error}>{errors.email}</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your 10-digit phone number"
                                className={errors.phone ? styles.errorInput : ''}
                            />
                            {errors.phone && <p className={styles.error}>{errors.phone}</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="temple">Temple</label>
                            <select
                                id="temple"
                                name="temple"
                                value={formData.temple}
                                onChange={handleChange}
                                className={errors.temple ? styles.errorInput : ''}
                            >
                                <option value="">Select a temple</option>
                                <option value="Mahakaleshwar">Mahakaleshwar Temple</option>
                                <option value="Kal Bhairav">Kal Bhairav Temple</option>
                                <option value="Mangalnath">Mangalnath Temple</option>
                            </select>
                            {errors.temple && <p className={styles.error}>{errors.temple}</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="darshanDate">Preferred Darshan Date</label>
                            <input
                                id="darshanDate"
                                name="darshanDate"
                                type="date"
                                value={formData.darshanDate}
                                onChange={handleChange}
                                className={errors.darshanDate ? styles.errorInput : ''}
                            />
                            {errors.darshanDate && <p className={styles.error}>{errors.darshanDate}</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="darshanTime">Preferred Darshan Time</label>
                            <input
                                id="darshanTime"
                                name="darshanTime"
                                type="time"
                                value={formData.darshanTime}
                                onChange={handleChange}
                                className={errors.darshanTime ? styles.errorInput : ''}
                            />
                            {errors.darshanTime && <p className={styles.error}>{errors.darshanTime}</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="numberOfPersons">Number of Persons</label>
                            <input
                                id="numberOfPersons"
                                name="numberOfPersons"
                                type="number"
                                value={formData.numberOfPersons}
                                onChange={handleChange}
                                placeholder="Enter number of persons"
                                className={errors.numberOfPersons ? styles.errorInput : ''}
                            />
                            {errors.numberOfPersons && <p className={styles.error}>{errors.numberOfPersons}</p>}
                        </div>

                        {['city', 'state', 'country', 'pincode'].map((field) => (
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
                        ))}

                        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Book VIP Darshan'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}