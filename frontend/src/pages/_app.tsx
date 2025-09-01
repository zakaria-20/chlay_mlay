// pages/_app.tsx
// import "../styles/globals.css";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Header />  */}  {/*Put Header Here*/}
      <main>
        <Component {...pageProps} /> {/* This is your page content */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
