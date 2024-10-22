"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import classes from "./Baner.module.css";

export default function Baner() {
  return (
    <div className={classes.baner__container}>
      <div className={classes.baner__text__container}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Początkowy stan logo
          animate={{ opacity: 1, scale: 1 }} // Końcowy stan po załadowaniu
          transition={{ duration: 0.5 }} // Krótka animacja
          whileHover={{ scale: 1.05 }} // Powiększenie przy najechaniu
        >
          <Image
            src="/logo2.png"
            width={100}
            height={100}
            layout="responsive"
            alt="Charakterystyczne logo salonu ze szlafrokami w Krakowie - SzlafrO.K."
          />
        </motion.div>
      </div>
    </div>
  );
}
