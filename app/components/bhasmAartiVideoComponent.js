'use client'

import { useState } from 'react';
import styles from './aartiVideoComponent.module.css';

const v1 = "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/Ujjain.mp4";

export default function BhasmAartiBooking() {
   const today = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const [currentDate, setCurrentDate] = useState(today);
    const [selectedDate, setSelectedDate] = useState(null);
    const [flipDirection, setFlipDirection] = useState(null);
    const [isFlipped, setIsFlipped] = useState(false);

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Monday = 0, Sunday = 6
};

    const isPastMonth = (year, month) => {
        return year < today.getFullYear() || (year === today.getFullYear() && month < today.getMonth());
    };

    const handlePrevMonth = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        if (!isPastMonth(newDate.getFullYear(), newDate.getMonth())) {
            setFlipDirection('prev');
            setTimeout(() => {
                setCurrentDate(newDate);
                setFlipDirection(null);
            }, 300);
        }
    };

    const handleNextMonth = () => {
        setFlipDirection('next');
        setTimeout(() => {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
            setFlipDirection(null);
        }, 300);
    };

    const handleDateClick = (day) => {
        const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        if (clickedDate >= today) {
            setSelectedDate(clickedDate);
            setFormData(prev => ({
                ...prev,
                date: formatDateToIST(clickedDate)
            }));
            setIsFlipped(true);
        }
    };

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className={styles.empty}></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const isPast = date < today;
            const isSelected = selectedDate &&
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === month &&
                selectedDate.getFullYear() === year;

            days.push(
                <div
                    key={day}
                    className={`${styles.day} ${isPast ? styles.disabled : ''} ${isSelected ? styles.selected : ''}`}
                    onClick={() => !isPast && handleDateClick(day)}
                >
                    {day}
                </div>
            );
        }

        return days;
    };


    const [formData, setFormData] = useState({
        enquiry: "Bhasm Aarti Booking",
        name: '',
        email: '',
        phone: '',
        nationality: 'Indian',
        date: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const formatDateToIST = (dateObj) => {
    const istDate = new Date(dateObj.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const yyyy = istDate.getFullYear();
    const mm = String(istDate.getMonth() + 1).padStart(2, '0');
    const dd = String(istDate.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
};

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Enquiry confirmed for ${formData.name} on ${selectedDate.toDateString()}!`);
        console.log(formData)
        setIsFlipped(false);
        setFormData({ enquiry: "Bhasm Aarti Booking", name: '', email: '', phone: '', nationality: 'Indian', date: '' });
    };

    const handleBackToCalendar = () => {
        setIsFlipped(false);
    };

    return (
        <>
            {/* 🔊 Video Background */}
            <video
                loop
                autoPlay
                muted
                playsInline={true}
                preload="auto"
                controls={false}
                disablePictureInPicture
                className={styles.videoBackground}>
                <source src={v1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            {/* 🌟 Main Content */}
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1>Bhasm Aarti Enquiry</h1>
                    <p>
                        Experience the divine Bhasm Aarti at Mahakaleshwar Temple in Ujjain. This sacred ritual, performed with holy ash, is a unique spiritual event. Book online easily, with Indian nationals advised to reserve 30 days ahead and foreign nationals 90 days in advance.
                    </p>
                </header>

                <section className={styles.main}>
                    <div className={styles.details}>
                        <h2 className={styles.title}> Bhasm Aarti Details</h2>

                        <div className={styles.parkInfo}>
                            <p className={styles.description}>
                                Mahakaleshwar Temple, located in Ujjain, Madhya Pradesh, is one of the twelve Jyotirlingas in India. The Bhasm Aarti, a ritual involving the offering of ash to Lord Shiva, is a significant spiritual event attracting devotees worldwide.
                            </p>
                        </div>



                     

                        <div className={styles.leftContainer}>
                            <div className={styles.pricing}>
                                <h3>Prices:</h3>
                                <p>Just ₹250 for all the devotees.</p>
                            </div>


                            <div className={styles.pricing}>
                                <h3>Timings</h3>
                                <p>Entry Starts: 1:00 AM - 3:00 AM</p>
                                <p>Bhasm Aarti: 4:00 AM - 5:30 AM</p>
                            </div>


                        </div>
                        <div className={styles.pricing}>
                            <h3>Important Guidelines</h3>
                            <p>Carry a valid government-issued ID</p>
                            <p>Wear modest traditional attire</p>
                            <p>Arrive early for security and seating</p>
                             <p>Photography is not allowed inside the temple</p>
                        </div>
                    </div>

                    <div className={styles.calendarAndForm}>
                        <div className={`${styles.card} ${isFlipped ? styles.flip : ''}`}>
                            <div className={styles.calendar}>
                                <h2>Select Your Aarti Date</h2>
                                <div className={styles.monthNavigation}>
                                    <button onClick={handlePrevMonth} disabled={isPastMonth(currentDate.getFullYear(), currentDate.getMonth() - 1)}>{"<"}</button>
                                    <span>{`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</span>
                                    <button onClick={handleNextMonth}>{">"}</button>
                                </div>
                                <div className={`${styles.days} ${flipDirection ? styles[flipDirection] : ''}`}>
                                    <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
                                    {renderCalendar()}
                                </div>
                            </div>

                            <div className={styles.formContainer}>
                                <h2 className={styles.formTitle}>Book Your Aarti</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="nationality">Nationality</label>
                                        <select
                                            id="nationality"
                                            name="nationality"
                                            value={formData.nationality}
                                            onChange={handleInputChange}

                                        >
                                            <option className={styles.optionsColour} value="Indian">Indian</option>
                                            <option className={styles.optionsColour} value="Foreigner">Foreigner</option>
                                        </select>
                                    </div>
                                    <div className={styles.formGroup}>
                                       <label>Selected Date
                                        </label> 
                                        <input
                                            type="text"
                                            value={selectedDate ? selectedDate.toDateString() : ''}
                                            readOnly
                                        />
                                    </div>
                                    <div className={styles.buttonGroup}>
                                        <button type="button" onClick={handleBackToCalendar} className={styles.backButton}>Back to Calendar</button>
                                        <button type="submit" className={styles.submitButton}>Confirm Enquiry</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
