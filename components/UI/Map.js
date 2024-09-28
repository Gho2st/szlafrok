import classes from "./Map.module.css";

export default function Map() {
  return (
    <section id='dojazd'>
      <div className={classes.map__container}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d81969.22053869395!2d19.8617147!3d50.0574827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b148e8e3691%3A0xf77f246e02e1c5c3!2sSzlafrok.%20Pracownia%20bieli%C5%BAniarska!5e0!3m2!1spl!2spl!4v1726859755409!5m2!1spl!2spl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
