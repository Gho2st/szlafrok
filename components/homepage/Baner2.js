import Image from "next/image";
import classes from "./Baner2.module.css";
import Button from "../UI/Button";

export default function Baner2() {
  return (
    <div className={classes.baner__container}>
      <div className={classes.baner__text__container}>
        <Image src="/logo2.png" width={100} height={100} layout="responsive" />
        <h1>
          SzlafrO.K. - Szlafroki damskie, szlafroki męskie, szlafroki dziecięce,
          i nie tylko... Kontakt
        </h1>
      </div>
    </div>
  );
}
