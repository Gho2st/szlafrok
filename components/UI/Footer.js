import classes from "./Footer.module.css";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";

export default function Footer() {
  return (
    <footer>
      <div className={classes.footer__container}>
        <div className={classes.footer__info__container}>
          <div className={classes.footer__info__links}>
            <h3>Linki</h3>
            <ul>
              <li>Strona Główna</li>
              <li>O Firmie</li>
              <li>Oferta</li>
              <li>Prezenty</li>
              <li>Kontakt</li>
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
              <div className={classes.contact__info__item}>
                <MdOutlineEmail />
                <li>dominik.jojczyk@gmail.com</li>
              </div>
              <div className={classes.contact__info__item}>
                <IoLocationOutline />
                <li>Starowiślna 19, Kraków</li>
              </div>
              <div className={classes.contact__info__item}>
                <LuPhone />
                <li>+48 12 421 18 60</li>
              </div>
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
