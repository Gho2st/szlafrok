import classes from "./Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import Button from "../UI/Button";
import ButtonSubmit from "../UI/ButtonSubmit";

export default function Contact() {
  return (
    <div className={classes.contact__container_wrapper}>
      <div className={classes.contact__container}>
        <div className={classes.contact__form__container}>
          <h2>Skontaktuj się z nami</h2>
          <form>
            <div>
              <label for="name">Imie i nazwisko:</label>
              <input
                type="text"
                id="name"
                placeholder="Twoje imię i nazwisko"
              ></input>
            </div>
            <div>
              <label for="email">Adres e-mail:</label>
              <input
                type="email"
                id="email"
                placeholder="Twój adres e-mail"
              ></input>
            </div>
            <div>
              <label for="message">Wiadomość:</label>
              <input
                type="textarea"
                id="message"
                placeholder="Twoja wiadomość"
              ></input>
            </div>
            <div className={classes.contact__container__form__button__container}>
              <ButtonSubmit text="Wyślij" background="#664343" color="white" />
            </div>
          </form>
        </div>
        <div className={classes.contact__info__container}>
          <h3>Dane kontaktowe</h3>
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
    </div>
  );
}
