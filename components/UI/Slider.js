"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Slider.module.css";

export default function Gallery({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Normalizacja danych – działa na tablicy stringów i obiektach
  const photos = (images || [])
    .map((item) => {
      if (typeof item === "string") return item;
      if (item?.imageUrl) return item.imageUrl;
      if (item?.url) return item.url;
      return null;
    })
    .filter(Boolean);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 } },
      "(min-width: 1280px)": { slides: { perView: 4, spacing: 30 } },
    },
  });

  // Autoplay (możesz usunąć jeśli nie chcesz)
  useEffect(() => {
    if (!instanceRef.current) return;
    const interval = setInterval(() => instanceRef.current.next(), 4000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  if (photos.length === 0) {
    return <section className={styles.noImages}>Brak zdjęć w galerii</section>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Obejrzyj Naszą Galerię</h2>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {photos.map((src, i) => (
            <div key={i} className="keen-slider__slide">
              <div className={styles.slide}>
                <Image
                  src={src}
                  alt={`Zdjęcie ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 33vw, 25vw"
                  className={styles.image}
                  priority={i < 4}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Kropki */}
        {loaded && instanceRef.current && (
          <div className={styles.dots}>
            {[...Array(instanceRef.current.track.details.slides.length)].map(
              (_, idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={
                    currentSlide === idx ? styles.dotActive : styles.dot
                  }
                />
              )
            )}
          </div>
        )}

        {/* Strzałki – tylko na desktopie */}
        {loaded && (
          <>
            <button
              onClick={() => instanceRef.current?.prev()}
              className={styles.arrowLeft}
            >
              ←
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className={styles.arrowRight}
            >
              →
            </button>
          </>
        )}
      </div>
    </section>
  );
}
