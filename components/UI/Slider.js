import "slick-carousel/slick/slick.css"; // Import Slick styles
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme styles
import classes from "./Slider.module.css";
import Slider from "react-slick";
import Image from "next/image";

export default function SliderComponent({ images }) {
  const carouselSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3500,
    cssEase: "linear",
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={classes.container}>
      <h2>Obejrzyj Naszą Galerię</h2>
      <Slider {...carouselSettings} className={classes.slider}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.imageUrl}
            height={image.height || 550}
            width={image.width || 450}
            layout="responsive"
            alt={image.alt}
          />
        ))}
      </Slider>
    </div>
  );
}
