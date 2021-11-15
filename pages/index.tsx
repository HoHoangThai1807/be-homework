import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import MainPresenter from "../widgets";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Be Thái Homework</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
      </Head>

      <MainPresenter />
    </div>
  );
};

export default Home;
