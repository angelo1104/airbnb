import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import axios from "axios";
import InfoCard from "../components/InfoCard";
import Head from "next/head";

const Container = styled.div`
  margin-top: 100px;
  padding: 40px;
`;

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router.query;
  const [formattedStartDate, setFormattedStartDate] = useState(undefined);
  const [formattedEndDate, setFormattedEndDate] = useState(undefined);

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  useEffect(() => {
    setFormattedStartDate(format(new Date(startDate), "dd MMMM yy"));
    setFormattedEndDate(format(new Date(endDate), "dd MMMM yy"));
  }, []);

  return (
    <div>
      <Head>
        <title>{location} | Stays | Airbnb</title>
      </Head>
      <Header
        alwaysShow
        placeholder={`${location} | ${range} | ${guests} ${
          guests > 1 ? "guests" : "guest"
        }`}
      />
      <Container className={"flex text-gray-800"}>
        <section className={"p-3"}>
          <p className={"text-xs"}>
            300+ Stays - {range} - for {guests}{" "}
            {guests > 1 ? "guests" : "guest"}
          </p>
          <p className={"text-3xl font-semibold mt-2 mb-6"}>
            Stays in {location}
          </p>

          <div
            className={
              "hidden lg:flex justify-between whitespace-nowrap text-gray-800 my-3"
            }
          >
            <p className={"cool-button"}>Cancellation flexibility</p>
            <p className={"cool-button"}>Top Places</p>
            <p className={"cool-button"}>Price</p>
            <p className={"cool-button"}>Rooms and beds</p>
          </div>
        </section>
      </Container>

      <div className={"flex flex-col"}>
        {searchResults.map(
          (
            {
              img,
              description,
              long,
              lat,
              location,
              price,
              star,
              total,
              title,
            },
            index
          ) => (
            <InfoCard
              key={index}
              location={location}
              img={img}
              title={title}
              price={price}
              star={star}
              total={total}
              description={description}
              long={long}
              lat={lat}
            />
          )
        )}
      </div>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const { data: searchResults } = await axios.get(
    "https://links.papareact.com/isz"
  );

  return {
    props: {
      searchResults,
    },
  };
}

export default Search;
