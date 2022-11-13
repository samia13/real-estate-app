import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import {
  BiMap,
  BiBed,
  BiBath,
  BiChair,
  BiCalendarCheck,
  BiCalendar,
} from "react-icons/bi";
import Slider from "react-slick";
import styles from "./PropertyPreview.module.css";

const PropertyPreview = ({ property }) => {
  const {
    agent_logo,
    agent_name,
    num_bathrooms,
    num_bedrooms,
    displayable_address,
    county,
    image_url,
    rental_prices,
    price,
    title,
    furnished_state,
    images,
  } = property;

  const settings = {
    dots: false,
    arrows: true,
    prevArrow: <BiChevronLeft className='left-arrow' />,
    nextArrow: <BiChevronRight className='right-arrow' />,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className={styles.propertyFlex}>
        {images.length > 1 ? (
          <Slider {...settings}>
            {images.map((el, index) => {
              return (
                <div key={index} className={styles.imageContainer}>
                  <Image
                    alt={`${title} image ${index}`}
                    src={el.original || el["645x430"] || el["354x255"]}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              );
            })}
          </Slider>
        ) : (
          <div className={styles.imageContainer}>
            <Image
              alt={`${title} image`}
              src={image_url || "/images/no-image-available.png"}
              layout='fill'
              objectFit='cover'
            />
          </div>
        )}

        <div className={styles.detail}>
          <div className={styles.agent}>
            <h4>{agent_name}</h4>
            <div className={styles.agentImage}>
              <Image
                alt={title}
                src={agent_logo}
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
          <span className={styles.price}>
            ${rental_prices !== undefined ? rental_prices.per_month : price}
          </span>
          <div className={styles.features}>
            <span>
              <BiBed /> {num_bedrooms}
            </span>
            <span>
              <BiBath /> {num_bathrooms}
            </span>
            <span>
              <BiChair />{" "}
              {furnished_state !== null ? furnished_state : "Not mentioned"}
            </span>
          </div>
          <Link href={"/"}>
            <h4>{title}</h4>
          </Link>
          <p>
            <BiMap />
            {displayable_address} | {county}
          </p>
        </div>
      </div>
    </>
  );
};
export default PropertyPreview;
