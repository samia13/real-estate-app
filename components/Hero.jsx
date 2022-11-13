import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Hero.module.css";

const filters = [
  { text: "For Sale", value: "sale" },
  { text: "To Rent", value: "rent" },
];
const Hero = () => {
  const [activeFilter, setActiveFilter] = useState("sale");
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?listing_status=${activeFilter}&area=${address}`);
  };
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>We construct Dreams</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum
          nulla voluptate cum, quaerat ipsum accusantium.
        </p>
        <div className={styles.searchContainer}>
          <div className={styles.filters}>
            {filters.map((filter, index) => (
              <button
                className={`${styles.filterBtn} ${
                  activeFilter === filter.value && styles["activeFilter"]
                }`}
                key={index}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.text}
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit} className={styles.searchForm}>
            <input
              type='text'
              placeholder='Enter a city, town or postcode'
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <button type='submit' className={styles.primaryBtn}>
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
