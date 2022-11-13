import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Banner.module.css";

const Banner = (props) => {
  const { purpose, title, text, link, direction, image } = props;
  return (
    <div className={`${styles.banner} ${styles[direction]}`}>
      <div className={styles.imageContainer}>
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
        <Link href={`/search?listing_status=${link}`}>Explore More</Link>
      </div>
    </div>
  );
};

export default Banner;
