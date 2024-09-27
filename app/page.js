import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/components/UI/Nav";
import Footer from "@/components/UI/Footer";
import Homepage from "@/components/homepage/Homepage";
import Map from "@/components/UI/Map";

export default function Home() {
  return (
    <div className={styles.page}>
      <Nav />
      <Homepage />
      <Map />
      <Footer />
    </div>
  );
}
