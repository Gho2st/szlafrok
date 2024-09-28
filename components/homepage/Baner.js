import Image from "next/image";
import classes from "./Baner.module.css";
import Button from "../UI/Button";

export default function Baner() {
  return (
    <div className={classes.baner__container}>
      <div className={classes.baner__text__container}>
        <span>SzlafrO.K.</span>
        <h1>
          SzlafrO.K. - Szlafroki damskie, szlafroki męskie, szlafroki dziecięce,
          i nie tylko...
        </h1>
        <div className={classes.baner__buttons__container}>
          <Button text="Czytaj Więcej" link="#o-firmie" background="#664343" />
          <Button
            text="Oferta"
            link="#nasza-oferta"
            background="#FFF0D1"
            color="black"
          />
        </div>
      </div>
    </div>
  );
}
