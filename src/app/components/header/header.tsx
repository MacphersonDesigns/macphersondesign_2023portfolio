"use client";
import Image from "next/image";
import styles from "./header.module.scss";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isOpen = menuOpen
    ? `${styles.menuToggle} ${styles["is-active"]}`
    : styles.menuToggle;

  const showMobileMenu = menuOpen ? styles["mobile-nav"] : "";
  return (
    <header>
      <div className={styles.pageWrapper}>
        <div className={styles.navWrapper}>
          <div className={styles.pre}>
            <div className={`${styles.container} ${styles.end}`}>
              <ul>
                <li>Get a free Quote</li>
                <li>Call Us Today - 904.658.1032</li>
                <li>My Account</li>
              </ul>
            </div>
          </div>
          <div className={styles.container}>
            <nav className={styles.navbar}>
              <div className={styles.mainLogo}>
                <div className={styles.logoBackground}>
                  <Image
                    src="images/SHJLogo.svg"
                    className={styles.mainLogo}
                    alt="SHJ Gas & Fire Feature Logo"
                    width={158}
                    height={124}
                  />
                </div>
                <div className={styles.wordmark}>
                  <Image
                    src="images/SHJ_Wordmark.svg"
                    alt="SHJ Gas & Fire Feature"
                    width={238}
                    height={41}
                  />
                </div>
              </div>
              <div className={isOpen} id="mobile-menu" onClick={toggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
              </div>
              <ul className={showMobileMenu}>
                <li className={styles.navItem}>
                  <a href="#">Home</a>
                </li>
                <li className={styles.navItem}>
                  <a href="#">About</a>
                </li>
                <li className={styles.navItem}>
                  <a href="#">Services</a>
                </li>
                <li className={styles.navItem}>
                  <a href="#">Gallery</a>
                </li>
                <li className={styles.navItem}>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
