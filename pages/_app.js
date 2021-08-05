import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";

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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
