"use client";
import classes from "./Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import Button from "../UI/Button";
import Link from "next/link";
import { useState } from "react";
import ButtonSubmit from "../UI/ButtonSubmit";

export default function Contact() {
  const [text, setText] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const [errorFields, setErrorFields] = useState([]);

  const sendMail = async (e) => {
    e.preventDefault();
    const fieldsToCheck = {
      fullName,
      email,
      phoneNumber,
      text,
    };
    const emptyFields = Object.entries(fieldsToCheck)
      .filter(([key, value]) => !value)
      .map(([key]) => key);
    setErrorFields(emptyFields);

    if (emptyFields.length > 0) {
      setFormError("Proszę uzupełnij wszystkie wymagane pola.");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          text,
          fullName,
          email,
          phoneNumber,
        }),
      });

      if (response.ok) {
        console.log("Form submitted succesfully");
        setFormSubmitted(true);
        setFormError(null);
        setEmail("");
        setFullName(fieldsToCheck.fullName);
        setText("");
        setPhoneNumber("");
        onFormSubmit();
      } else {
        const errorData = await response.json();
        setFormError(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setFormError("Unexpected error occurred.");
    }
  };

  return (
    <div className={classes.contact__container_wrapper} id="kontakt">
      <div className={classes.contact__container}>
        {!formSubmitted ? (
          <div className={classes.contact__form__container}>
            <h2>Skontaktuj się z nami</h2>
            <form onSubmit={sendMail}>
              <div>
                <label htmlFor="name">Imię i nazwisko:</label>
                <input
                  type="text"
                  id="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Twoje imię i nazwisko"
                  style={{
                    border: errorFields.includes("fullName")
                      ? "1px solid red"
                      : "0",
                  }}
                />
              </div>
              <div>
                <label htmlFor="email">Adres e-mail:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Twój adres e-mail"
                  style={{
                    border: errorFields.includes("email")
                      ? "1px solid red"
                      : "0",
                  }}
                />
              </div>
              <div>
                <label htmlFor="phone">Twój numer telefonu:</label>
                <input
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Twój numer telefonu"
                  style={{
                    border: errorFields.includes("phoneNumber")
                      ? "1px solid red"
                      : "0",
                  }}
                />
              </div>
              <div>
                <label htmlFor="message">Wiadomość:</label>
                <textarea
                  id="message"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Twoja wiadomość"
                  style={{
                    border: errorFields.includes("text")
                      ? "1px solid red"
                      : "0",
                  }}
                />
              </div>
              {formError && <p className={classes.errorMessage}>{formError}</p>}
              <div
                className={classes.contact__container__form__button__container}
              >
                <ButtonSubmit
                  text="Wyślij"
                  background="#664343"
                  color="white"
                />
              </div>
            </form>
          </div>
        ) : (
          <div className={classes.thanks__message__container}>
            <h4>Dziękujemy za wiadomość!</h4>
            <p>
              Cieszymy się, że się z nami skontaktowałeś. Nasz zespół już nad
              nią pracuje i odezwiemy się do Ciebie najszybciej, jak to możliwe.
              Zazwyczaj odpowiadamy w ciągu 24 godzin.
            </p>

            {/* <Image
              src={"/gifs/5.gif"}
              width={240}
              height={260}
              alt="animacja wysylania listu"
            /> */}
          </div>
        )}
        <div className={classes.contact__info__container}>
          <h3>Dane kontaktowe</h3>
          <ul>
            <li>
              <div className={classes.contact__info__item}>
                <MdOutlineEmail />
                <p>mbarciewicz@onet.eu</p>
              </div>
            </li>
            <li>
              <div className={classes.contact__info__item}>
                <IoLocationOutline />
                <p>Starowiślna 19, Kraków</p>
              </div>
            </li>
            <li>
              <div className={classes.contact__info__item}>
                <LuPhone />
                <Link href="tel:+48124211860">+48 12 421 18 60 </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
