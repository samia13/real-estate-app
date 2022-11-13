import { Hero, Property, Feature, Banner } from "../components";
import { baseUrl, fetchApi } from "../lib/api";
import styles from "../styles/Home.module.css";

export default function Home({ popularProperties }) {
  return (
    <div>
      <Hero />

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
      <section className={styles.banners}>
        <div className='container'>
          <Banner
            purpose='RENT A HOME'
            title='Rental homes for everyone'
            text='Explore from a variety of choices, homes, flats and more'
            link='rent'
            direction='left-image'
            image='rent.jpg'
          />

          <Banner
            purpose='BUY A HOME'
            title='Find, Buy & Own Your Dream Home'
            text='Explore from a variety of choices, homes, flats and more'
            link='sale'
            direction='right-image'
            image='sale.jpg'
          />
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const popularProperties = await fetchApi(`${baseUrl}/properties/list`, {
    order_by: "view_count",
    page_size: "3",
  });

  return {
    props: {
      popularProperties: popularProperties?.listing,
    },
  };
}
