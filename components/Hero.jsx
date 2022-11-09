import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>
          We construct <br /> Dreams{" "}
        </h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          facere id dolores! Veniam eum nulla voluptate cum, quaerat ipsum
          accusantium.
        </p>
        <div>
          <button className={styles.primaryBtn}>Explore</button>
          <button className={styles.secondaryBtn}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
