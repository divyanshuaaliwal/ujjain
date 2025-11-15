'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.errorCode}>404</h1>
            <p className={styles.title}>Oops! Page not found</p>
            <p className={styles.description}>
                The page you are looking for doesn’t exist or has been moved.
            </p>

            <Link href="/" className={styles.backButton}>
                <ArrowLeft size={18} />
                Go Back to Home
            </Link>
        </div>
    );
}
