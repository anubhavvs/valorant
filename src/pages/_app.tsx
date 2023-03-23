import "@/styles/globals.css";
import type { AppProps } from "next/app";
import TungstenFont from "next/font/local";

const tungsten = TungstenFont({
  src: [
    {
      path: "../../public/fonts/Tungsten-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Tungsten-Semibold.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Tungsten-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Tungsten-Book.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Tungsten-Light.otf",
      weight: "300",
    },
  ],
  variable: "--font-tungsten",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${tungsten.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
