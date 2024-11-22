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
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
            {rounded === 0 ? 67 : rounded}
          </motion.div>{" "}
          zadowolonych klientów! Ocena <span>4.9/5</span>!
        </h2>
        <p className={classes.description}>
          Krakowianie cenią sobie nasz sklep z szlafrokami za zaangażowanie i
          troskę, jaką okazujemy klientom. Otrzymaliśmy wiele pozytywnych
          opinii, które są dla nas najlepszą rekomendacją.
        </p>
        <div className={classes.buttonContainer}>
          <Button
            link="https://g.page/r/CcPF4QJuJH_3EBM/review"
            text="Zostaw Opinię"
          />
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
            <div className={classes.reviewItem}>
              <div className={classes.review}>
                <div>
                  <Stars />
                </div>
                <p>
                  W sklepie jest bardzo duży wybór szlafroków. Obsługa jest
                  bardzo miła i widać, że doskonale znają swój asortyment. Już
                  dwa razy kupiłam idealnie trafiony prezent - idealne
                  dopasowanie rozmiarów i kolorów. Z czystym sumieniem mogę
                  polecić ten sklep każdemu kto szuka dobrej jakości produktów.
                  Sama na pewno będę do nich wracać.
                </p>
                <div className={classes.line}></div>
                <p className={classes.name}>Karolina Główka</p>
              </div>
            </div>
            <div className={classes.reviewItem}>
              <div className={classes.review}>
                <div>
                  <Stars />
                </div>
                <p>
                  Świetna lokalizacja sklepu! Bardzo duży wybór szlafroków i
                  bielizny nocnej. Świetna jakość produktów. Miła, profesjonalna
                  obsługa. Chętnie wracam do tego sklepu.
                </p>
                <div className={classes.line}></div>
                <p className={classes.name}>Monika</p>
              </div>
            </div>
            <div className={classes.reviewItem}>
              <div className={classes.review}>
                <div>
                  <Stars />
                </div>
                <p>
                  Z całego serca polecam sklep. Przemiła Pani która doradzi w
                  wyborze. Jakość wysoka, piękne wzory. To już kolejne zakupy na
                  przestrzeni wielu lat.
                </p>
                <div className={classes.line}></div>
                <p className={classes.name}>Katarzyna Mączka</p>
              </div>
            </div>
            <div className={classes.reviewItem}>
              <div className={classes.review}>
                <div>
                  <Stars />
                </div>
                <p>
                  Jestem przemile zaskoczona – fantastyczna jakość, chyba
                  najlepsza obsługa jakiej doświadczyłam, naprawdę atrakcyjne
                  ceny. Kupiłam tu dokładnie taki szlafrok, o jakim marzyłam. Od
                  teraz to moje ulubione miejsce z pomysłami na prezent.
                </p>
                <div className={classes.line}></div>
                <p className={classes.name}>Gabriela Mazurkiewicz</p>
              </div>
            </div>
            <div className={classes.reviewItem}>
              <div className={classes.review}>
                <div>
                  <Stars />
                </div>
                <p>
                  Kupiłem szlafrok na prezent urodzinowy. Bardzo miła i
                  profesjonalna obsługa. Można zobaczyć różne szlafroki,
                  sprawdzić materiał w dotyku (co nie jest możliwe przez
                  internet). Bardzo polecam.
                </p>
                <div className={classes.line}></div>
                <p className={classes.name}>Jakub</p>
              </div>
            </div>
            <div className={classes.reviewItem}>
              <div className={classes.review}>
                <div>
                  <Stars />
                </div>
                <p>
                  Rewelacja w kazdym detalu. Potrzebowałam dużego rozmiaru
                  piżam, z czym byl w całym Krakowie kłopot, i tylko tam byly.
                  Co wiecej, najpierw kupilam 1 piżamę, a potem właściciel
                  rozmawiał z hurtownia i zamówił specjalnie kolejne 2, a kiedy
                  byly juz w sklepie zadzwonił do domu z informacja, ze juz sa
                  do odebrania. Piżamy sa swietne gatunkowo, i bardzo ładne.
                  Obsługa przemiła, nastawiona na klienta, z przyjemnością tam
                  zrobilam zakupy. Gorąco polecam.
                </p>
                <div className={classes.line}></div>
                <p className={classes.name}>Hart Dental</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
