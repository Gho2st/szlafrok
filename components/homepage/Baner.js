import Image from "next/image";
import classes from "./Baner.module.css";
import Button from "../UI/Button";

export default function Baner2() {
  return (
    <div className={classes.baner__container}>
      <div className={classes.baner__text__container}>
        <Image
          src="/logo2.png"
          width={100}
          height={100}
          layout="responsive"
          alt="Charakterystyczne logo salonu ze szlafrokami w Krakowie - SzlafrO.K."
        />
        {/* <h1>
          Szlafroki damskie, szlafroki męskie, szlafroki dziecięce,
          i nie tylko...
        </h1> */}
      </div>
    </div>
  );
}
