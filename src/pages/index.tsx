import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Valorant</title>
        <meta
          name="description"
          content="My best attempt to create Valorant homepage."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="min-h-screen flex flex-row align-middle">
          <video
            autoPlay
            muted
            loop
            className="max-h-screen min-w-full fixed object-cover -z-10"
          >
            <source src="/videos/HomeScreen.mp4" type="video/mp4" />
          </video>
          <Header />
          <Sidebar />
          <div className="flex justify-between items-center absolute left-5 top-20 bottom-10 right-20">
            <Menu />
          </div>
        </div>
      </main>
    </>
  );
}
