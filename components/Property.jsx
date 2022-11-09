import React from "react";
import Image from "next/image";
import { BiMap, BiBed, BiBath } from "react-icons/bi";
import styles from "./Property.module.css";

const Property = () => {
  return (
    <>
      <div className={styles.property}>
        <div className={styles.image}>
          {/* <picture>
            <source srcSet='images/hero.jpg' type='image/webp' />
            <img src='images/hero.jpg' alt='' />
          </picture> */}
          <div style={{ width: "100%", height: "250px", position: "relative" }}>
            <Image
              alt='Mountains'
              src='/images/hero.jpg'
              layout='fill'
              objectFit='cover'
            />
          </div>

          <span>For Sale</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.price}>700$ - 2000$</span>
          <h4>Comfortable Appartment in Paris</h4>
          <p>
            <BiMap />
            Popular property
          </p>
          <div className={styles.features}>
            <span>
              <BiBed /> 2 beds
            </span>
            <span>
              <BiBath /> 1 bath
            </span>
            <span> 400 sqft</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Property;
