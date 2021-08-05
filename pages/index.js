import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ExploreNearby from "../components/ExploreNearby";
import axios from "axios";

export default function Home({ explore, liveAnywhere }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <ExploreNearby explore={explore} liveAnywhere={liveAnywhere} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data: explore } = await axios.get("https://jsonkeeper.com/b/4G1G");
  const { data: liveAnywhere } = await axios.get(
    "https://links.papareact.com/zp1"
  );

  return {
    props: {
      explore,
      liveAnywhere,
    },
  };
};
