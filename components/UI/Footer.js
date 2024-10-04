import classes from "./Footer.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { GrContact } from "react-icons/gr";

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className={classes.footer__container}>
        <div className={classes.footer__info__container}>
          <div className={classes.footer__info__links}>
            <h3>Linki</h3>
            <ul>
              <li>
                <Link href="/">Strona Główna</Link>
              </li>
              <li>
                <Link href="/#o-firmie">O Firmie</Link>
              </li>
              <li>
                <Link href="/#nasza-oferta">Nasza Oferta</Link>
              </li>
              <li>
                <Link href="/#prezenty">Prezenty</Link>
              </li>
              <li>
                <Link href="/#opinie">Opinie</Link>
              </li>
              <li>
                <Link href="/#dojazd">Dojazd</Link>
              </li>
              <li>
                <Link href="/#kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>
          <address>
            <div>
              <h3>Godziny otwarcia</h3>
              <ul>
                <li>poniedziałek - piatęk: 10-18</li>
                <li>soboty: 10-14</li>
              </ul>
            </div>
          </address>
          <div>
            <h3>Kontakt</h3>
            <ul>
              <li>
                <div className={classes.contact__info__item}>
                  <MdOutlineEmail />
                  <p> mbarciewicz@onet.eu</p>
                </div>
              </li>
              <li>
                <div className={classes.contact__info__item}>
                  <IoLocationOutline />
                  <p>Starowiślna 19, Kraków</p>
                </div>
              </li>
              <li>
                <div
                  className={`${classes.contact__info__item} ${classes.contact__form__link}`}
                >
                  <LuPhone />
                  <Link href="tel:+48124211860">+48 12 421 18 60 </Link>
                </div>
              </li>
              <li>
                <div
                  className={`${classes.contact__info__item} ${classes.contact__form__link}`}
                >
                  <GrContact />
                  <Link href="/#kontakt">Formularz Kontaktowy</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.foot}>
          <p>
            @ 2024 SzlafrO.K. Projekt i realizacja{" "}
            <Link href="https://dominikjojczyk.pl/">Dominik</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
