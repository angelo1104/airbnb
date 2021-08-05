import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

function SmallCard({
  image = "https://links.papareact.com",
  location = "London",
  distance = "45-minute drive",
}) {
  return (
    <Container>
      <Image
        src={image}
        alt={location}
        width={150}
        height={100}
        className={"rounded-lg mx-1"}
      />

      <Wrapper>
        <h5 className={"text-lg mb-1 font-bold"}>{location}</h5>
        <p className={"text-sm"}>{distance}</p>
      </Wrapper>
    </Container>
  );
}

export default SmallCard;
