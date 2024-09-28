import classes from "./About.module.css";
import Image from "next/image";
import Header from "../UI/Header";
import Button from "../UI/Button";

export default function About() {
  return (
    <section className={classes.wrapper} id='o-firmie'>
      <div className={classes.about__container}>
        <div className={classes.about__content__container}>
          <div className={classes.about__container__text}>
            <Header text="O Firmie" />
            <p className={classes.firstp}>
              Szlafroki damskie, szlafroki męskie, szlafroki dziecięce, i nie
              tylko... <br></br> <span>Od 1990r. </span> zapraszamy do naszego
              specjalistycznego sklepu ze szlafrokami w Krakowie przy ulicy
              Starowiślnej 19. Oprócz szlafroków w swojej ofercie posiadamy
              również duży wybór pidżam, koszuli nocnych, ręczników i pościeli.
            </p>
            <p>
              Jeżeli szukasz szlafroka w dobrej cenie i dużym wyborze, to
              zapraszamy do nas!
            </p>
            <p>
              Pamiętaj! Kraków - <span> ul. Starowiślna 19.</span>
            </p>
            <div className={classes.buttons__container}>
              <Button text="Dojazd" link="#dojazd" background="#664343" />
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
              src="/sklep.jpg"
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
