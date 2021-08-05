import Header from "../components/Header";
import Banner from "../components/Banner";
import ExploreNearby from "../components/ExploreNearby";
import axios from "axios";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function Home({ explore, liveAnywhere }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);

  return (
    <div>
      <Header />

      <Loader show={show} />

      <Banner />

      <ExploreNearby explore={explore} liveAnywhere={liveAnywhere} />

      <Footer />
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
