"use client";
import Image from "next/image";
import classes from "./Woman.module.css";
import Button from "@/components/UI/Button";
import SliderComponent from "@/components/UI/Slider";
import { useState, useEffect } from "react";

export default function Woman() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch images
  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/gallery/get-gallery/szlafroki-meskie`);
      if (!response.ok) {
        throw new Error("Wystąpił błąd podczas wczytywania galerii");
      }
      const data = await response.json();
      console.log(data);
      setImages(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Use useEffect to fetch images on mount
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.text__container}>
          <h3>Szlafroki męskie</h3>
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
            src={"/szlafrok-meski.jpg"}
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </div>
      <div className={classes.gallery__container}>
        {loading && <p>Ładowanie obrazów...</p>}
        {error && <p className={classes.error}>{error}</p>}
        {!loading && !error && images.length > 0 && (
          <SliderComponent images={images} />
        )}
        {!loading && !error && images.length === 0 && (
          <p>Brak obrazów do wyświetlenia.</p>
        )}
      </div>
    </>
  );
}
