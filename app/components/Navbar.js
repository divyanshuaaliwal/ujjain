// "use client"
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react";

import phnLogo from "../assets/phnLogo.png";
import lapLogo from "../assets/lapLogo.png";
import stamp from "../assets/stamp.png";

import styles from "./Navbar.module.css";
import { menuLinks, navMenu } from "../Data/navData";
import WhatsAppButton2 from "./WhatsAppButton2";

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeInnerDropdown, setActiveInnerDropdown] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [expandedItems, setExpandedItems] = useState({});
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1275px)");
        const handleResize = () => setIsMobile(mediaQuery.matches);
        handleResize();
        mediaQuery.addEventListener("change", handleResize);
        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    if (!hasMounted) {
        return <div style={{ height: "100px" }} />; // prevent layout shift
    }

    const handleMouseEnter = (title) => {
        setActiveDropdown(title);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
        setActiveInnerDropdown(null);
    };

    const handleInnerItemsMouseEnter = (title) => {
        setActiveInnerDropdown(title);
    };

    const handleInnerItemsMouseLeave = () => {
        setActiveInnerDropdown(null);
    };

    const toggleDropdown = (itemTitle) => {
        setExpandedItems((prev) => ({
            ...prev,
            [itemTitle]: !prev[itemTitle],
        }));
    };

    const closeMobileMenu = () => {
        setMenuOpen(false);
        setExpandedItems({});
    };

    return (
        <>
            <div className={styles.navbarContainer}>
                {/* Mobile hamburger icon */}
                {isMobile && (
                    <div className={styles.mobileMenuToggle}>
                        <div className={styles.mobileLogoContainer}>
                            <div className={styles.logoWrapper}>
                                <Image
                                    src={phnLogo}
                                    alt="Logo"
                                    width={150}
                                    height={30}
                                    style={{ marginLeft: "10px", objectFit: "contain" }}
                                    priority
                                />
                            </div>
                        </div>
                        <button
                            className={styles.hamburgerButton}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                        >
                            {!menuOpen && <Menu size={24} />}
                        </button>
                    </div>
                )}

                {/* Desktop Navigation */}
                {!isMobile && (
                    <div className={styles.navbars}>
                        <div className={styles.topNav}>
                            <ul className={styles.TopNavList}>
                                {menuLinks.map((item, index) => (
                                    <li
                                        key={index}
                                        className={styles.navItem}
                                        onMouseEnter={() => handleMouseEnter(item.title)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            href={item.path || "/"}
                                            className={styles.navTitle}
                                            onClick={(e) => !item.path && e.preventDefault()}
                                        >
                                            {item.title}
                                            {item.dropdown && (
                                                <svg
                                                    className={`${styles.dropdownIcon} ${
                                                        activeDropdown === item.title ? styles.rotate : ""
                                                    }`}
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M6 9L12 15L18 9"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            )}
                                        </Link>

                                        {/* Dropdown */}
                                        {item.dropdown &&
                                            activeDropdown === item.title &&
                                            item.dropdownItems?.length > 0 && (
                                                <ul className={styles.dropdown}>
                                                    {item.dropdownItems.map((subItem, subIndex) => (
                                                        <li
                                                            key={subIndex}
                                                            onMouseEnter={() =>
                                                                handleInnerItemsMouseEnter(subItem.innr)
                                                            }
                                                            onMouseLeave={handleInnerItemsMouseLeave}
                                                        >
                                                            <Link
                                                                href={subItem?.path || "/"}
                                                                className={styles.dropdownLink}
                                                                onClick={(e) => !subItem.path && e.preventDefault()}
                                                            >
                                                                {subItem.title}
                                                                {subItem.innerDropdown && (
                                                                    <svg
                                                                        className={`${styles.innerDropdownIcon} ${
                                                                            activeInnerDropdown === subItem.title
                                                                                ? styles.rotate
                                                                                : ""
                                                                        }`}
                                                                        width="12"
                                                                        height="12"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M9 6L15 12L9 18"
                                                                            stroke="currentColor"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                )}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Middle Section */}
                        <div className={styles.logoSection}>
                            <div className={styles.logoLeft}>
                                <Image src={lapLogo} height={60} alt="Logo" priority />
                                <div className={styles.stampSection}>
                                    <Image src={stamp} height={60} alt="Stamp" priority />
                                    <div className={styles.approved}>
                                        <div className={styles.approvedText}>Approved by</div>
                                        <div className={styles.approvedBy}>Madhya Pradesh Tourism</div>
                                    </div>
                                </div>
                            </div>

                         <div className={styles.middleAssets}>
    <Image src="/trishulGif.gif" alt="Trishul" width={70} height={70} loading="lazy" unoptimized />
    <Image src="/lordShiva.gif" alt="Shiva" width={70} height={70} loading="lazy" unoptimized />
    <Image src="/bellsGif.gif" alt="Bells" width={70} height={70} loading="lazy" unoptimized />
    <Image src="/shiv.gif" alt="Shiv" width={70} height={70} loading="lazy" unoptimized />
    <Image src="/omGif.gif" alt="Om" width={70} height={70} loading="lazy" unoptimized />
</div>


                            <div className={styles.contactRight}>
                                <div className={styles.contactItem}>
                                    <div className={styles.animatedBorderBox}>
                                        <span>Call Us:</span>
                                        <Phone size={16} />
                                        <a className={styles.number} href="tel:+919111452099">
                                            +91 9111452099
                                        </a>
                                    </div>
                                    <WhatsAppButton2 />
                                </div>

                                <div className={styles.contactItem2}>
                                    <span>Mail Us:</span>
                                    <Mail size={16} />
                                    <a className={styles.mail} href="mailto:info@ujjainmahakal.com">
                                        info@ujjainmahakal.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Navigation */}
                        <nav className={styles.bottomNav}>
                            <div className={styles.container2}>
                                <ul className={styles.navList}>
                                    {navMenu.map((item, index) => (
                                        <li
                                            key={index}
                                            className={styles.navItem}
                                            onMouseEnter={() => handleMouseEnter(item.title)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <Link
                                                href={item.path || "/"}
                                                className={styles.navTitle}
                                            >
                                                {item.title}
                                                {item.dropdown && (
                                                    <svg
                                                        className={`${styles.dropdownIcon} ${
                                                            activeDropdown === item.title ? styles.rotate : ""
                                                        }`}
                                                        width="14"
                                                        height="14"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M6 9L12 15L18 9"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                )}
                                            </Link>

                                            {item.dropdown &&
                                                activeDropdown === item.title &&
                                                item.dropdownItems?.length > 0 && (
                                                    <ul
                                                        className={`${styles.dropdownBottom} ${
                                                            item.dropdownItems.some((di) => di.innerDropdown)
                                                                ? ""
                                                                : styles.active
                                                        }`}
                                                    >
                                                        {item.dropdownItems.map((subItem, subIndex) => (
                                                            <li
                                                                key={subIndex}
                                                                onMouseEnter={() =>
                                                                    handleInnerItemsMouseEnter(subItem.title)
                                                                }
                                                                onMouseLeave={handleInnerItemsMouseLeave}
                                                            >
                                                                <Link
                                                                    href={subItem.path || "/"}
                                                                    className={styles.dropdownLink}
                                                                >
                                                                    {subItem.title}
                                                                    {subItem.innerDropdown && (
                                                                        <svg
                                                                            className={`${styles.innerDropdownIcon} ${
                                                                                activeInnerDropdown === subItem.title
                                                                                    ? styles.rotate
                                                                                    : ""
                                                                            }`}
                                                                            width="12"
                                                                            height="12"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M9 6L15 12L9 18"
                                                                                stroke="currentColor"
                                                                                strokeWidth="2"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    )}
                                                                </Link>

                                                              {subItem.innerDropdown &&
                                                                activeInnerDropdown === subItem.title &&
                                                                subItem.innerDropdownItems?.length > 0 && (
                                                                    <ul
                                                                        className={`${styles.innerDropdown} ${
                                                                            subItem.innerDropdownItems.some((di) => di.innerDropdown)
                                                                                ? ""
                                                                                : styles.active
                                                                        }`}
                                                                    >
                                                                        {subItem.innerDropdownItems.map((innerItem, innerIndex) => (
                                                                            <li key={innerIndex}>
                                                                                <Link
                                                                                    href={innerItem.path || "/"}
                                                                                    className={styles.innerDropdownLink}
                                                                                >
                                                                                    {innerItem.innerTitle}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}

                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                    </div>
                )}

                {/* Mobile Sidebar */}
                {isMobile && menuOpen && (
                    <div className={`${styles.mobileSidebar} ${menuOpen ? styles.open : ""}`}>
                        <div className={styles.mobileSidebarContent}>
                            <div className={styles.mobileMenuHeader}>
                                <h2>Main Menu</h2>
                                <button onClick={closeMobileMenu} className={styles.closeButton}>
                                    <X size={24} />
                                </button>
                            </div>

                            <div className={styles.mobileNav}>
                                {/* Section 1: Main Menu */}
                                <div className={styles.mobileSection}>
                                    {menuLinks.map((item, index) => (
                                        <div key={index} className={styles.mobileNavItem}>
                                            {item.dropdown ? (
                                                <>
                                                    <div className={styles.mobileNavTitle}>
                                                        <Link
                                                            href={item.path || "/"}
                                                            className={styles.linkTags}
                                                            onClick={closeMobileMenu}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                        <ChevronDown
                                                            onClick={() => toggleDropdown(item.title)}
                                                            size={18}
                                                            className={`${styles.mobileDropdownIcon} ${
                                                                expandedItems[item.title] ? styles.rotated : ""
                                                            }`}
                                                        />
                                                    </div>
                                                    {expandedItems[item.title] &&
                                                        item.dropdownItems?.length > 0 && (
                                                            <div className={styles.mobileDropdown}>
                                                                {item.dropdownItems.map((subItem, subIndex) => (
                                                                    <div key={subIndex}>
                                                                        <div className={styles.mobileDropdownLink}>
                                                                            <Link
                                                                                href={subItem.path || "/"}
                                                                                onClick={closeMobileMenu}
                                                                                className={styles.mobileDropdown2Link}
                                                                            >
                                                                                {subItem.title}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                </>
                                            ) : (
                                                <Link
                                                    href={item.path || "/"}
                                                    className={styles.mobileNavLink}
                                                    onClick={closeMobileMenu}
                                                >
                                                    {item.title}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Section 2: Explore */}
                                <div className={styles.mobileSection}>
                                    <h3>Explore</h3>
                                    {navMenu.map((item, index) => (
                                        <div key={index} className={styles.mobileNavItem}>
                                            {item.dropdown ? (
                                                <>
                                                    <div className={styles.mobileNavTitle}>
                                                        <Link
                                                            href={item.path || "/"}
                                                            onClick={closeMobileMenu}
                                                            className={styles.linkTags}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                        <ChevronDown
                                                            size={18}
                                                            className={`${styles.mobileDropdownIcon} ${
                                                                expandedItems[item.title] ? styles.rotated : ""
                                                            }`}
                                                            onClick={() => toggleDropdown(item.title)}
                                                        />
                                                    </div>
                                                    {expandedItems[item.title] &&
                                                        item.dropdownItems?.length > 0 && (
                                                            <div className={styles.mobileDropdown}>
                                                                {item.dropdownItems.map((subItem, subIndex) => (
                                                                    <div key={subIndex}>
                                                                        <div
                                                                            className={`${styles.mobileDropdownLink} ${styles.mobileDropdown2Link}`}
                                                                        >
                                                                            <Link
                                                                                href={subItem.path || "/"}
                                                                                className={styles.mobileDropdown2Link}
                                                                                onClick={closeMobileMenu}
                                                                            >
                                                                                {subItem.title}
                                                                            </Link>
                                                                            {subItem.innerDropdown && (
                                                                                <ChevronDown
                                                                                    size={16}
                                                                                    className={`${styles.mobileDropdownIcon} ${
                                                                                        expandedItems[subItem.title]
                                                                                            ? styles.rotated
                                                                                            : ""
                                                                                    }`}
                                                                                    onClick={() =>
                                                                                        subItem.innerDropdown
                                                                                            ? toggleDropdown(subItem.title)
                                                                                            : closeMobileMenu()
                                                                                    }
                                                                                />
                                                                            )}
                                                                        </div>

                                                                        {subItem.innerDropdown &&
                                                                            expandedItems[subItem.title] &&
                                                                            subItem.innerDropdownItems?.length > 0 && (
                                                                                <div className={styles.mobileInnerDropdown}>
                                                                                    {subItem.innerDropdownItems.map(
                                                                                        (innerItem, innerIndex) => (
                                                                                            <Link
                                                                                                key={innerIndex}
                                                                                                href={innerItem.path || "/"}
                                                                                                className={
                                                                                                    styles.mobileInnerDropdownLink2
                                                                                                }
                                                                                                onClick={closeMobileMenu}
                                                                                            >
                                                                                                {innerItem.innerTitle}
                                                                                            </Link>
                                                                                        )
                                                                                    )}
                                                                                </div>
                                                                            )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                </>
                                            ) : (
                                                <Link
                                                    href={item.path || "/"}
                                                    className={styles.mobileNavLink}
                                                    onClick={closeMobileMenu}
                                                >
                                                    {item.title}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.mobileFooter}>
                                <div className={styles.mobileContactItem}>
                                    <Phone size={10} />
                                    <a href="tel:+919111452099">+91 9111452099</a>
                                </div>
                                <div className={styles.mobileContactItem}>
                                    <Mail size={10} />
                                    <a href="mailto:info@ujjainmahakal.com">info@ujjainmahakal.com</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.mobileSidebarOverlay} onClick={closeMobileMenu}></div>
                    </div>
                )}
            </div>
        </>
    );
}
