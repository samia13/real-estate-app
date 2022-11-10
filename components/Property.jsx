import React from "react";
import Image from "next/image";
import { BiMap, BiBed, BiBath, BiChair } from "react-icons/bi";
import styles from "./Property.module.css";

const Property = ({ property }) => {
  const {
    listing_status,
    num_bathrooms,
    num_bedrooms,
    displayable_address,
    image_url,
    price,
    title,
    furnished_state,
  } = property;
  return (
    <>
      <div className={styles.property}>
        <div className={styles.image}>
          <div style={{ width: "100%", height: "250px", position: "relative" }}>
            <Image
              alt={title}
              src={image_url}
              layout='fill'
              objectFit='cover'
            />
          </div>

          <span>For {listing_status}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.price}>${price}</span>
          <h4>{title}</h4>
          <p>
            <BiMap />
            {displayable_address}
          </p>
          <div className={styles.features}>
            <span>
              <BiBed /> {num_bedrooms}
            </span>
            <span>
              <BiBath /> {num_bathrooms}
            </span>
            <span>
              <BiChair /> {furnished_state}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Property;
