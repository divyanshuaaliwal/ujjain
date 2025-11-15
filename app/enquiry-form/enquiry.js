'use client';

import React, { useState } from 'react';
import styles from './enquiry.module.css';
import { InternalPageHeading } from '../MainLayouts';
import Link from 'next/link';

export default function UserEnquiryForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
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

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;
        
    setIsSubmitting(true);

    // console.log('Form Submitted:', formData);
    setIsSuccess(true);

   
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            city: '',
            state: '',
            country: '',
            pincode: ''
        });
        setIsSubmitting(false); 

    
};


    return (
        <div className={styles.wrapperContainer}>
            <div className={styles.formContainer}>
                <InternalPageHeading title="User Enquiry Form" />

                {isSuccess ? (
                     <div className={styles.successMessage}>
                                                <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none" />
                            <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                                                 <h2>Thank you!</h2>
                                                 <p>We have received your request.</p>
                     
                                                 <Link href="/" className={styles.goHomeButton}>
                                                     Go to Home
                                                 </Link>
                     
                                             </div>
                ) : (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        {['name', 'email', 'phone', 'subject', 'city', 'state', 'country', 'pincode'].map((field) => (
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
                )}
            </div>
        </div>
    );
}