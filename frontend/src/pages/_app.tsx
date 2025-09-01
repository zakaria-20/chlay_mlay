// pages/_app.tsx
// import "../styles/globals.css";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { AppProps } from "next/app";
import '../app/globals.css'
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Header />  */}  {/*Put Header Here*/}
      <Header/>
      <main>
        <Component {...pageProps} /> {/* This is your page content */}
      </main>
      <Footer/>
      {/* <Footer /> */}
    </>
  );
}
