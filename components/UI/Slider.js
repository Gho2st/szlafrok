import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Slider.module.css";
import Slider from "react-slick";
import Image from "next/image";

export default function SliderComponent({ images }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className={classes.container}>
      <h2>Obejrzyj Naszą Galerię</h2>.
      <Slider {...settings} className={classes.slider}>
        {images.map((img, i) => (
          <div key={i} className={classes.slide}>
            <Image
              src={img.imageUrl}
              alt={img.alt || `Modelka w piżamie / szlafroku ${i + 1}`}
              width={480}
              height={650} // proporcja ok. 3:4 – idealna dla modelek pełna sylwetka
              priority={i < 4} // tylko pierwsze 4 ładują się od razu (szybkość!)
              quality={85}
              className={classes.img}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
