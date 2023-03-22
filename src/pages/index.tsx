import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Valorantt</title>
        <meta
          name="description"
          content="My best attempt to create Valorant homepage."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="min-h-screen flex flex-col align-middle">
          <video
            autoPlay
            muted
            loop
            className="max-h-screen min-w-full fixed object-cover -z-10"
          >
            <source src="/videos/HomeScreen.mp4" type="video/mp4" />
          </video>
          <Header />
        </div>
      </main>
    </>
  );
}
