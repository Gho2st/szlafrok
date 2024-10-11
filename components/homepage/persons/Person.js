"use client";
import Image from "next/image";
import classes from "./Person.module.css";
import Button from "@/components/UI/Button";
import SliderComponent from "@/components/UI/Slider";
import { useState, useEffect, useRef } from "react";
import { BsArrowLeftSquare } from "react-icons/bs";

export default function Person(props) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const componentRef = useRef(null); // Ref do komponentu

  // Function to fetch images
  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/gallery/get-gallery/${props.which}`);
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
    componentRef.current?.scrollIntoView({ behavior: "smooth" }); // Przewija do komponentu
    fetchImages();
  }, [props.which]);

  return (
    <>
      <div className={classes.container} ref={componentRef}>
        <div className={classes.text__container}>
          <div className={classes.exit__container}>
            <button onClick={props.reset}>
              <BsArrowLeftSquare />
            </button>
            <h3>{props.person}</h3>
          </div>
          <p>{props.text}</p>
          <p>{props.text2}</p>
          <p>{props.text3}</p>
          <div className={classes.text__buttons__container}>
            <Button text="Kontakt" link="/" />
            <Button
              text="Opinie"
              // link={`#galeria-${props.which}`}
              link="#opinie"
              background="#FFF0D1"
              color="black"
            />
          </div>
        </div>

        <div className={classes.image__container}>
          <Image
            src={`/${props.which}.jpg`}
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </div>
      <div className={classes.gallery__container} id={`galeria-${props.which}`}>
        {loading && <p>Ładowanie zdjęć...</p>}
        {error && <p className={classes.error}>{error}</p>}
        {!loading && !error && images.length > 0 && (
          <SliderComponent images={images} />
        )}
        {!loading && !error && images.length === 0 && (
          <p>Brak zdjęć do wyświetlenia.</p>
        )}
      </div>
      <div className={classes.exit__button}>
        <button
          aria-label="Zobacz resztę naszej oferty"
          type="button"
          onClick={props.reset}
        >
          Zobacz resztę naszej oferty!
        </button>
      </div>
    </>
  );
}
