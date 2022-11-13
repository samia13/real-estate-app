import React from "react";
import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = (props) => {
  const { purpose, title, text, link, direction, image } = props;
  return (
    <div className={`${styles.banner} ${styles[direction]}`}>
      <div
        className={styles.imageContainer}
        style={{
          width: "50%",
          height: "400px",
          position: "relative",
          marginRight: "20px",
          overflow: "hidden",
        }}
      >
        <Image
          alt={title}
          src={`/images/${image}`}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className={styles.detail}>
        <h4>{purpose}</h4>
        <h2>{title}</h2>
        <p>{text}</p>
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default Banner;
