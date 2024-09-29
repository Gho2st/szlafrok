"use client";
import classes from "./Reviews.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stars from "../UI/Stars";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "../UI/Button";

export default function Reviews() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  // ref for the counter div
  const counterRef = useRef(null);

  // detect when the counter comes into view
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, 66, {
        duration: 4,
      });
    }
  }, [isInView]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={classes.wrapper} id="opinie">
      <div className={classes.container}>
        <h2>
          Ponad{" "}
          <motion.div
            ref={counterRef}
            className={classes.counter}
            style={{ display: "inline-block" }}
          >
            {rounded === 0 ? 66 : rounded}
          </motion.div>{" "}
          zadowolonych klientów! Ocena <span>4.9/5</span>!
        </h2>
        <p className={classes.description}>
          Krakowianie cenią sobie nasz sklep z szlafrokami za zaangażowanie i
          troskę, jaką okazujemy klientom. Otrzymaliśmy wiele pozytywnych
          opinii, które są dla nas najlepszą rekomendacją.
        </p>
        <div className={classes.buttonContainer}>
          <Button link="https://g.co/kgs/YMQjzxs" text="Zostaw Opinię" />
        </div>
        <div className={classes.reviewContainer}>
          <Slider {...settings} className={classes.slider}>
            <div className={classes.reviewItem}>
              <div className={classes.review}>
                <div className={classes.stars}>
                  <Stars />
                </div>
                <p>
                  W końcu znalazłam piękny, puchaty szlafrok warty swojej ceny.
                  Piżamy porządne, w pięknych wzorach, nie to co w sieciówkach.
                  Bardzo miła Pani obsługująca sklep. Na pewno wrócę :)
                </p>
                <div className={classes.line}></div>
                <p className={classes.name}>Małgorzata</p>
              </div>
            </div>
            <div className={classes.reviewItem}>
              <div className={classes.review}>
                <div>
                  <Stars />
                </div>
                <p>
                  Z całego serca i pełną odpowiedzialnością polecam to miejsce
                  jeśli chcecie kupić szlafrok, piżamkę czy koszulkę nocną.
                  Produkty te są bardzo dobrej jakości, szlafroki służą latami a
                  piżamki i koszulki mogą być różnorodne w zależności od potrzeb
                  i wieku.
                </p>
                <div className={classes.line}></div>
                <p className={classes.name}>Ania C</p>
              </div>
            </div>
            <div className={classes.reviewItem}>
              <div className={classes.review}>
                <div>
                  <Stars />
                </div>
                <p>
                  Niezbyt często kupujemy szlafrok czy piżamę, ale jak pojawia
                  się taka potrzeba, to nasza myśl kieruje się automatycznie do
                  Państwa sklepu. Taka obsługa klienta i po prostu miłe
                  spotkanie to dzisiaj rzadkość. A zatem, do miłego zobaczenia
                  😎
                </p>
                <div className={classes.line}></div>
                <p className={classes.name}>Maciej B</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
