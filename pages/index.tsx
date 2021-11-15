import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import MainPresenter from "../widgets";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Be Thái Homework</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <MainPresenter />
    </div>
  );
};

export default Home;
