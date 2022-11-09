import React from "react";
import Head from "next/head";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import styles from "./Layout.module.css";

const menu = [
  { name: "Home", link: "/" },
  { name: "For Sale", link: "/for-sale" },
  { name: "For Rent", link: "/for-rent" },
];
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Real Estate App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          <h4>
            RealEstate <span></span>
          </h4>
          <nav>
            {menu.map((el, index) => (
              <Link
                className={`${styles.menuItem} ${
                  index === 0 && styles.activeMenu
                }`}
                key={index}
                href={el.link}
                passHref
              >
                {el.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {/* <Box boxShadow='0 0 4px #dadada'></Box> */}
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>
          Made with <BiHeart /> by samyscode
        </p>
      </footer>
    </div>
  );
};
export default Layout;
