"use client";
import Image from "next/image";
import classes from "./Service.module.css";
import { useState } from "react";
import Person from "./persons/Person";

export default function Service() {
  // Użycie stanów dla zarządzania widocznością sekcji
  const [isWomanBathrobe, setIsWomanBathrobe] = useState(false);
  const [isManBathrobe, setIsManBathrobe] = useState(false);
  const [isManPijamas, setIsManPijamas] = useState(false);
  const [isKids, setIsKids] = useState(false);
  const [isWomanPijamas, setIsWomanPijamas] = useState(false);
  const [isWomanNightgown, setIsWomanNightGown] = useState(false);

  function reset() {
    setIsWomanBathrobe(false);
    setIsWomanPijamas(false);
    setIsKids(false);
    setIsManBathrobe(false);
    setIsWomanNightGown(false);
    setIsManPijamas(false);

    // Przewinięcie do sekcji "Nasza oferta"
    const ofertaSection = document.getElementById("nasza-oferta");
    if (ofertaSection) {
      ofertaSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className={classes.wrapper} id="nasza-oferta">
      <div className={classes.service__container}>
        <h2 className={classes.service__container__header}>Nasza oferta</h2>

        {/* Sekcja wyboru oferty */}
        {!isWomanBathrobe &&
        !isManBathrobe &&
        !isKids &&
        !isWomanPijamas &&
        !isManPijamas &&
        !isWomanNightgown ? (
          <div className={classes.service__content__container}>
            {/* Szlafroki damskie */}
            <div className={classes.service__item__container}>
              <div
                className={classes.service__item__image__container}
                onClick={() => setIsWomanBathrobe(true)}
              >
                <Image
                  src="/szlafroki-damskie.jpg"
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

            {/* PIZAMY DAMSKIE */}
            <div className={classes.service__item__container}>
              <div
                className={classes.service__item__image__container}
                onClick={() => setIsWomanPijamas(true)}
              >
                <Image
                  src="/pizamy-damskie.jpg"
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
                  src="/koszule-nocne-damskie.jpg"
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

            {/* Szlafroki męskie */}
            <div className={classes.service__item__container}>
              <div
                onClick={() => setIsManBathrobe(true)}
                className={classes.service__item__image__container}
              >
                <Image
                  src="/szlafroki-meskie.jpg"
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
            {/* Piżamy meskie */}

            <div className={classes.service__item__container}>
              <div
                onClick={() => setIsManPijamas(true)}
                className={classes.service__item__image__container}
              >
                <Image
                  src="/pizamy-meskie.jpg"
                  alt="Piżamy męskie"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
              <div
                className={classes.button}
                onClick={() => setIsManPijamas(true)}
              >
                <h3>Piżamy Męskie</h3>
              </div>
            </div>

            {/* Szlafroki dziecięce */}
            <div className={classes.service__item__container}>
              <div
                className={classes.service__item__image__container}
                onClick={() => setIsKids(true)}
              >
                <Image
                  src="/dla-dzieci.jpg"
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
          </div>
        ) : (
          /* Sekcja po wybraniu opcji np. szlafroki damskie */
          <div className={classes.person__content__container}>
            {isWomanBathrobe && (
              <Person
                person="Szlafroki Damskie"
                which="szlafroki-damskie"
                text="Oto przykłady szlafroków damskich z naszej oferty. Oczywiście
                proponujemy również inne modele - od polarowych, z weluru (na guziki
                lub zamek), cienkich bawełnianych na lato - po kąpielowe frotte,
                thermofrotte i z tkaniny soft z kapturem lub bez."
                text2="Wszystkie w bogatej ofercie kolorystycznej."
                text3="Do każdego szlafroka można dobrać odpowiednią pidżamę oraz koszulę nocną!"
                reset={reset}
              />
            )}
            {isManBathrobe && (
              <Person
                person="Szlafroki męskie"
                which="szlafroki-meskie"
                text="Oto przykłady szlafroków męskich z naszej oferty. Oczywiście proponujemy również inne modele - od kąpielowych (100% bawełna), z weluru bawełnianego, satyny, tkaniny soft."
                text2="Wszystkie w bogatej ofercie kolorystycznej."
                text3="Specjalność sklepu - eleganckie bonżurki w kilku kolorach i wzorach."
                reset={reset}
              />
            )}
            {isManPijamas && (
              <Person
                person="Piżamy Męskie"
                which="pizamy-meskie"
                text="Oto przykłady piżam męskich z naszej oferty. Tradycyjne rozpinane na guziki (z bawełny lub satyny), wersja krótka lub długa - w rozmiarach do 5XL."
                text2="Wszystkie w bogatej ofercie kolorystycznej."
                text3="Do każdej piżamy można dobrać odpowiedni szlafrok!"
                reset={reset}
              />
            )}
            {isKids && (
              <Person
                person="Szlafroki i piżamy dziecięce"
                which="dla-dzieci"
                text="Oto przykłady szlafroków i piżam dziecięcych z naszej oferty. Od 8 lat do 164 cm wzrostu, w okresie bożonarodzeniowym zestawy piżam dla całej rodziny."
                text2="Wszystkie w bogatej ofercie kolorystycznej."
                text3="Dostępne zestawy dla całej rodziny!"
                reset={reset}
              />
            )}
            {isWomanPijamas && (
              <Person
                which="pizamy-damskie"
                person="Piżamy Damskie"
                text="Oto przykłady piżam damskich z naszej oferty. Z bawełny (rozpinane lub nie), wiskozy oraz w okresie jesienno-zimowym z thermofrotte. Rozmiary od S do 5XL."
                text2="Wszystkie w bogatej ofercie kolorystycznej."
                text3="Do każdej piżamy można dobrać odpowiedni szlafrok oraz koszulę nocną!"
                reset={reset}
              />
            )}
            {isWomanNightgown && (
              <Person
                which="koszule-nocne-damskie"
                person="Damskie Koszule Nocne"
                text="Oto przykłady damskich koszul nocnych z naszej oferty. Koszule nocne z długim lub krótkim rękawem z bawełny, wiskozy i tkaniny termosoft."
                text2="Wszystkie w bogatej ofercie kolorystycznej."
                text3="Do każdej koszuli nocnej można dobrać odpowiednią piżamę oraz szlafrok!"
                reset={reset}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
