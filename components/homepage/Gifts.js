import classes from "./Gifts.module.css";
import Image from "next/image";
import Header from "../UI/Header";
import Button from "../UI/Button";

export default function Gifts() {
  return (
    <section className={classes.wrapper} id="prezenty">
      <div className={classes.gift__container}>
        <div className={classes.gift__content__container}>
          <div className={classes.gift__container__text}>
            <Header text="Prezenty" />
            <p className={classes.firstp}>
              Jeżeli nie macie Państwo pomysłu na oryginalny i praktyczny
              prezent- oto komplet szlafroków z ręcznikami lub bez. Zestaw
              dobieramy w zależności od preferencji przyszłych użytkowników (np.
              koloru łazienki).
            </p>
            <p>
              Na życzenie istnieje możliwość wyhaftowania monogramu na
              szlafrokach. <br></br> Komplety pakujemy w specjalnie przygotowane
              kosze lub pudełka.
            </p>
            <p>Idealny prezent ślubny dla młodej pary!</p>
            <div className={classes.buttons__container}>
              <Button
                text="Kontakt"
                link="#kontakt"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
