import React from "react";
import { BiWallet, BiFile, BiLock } from "react-icons/bi";
import styles from "./Feature.module.css";

const Feature = () => {
  return (
    <>
      <div className={styles.feature}>
        <BiWallet />
        <h3>All cach offer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          asperiores!
        </p>
      </div>
      <div className={styles.feature}>
        <BiFile />
        <h3>Experts at your service</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          asperiores!
        </p>
      </div>
      <div className={styles.feature}>
        <BiLock />
        <h3>LOcked in pricing</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          asperiores!
        </p>
      </div>
    </>
  );
};

export default Feature;
