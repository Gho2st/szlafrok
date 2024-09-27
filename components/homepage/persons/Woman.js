import Image from "next/image";
import classes from "./Woman.module.css";
import Button from "@/components/UI/Button";
import SliderComponent from "@/components/UI/Slider";

export default function Woman() {
  const images = [
    {
      src: "/baner.jpeg",
      alt: "Wnętrze Żłobka Wesołe Wygibasy na ulicy Ślicznej w Krakowie, placówka dla dzieci",
    },
    {
      src: "/baner.jpeg",
      alt: "Sala zabaw Żłobka Wesołe Wygibasy na Ślicznej w Krakowie",
    },
    {
      src: "/baner.jpeg",
      alt: "Nowoczesne wnętrze Żłobka na ulicy Ślicznej w Krakowie",
    },
    {
      src: "/baner.jpeg",
      alt: "Zielony plac zabaw Żłobka Wesołe Wygibasy w Krakowie na Ślicznej",
    },
  ];

  return (
    <>
      <div className={classes.container}>
        <div className={classes.text__container}>
          <h3>Szlafroki damskie</h3>
          <p>
            Oto przykłady szlafroków damskich z naszej oferty. Oczywiście
            proponujemy również inne modele- od polarowych, z weluru (na guziki
            lub zamek), cienkich bawełnianych na lato- po kąpielowe frotte,
            thermofrotte i z tkaniny soft z kapturem lub bez.
          </p>
          <p>Wszystkie w bogatej ofercie kolorystycznej.</p>
          <p>
            Do każdego szlafroka można dobrać odpowiednią pidżamę oraz koszulę
            nocną.!
          </p>
          <div className={classes.text__buttons__container}>
            <Button text="Kontakt" link="/" />
            <Button
              text="Galeria"
              link="/"
              background="#FFF0D1"
              color="black"
            />
          </div>
        </div>

        <div className={classes.image__container}>
          <Image
            src={"/baner.jpeg"}
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </div>
      <div className={classes.gallery__container}>
        <SliderComponent images={images} />
      </div>
    </>
  );
}
