import React, { useState } from "react";
import { PropertyPreview } from "../components";
import { useRouter } from "next/router";
import { baseUrl, fetchApi } from "../lib/api";
import styles from "../styles/Search.module.css";
import Filters from "../components/Filters";
import { motion, useScroll, useSpring } from "framer-motion";

const search = ({ properties, result_count }) => {
  const { query: filters } = useRouter();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <div className={styles.searchContainer}>
        <div className='container'>
          <div className={styles.resultStatus}>
            <h4>
              Property to {filters.listing_status} in {filters.area || "London"}
            </h4>
            <p>found {result_count} result</p>
          </div>
          <div className={styles.filters}>
            <Filters activeFilters={filters} />
          </div>
          <section>
            {properties.map((el) => (
              <PropertyPreview key={el.listing_id} property={el} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default search;
export async function getServerSideProps({ query }) {
  const properties = await fetchApi(`${baseUrl}/properties/list`, query);

  return {
    props: {
      properties: properties?.listing,
      result_count: properties.result_count,
    },
  };
}
