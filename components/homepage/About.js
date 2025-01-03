import classes from "./About.module.css";
import Image from "next/image";
import Header from "../UI/Header";
import Button from "../UI/Button";

export default function About() {
  return (
    <section className={classes.wrapper} id="o-firmie">
      <div className={classes.about__container}>
        <div className={classes.about__content__container}>
          <div className={classes.about__container__text}>
            {/* <Header text="O Firmie" /> */}
            <div className={classes.header__container}>
              <h1>
                Szlafroki damskie, szlafroki męskie, szlafroki dziecięce i nie
                tylko...
              </h1>
            </div>
            <p className={classes.firstp}>
              <span>Od 1990r. </span> zapraszamy do naszego specjalistycznego
              sklepu ze szlafrokami w Krakowie przy ulicy Starowiślnej 19.
              Oprócz szlafroków w swojej ofercie posiadamy również duży wybór
              piżam, koszul nocnych, piżam i szlafroków dla dzieci.
            </p>
            <p>
              Jeżeli szukasz tych artykułów w dobrej cenie i dużym wyborze, to
              zapraszamy do nas!
            </p>
            <p>
              Pamiętaj! Kraków - <span> ul. Starowiślna 19.</span>
            </p>
            <div className={classes.buttons__container}>
              <Button text="Opinie" link="#opinie" background="#664343" />
              <Button
                text="Kontakt"
                link="#kontakt"
                background="#FFF0D1"
                color="black"
              />
            </div>
          </div>

          <div className={classes.about__image__container}>
            <Image
              src="/sklep2.jpeg"
              alt="Sklep obrazek"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
