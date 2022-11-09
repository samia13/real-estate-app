import { Hero, Property } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
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
            {[1, 2, 3].map((el) => (
              <Property />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
