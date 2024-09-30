import About from "./About";
import Baner2 from "./Baner2";
import Contact from "./Contact";
import Gifts from "./Gifts";
import classes from "./Homepage.module.css";
import Reviews from "./Reviews";
import Service from "./Service";

export default function Homepage() {
  return (
    <div className={classes.homepage__container}>
      <main>
        <Baner2 />
        <About />
        <Service />
        <Gifts />
        <Reviews />
        <Contact />
      </main>
    </div>
  );
}
