import Link from 'next/link'
import React from 'react'
import styles from "./WhatsAppButton2.module.css";

const WhatsAppButton2 = ({style}) => {
    return (
        <Link
            href="https://wa.me/911234567890"
            className={styles.whatsAppButton}
            target="_blank"
            rel="noopener noreferrer"
            style={style}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 32 32"
                fill="white"
            >
                <path d="M16 .4C7.3.4.4 7.3.4 16c0 2.8.7 5.4 2.1 7.7L0 32l8.5-2.2c2.2 1.2 4.8 1.8 7.5 1.8 8.7 0 15.6-6.9 15.6-15.6S24.7.4 16 .4zm0 28.6c-2.3 0-4.5-.6-6.5-1.8l-.5-.3-5 1.3 1.3-4.8-.3-.5c-1.3-2-2-4.3-2-6.7 0-7.1 5.8-13 13-13 7.1 0 13 5.8 13 13 0 7.2-5.9 13-13 13zm7.4-9.9c-.4-.2-2.5-1.2-2.9-1.3-.4-.2-.8-.2-1.1.2-.3.4-1.3 1.3-1.6 1.5-.3.2-.6.3-1 .1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.9-1.8-2.2-.2-.4 0-.6.1-.8.2-.2.4-.5.6-.7.2-.2.3-.3.4-.6.2-.3.1-.5 0-.7-.2-.2-1.1-2.6-1.5-3.5-.4-.9-.7-.7-1-.7H9.5c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.2 0 1.9 1.4 3.8 1.6 4.1.2.3 2.7 4.1 6.6 5.7.9.4 1.7.6 2.3.7.9.1 1.7.1 2.3.1.7 0 2.5-.8 2.9-1.9.3-1.2.3-2.2.2-2.4-.1-.2-.3-.3-.6-.4z" />
            </svg>
        </Link>
    )
}

export default WhatsAppButton2;