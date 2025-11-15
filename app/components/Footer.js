// components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import {
    Facebook,
    Twitter,
    Instagram,
    Mail,
    Phone,
    MapPin,
    Video,
    Star,
    Award,
    Home,
    User,
    CalendarCheck,
    Map,
    Images,
    ThumbsUp
} from 'lucide-react';

import styles from './Footer.module.css';

import { footerData } from '../Data/footerData';

const iconMap = {
    "Home": <Home size={16} className={styles.iconInline} />,
    "About Us": <User size={16} className={styles.iconInline} />,
    "Darshan Booking": <CalendarCheck size={16} className={styles.iconInline} />,
    "Tour Packages": <Map size={16} className={styles.iconInline} />,
    "Contact": <Phone size={16} className={styles.iconInline} />,
    "Gallery": <Images size={16} className={styles.iconInline} />
};

const iconMapCustomerCenter = {
    "Customer Video": <Video size={16} className={styles.iconInline} />,
    "Customer Photos": <Star size={16} className={styles.iconInline} />,
    "Reviews": <ThumbsUp size={16} className={styles.iconInline} />,
    "Awards & Certifications": <Award size={16} className={styles.iconInline} />
};

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* About */}
                    <div className={styles.section}>
                        <h4 className={styles.title}>Mahakaleshwar Guide</h4>
                        <p className={styles.text}>
                            Your comprehensive guide to exploring and experiencing the divine Mahakaleshwar Temple in Ujjain.
                        </p>
                        <div className={styles.socialIcons}>
                            <a href="#" aria-label="Facebook" className={styles.icon}><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter" className={styles.icon}><Twitter size={20} /></a>
                            <a href="#" aria-label="Instagram" className={styles.icon}><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.section}>
                        <h4 className={styles.title}>Quick Links</h4>
                        <ul className={styles.linkList}>
                            {footerData.quickLinks.map(link => (
                                <li key={link.id}>
                                    <Link href={link.url} className={styles.link}>
                                        {iconMap[link.title]} {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* Customer Center */}
                    <div className={styles.section}>
                        <h4 className={styles.title}>Customer Center</h4>
                        <ul className={styles.linkList}>
                            {footerData.customerCenter.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.url} className={styles.link}>
                                        {iconMapCustomerCenter[item.text] || <Star size={16} className={styles.iconInline} />} {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* Contact */}
                    <div className={styles.section}>
                        <h4 className={styles.title}>Contact</h4>
                        <ul className={styles.infoList}>
                            <li><MapPin size={18} className={styles.iconInline} /> Skye Earth Corporate Park, 1206 E, opp. Shalimar Township, Indore, Madhya Pradesh 452010</li>
                            <li><Phone size={18} className={styles.iconInline} /> +91 9111452099</li>
                            <li><Mail size={18} className={styles.iconInline} />info@ujjainmahakal.com</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} Mahakaleshwar Guide. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
