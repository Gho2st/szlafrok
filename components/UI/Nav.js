"use client";

import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion"; // Import Framer Motion
import classes from "./Nav.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={classes.nav__wrapper}>
      <div className={classes.nav__container}>
        <div className={classes.logo__container}>
          <Link href="/">
            <Image src="/logo.jpeg" width={160} height={50} />
          </Link>
        </div>

        <div className={classes.menu__list__container}>
          <ul>
            <li>Strona Główna</li>
            <li>Kontakt</li>
            <li>Prezenty</li>
            <li>Dojazd</li>
            <li>o Firmie</li>
          </ul>
        </div>

        <div className={classes.navigation__button} onClick={toggleMenu}>
          {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </div>
      </div>

      {/* Framer Motion for animated menu */}
      <motion.div
        initial={{ y: -100, opacity: 0 }} // Starting from outside the screen
        animate={menuOpen ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }} // Animate in or out
        transition={{ duration: 0.5 }} // Control speed of animation
        className={`${classes.open__menu__container} ${
          menuOpen ? classes.active : ""
        }`}
      >
        <ul>
          <li>Strona Główna</li>
          <li>Kontakt</li>
          <li>Prezenty</li>
          <li>Dojazd</li>
          <li>o Firmie</li>
        </ul>
      </motion.div>
    </div>
  );
}
