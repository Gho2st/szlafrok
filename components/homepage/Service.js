"use client"; // na samym początku pliku

import "slick-carousel/slick/slick.css"; // Import Slick styles
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme styles
import Image from "next/image";
import classes from "./Service.module.css";
import { useState } from "react";
import Woman from "./persons/Woman";
import Men from "./persons/Men";
import Kid from "./persons/Kid";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import WomanPijamas from "./persons/WomanPijamas";
import WomanNightGown from "./persons/WomanNightGown";

export default function Service() {
  // Użycie stanów dla zarządzania widocznością sekcji
  const [isWomanBathrobe, setIsWomanBathrobe] = useState(false);
  const [isManBathrobe, setIsManBathrobe] = useState(false);
  const [isKids, setIsKids] = useState(false);
  const [isWomanPijamas, setIsWomanPijamas] = useState(false);
  const [isWomanNightgown, setIsWomanNightGown] = useState(false);

  function reset() {
    setIsWomanBathrobe(false);
    setIsWomanPijamas(false);
    setIsKids(false);
    setIsManBathrobe(false);
    setIsWomanNightGown(false);
  }

  // Konfiguracja ustawień slidera
  const carouselSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={classes.wrapper} id="nasza-oferta">
      <div className={classes.service__container}>
        <h2 className={classes.service__container__header}>Nasza oferta</h2>

        {/* Sekcja wyboru oferty */}
        {!isWomanBathrobe &&
        !isManBathrobe &&
        !isKids &&
        !isWomanPijamas &&
        !isWomanNightgown ? (
          <div className={classes.service__content__container}>
            <Slider {...carouselSettings} className={classes.slider}>
              {/* Szlafroki damskie */}
              <div className={classes.service__item__container}>
                <div
                  className={classes.service__item__image__container}
                  onClick={() => setIsWomanBathrobe(true)}
                >
                  <Image
                    src="/baner.jpeg"
                    alt="Szlafroki damskie"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </div>
                <div
                  className={classes.button}
                  onClick={() => setIsWomanBathrobe(true)}
                >
                  <h3>Szlafroki Damskie</h3>
                </div>
              </div>

              {/* Szlafroki dziecięce */}
              <div className={classes.service__item__container}>
                <div
                  className={classes.service__item__image__container}
                  onClick={() => setIsKids(true)}
                >
                  <Image
                    src="/szlafroki-i-pizamy-dla-dzieci.jpg"
                    alt="Szlafroki i pizamy dziecięce"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </div>
                <div className={classes.button} onClick={() => setIsKids(true)}>
                  <h3>Dla Dzieci</h3>
                </div>
              </div>

              {/* Szlafroki męskie */}
              <div className={classes.service__item__container}>
                <div
                  onClick={() => setIsManBathrobe(true)}
                  className={classes.service__item__image__container}
                >
                  <Image
                    src="/szlafrok-meski.jpg"
                    alt="Szlafroki męskie"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </div>
                <div
                  className={classes.button}
                  onClick={() => setIsManBathrobe(true)}
                >
                  <h3>Szlafroki Męskie</h3>
                </div>
              </div>

              {/* Piżamy damskie */}
              <div className={classes.service__item__container}>
                <div
                  className={classes.service__item__image__container}
                  onClick={() => setIsWomanPijamas(true)}
                >
                  <Image
                    src="/pizama-damska.jpg"
                    alt="Piżamy damskie"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </div>
                <div
                  className={classes.button}
                  onClick={() => setIsWomanPijamas(true)}
                >
                  <h3>Piżamy Damskie</h3>
                </div>
              </div>
              {/* Koszule Nocne */}
              <div className={classes.service__item__container}>
                <div
                  className={classes.service__item__image__container}
                  onClick={() => setIsWomanNightGown(true)}
                >
                  <Image
                    src="/koszula-nocna.jpg"
                    alt="Szlafroki damskie"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </div>
                <div
                  className={classes.button}
                  onClick={() => setIsWomanNightGown(true)}
                >
                  <h3>Koszule Nocne</h3>
                </div>
              </div>
            </Slider>
          </div>
        ) : (
          /* Sekcja po wybraniu opcji np. szlafroki damskie */
          <div className={classes.person__content__container}>
            {/* Logika wyświetlania wybranego komponentu */}
            {isWomanBathrobe && <Woman reset={reset} />}
            {isManBathrobe && <Men reset={reset} />}
            {isKids && <Kid reset={reset} />}
            {isWomanPijamas && <WomanPijamas reset={reset} />}
            {isWomanNightgown && <WomanNightGown reset={reset} />}
            {/* Można tutaj dodać więcej sekcji dla mężczyzn i dzieci */}
          </div>
        )}
      </div>
    </section>
  );
}
