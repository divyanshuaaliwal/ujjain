'use client';

import { SectionHeader } from '../MainLayouts';
import styles from './simahstra2028News.module.css';
import {newsData} from "../Data/newsData.js";



export default function Simahasta2028News() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <SectionHeader title="Simahasta 2028 News" />
                    <p>Your source for updates on Simahasta 2028</p>
                </header>
                <main className={styles.main}>
                    <section className={styles.newsSection}>
                        {newsData.map((news, index) => (
                            <article key={index} className={styles.newsCard}>
                                <h2 className={styles.newsTitle}>{news.title}</h2>
                                <p className={styles.date}>{news.date}</p>
                                <p className={styles.desc}>{news.description}</p>
                                <a href={news.link} className={styles.readMore}>Read More</a>
                            </article>
                        ))}
                    </section>
                </main>
            </div>
        </div>
    );
}
