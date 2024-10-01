"use client";
import Image from "next/image";
import classes from "./WomanNightGown.module.css";
import Button from "@/components/UI/Button";
import SliderComponent from "@/components/UI/Slider";
import { useState, useEffect } from "react";
import { BsArrowLeftSquare } from "react-icons/bs";

export default function WomanNightGown(props) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch images
  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/gallery/get-gallery/koszule-nocne-damskie`
      );
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
          <div className={classes.exit__container}>
            <button onClick={props.reset}>
              <BsArrowLeftSquare />
            </button>
            <h3>Damskie Koszule Nocne</h3>
          </div>
          <p>
            Oto przykłady damskich koszul nocnych z naszej oferty. Koszule nocne
            z długim lub krótkim rękawem z bawełny, wiskozy i tkaniny termosoft.
          </p>
          <p>Wszystkie w bogatej ofercie kolorystycznej.</p>
          <p>
            Do każdej koszuli nocncej można dobrać odpowiednią pidżamę oraz szlafrok!
          </p>
          <div className={classes.text__buttons__container}>
            <Button text="Kontakt" link="/" />
            <Button
              text="Galeria"
              link="/#galeria-koszule-nocne"
              background="#FFF0D1"
              color="black"
            />
          </div>
        </div>

        <div className={classes.image__container}>
          <Image
            src={"/koszula-nocna.jpg"}
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </div>
      <div className={classes.gallery__container} id="koszule-nocne">
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
