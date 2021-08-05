import React from "react";
import styled from "styled-components";
import SmallCard from "./SmallCard";
import MediumCard from "./MediumCard";

const Title = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: #222;
`;

const CardsContainer = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 20px 30px;
  margin: 50px auto;
`;

const MediumContainer = styled.div`
  margin: 50px auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

function ExploreNearby({ explore, liveAnywhere }) {
  return (
    <div className={"p-14"}>
      <Title>Explore nearby</Title>

      <CardsContainer>
        {explore?.map((data, index) => (
          <SmallCard
            key={index}
            image={data?.img}
            distance={data?.distance}
            location={data?.location}
          />
        ))}
      </CardsContainer>

      <Title>Live anywhere</Title>

      <MediumContainer>
        {liveAnywhere?.map((card, index) => (
          <MediumCard image={card?.img} key={index} text={card?.title} />
        ))}
      </MediumContainer>
    </div>
  );
}

export default ExploreNearby;
