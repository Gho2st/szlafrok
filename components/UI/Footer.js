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
              <li>
                <a href="/polityka_prywatnosci_szlafrok.pdf" target="_blank">
                  Polityka Prywatności
                </a>
              </li>
            </ul>
          </div>
          <address>
            <div>
              <h3>Godziny otwarcia</h3>
              <ul>
                <li>poniedziałek - piatęk: 10-18</li>
                <li>*od 24.02 do 28.02: 11-17</li>
                <li>soboty: 10-14</li>
                <li>*sobota 22.02 nieczynne</li>
              </ul>
            </div>
          </address>
          <div>
            <h3>Kontakt</h3>
            <ul>
              <li>
                <div className={classes.contact__info__item}>
                  <div className={classes.contact__info__item__svg}>
                    <MdOutlineEmail />
                  </div>
                  <p> mbarciewicz@onet.eu</p>
                </div>
              </li>
              <li>
                <div className={classes.contact__info__item}>
                  <div className={classes.contact__info__item__svg}>
                    <IoLocationOutline />
                  </div>
                  <p>Starowiślna 19, Kraków</p>
                </div>
              </li>
              <li>
                <div
                  className={`${classes.contact__info__item} ${classes.contact__form__link}`}
                >
                  <div className={classes.contact__info__item__svg}>
                    <LuPhone />
                  </div>
                  <Link href="tel:+48124211860">+48 12 421 18 60 </Link>
                </div>
              </li>
              <li>
                <div
                  className={`${classes.contact__info__item} ${classes.contact__form__link}`}
                >
                  <div className={classes.contact__info__item__svg}>
                    <GrContact />
                  </div>
                  <Link href="/#kontakt">Formularz Kontaktowy</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.foot}>
          <p>
            @ 2024 SzlafrO.K. Projekt i realizacja{" "}
            <Link href="https://domiweb.pl/">Domiweb</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
