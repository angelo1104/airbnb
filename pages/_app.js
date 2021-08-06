import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "antd/dist/antd.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Airbnb: Holiday Rentals, Cabins, Beach Houses, Unique Homes &
          Experiences
        </title>
        <link rel="icon" href="/faviconn.png" />
      </Head>
      <NextNProgress color={"#fd5b61"} />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
