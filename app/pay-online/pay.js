'use client';

import Link from 'next/link';
import { InternalPageHeading } from '../MainLayouts';
import styles from './pay.module.css';
import { useState } from 'react';

export default function PayOnlineForm() {
    const [formData, setFormData] = useState({
        enquiry: "Pay Online",
        name: '',
        email: '',
        phone: '',
        amount: '',
        additionalInfo: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!formData.phone.match(/^[6-9]\d{9}$/)) {
            newErrors.phone = 'Valid 10-digit phone number required';
        }


        if (!formData.amount.trim()) {
            newErrors.amount = 'Amount is required';
        } else if (!/^\d+(\.\d{1,2})?$/.test(formData.amount)) {
            newErrors.amount = 'Enter a valid amount (e.g., 1000 or 1000.50)';
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
        if (validate()) {
            setIsSubmitting(true);

            // console.log('Form Submitted:', formData);
            setIsSuccess(true);


            setFormData({
                enquiry: "Pay Online",
                name: '',
                email: '',
                phone: '',
                amount: '',
                additionalInfo: ''
            });

            setErrors({}); // ✅ Reset validation errors

            setIsSubmitting(false);

        }
    };

    return (
        <div className={styles.wrapperContainer}>
            <div className={styles.formContainer}>
                <InternalPageHeading title="Pay Online" />

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
                    <form onSubmit={handleSubmit} className={styles.form} noValidate>
                        <section className={styles.section}>
                            <h2>Information</h2>
                            <div className={styles.formGroup}>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? styles.errorInput : ''}
                                        placeholder="e.g., Acme Corp"
                                        required
                                    />
                                    {errors.name && <p className={styles.error} role="alert">{errors.name}</p>}
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="e.g., johndoe@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? styles.errorInput : ''}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="e.g., 9876543210"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={errors.phone ? styles.errorInput : ''}
                                        required
                                    />
                                    {errors.phone && <p className={styles.error} role="alert">{errors.phone}</p>}
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="amount">Amount (INR)</label>
                                    <input
                                        id="amount"
                                        name="amount"
                                        type="number"
                                        step="10"
                                        min="0"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        placeholder="e.g., 1000"
                                        className={errors.amount ? styles.errorInput : ''}
                                        required
                                    />
                                    {errors.amount && <p className={styles.error} role="alert">{errors.amount}</p>}
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="additionalInfo">Tell us more about your requirements</label>
                                    <textarea
                                        id="additionalInfo"
                                        name="additionalInfo"
                                        value={formData.additionalInfo}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Tell us more about your requirements"
                                    />
                                </div>

                            </div>
                        </section>

                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
