import { Hero, Property, Feature } from "../components";
import styles from "../styles/Home.module.css";
import { baseUrl, fetchApi } from "../lib/api";

export default function Home({ popularProperties }) {
  return (
    <div>
      <Hero />
      <section className={styles.features}>
        <div className='container'>
          <div className={styles.heading}>
            <h3>The smartest way to buy a home</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className={styles.featureGrid}>
            <Feature />
          </div>
        </div>
      </section>
      <section className={styles.properties}>
        <div className='container'>
          <div className={styles.heading}>
            <h3>Popular Properties</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className={styles.propertyGrid}>
            {popularProperties.map((el) => (
              <Property key={el.listing_id} property={el} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const popularProperties = await fetchApi(`${baseUrl}/properties/list`, {
    order_by: "view_count",
    page_size: "6",
  });

  return {
    props: {
      popularProperties: popularProperties?.listing,
    },
  };
}
