import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  min-width: 400px;
`;

function MediumCard({
  image = "https://links.papareact.com/2io",
  text = "Pet allowed",
}) {
  return (
    <Container>
      <Image src={image} width={300} height={400} className={"rounded-2xl"} />
      <p className={"m-2 text-xl font-bold"}>{text}</p>
    </Container>
  );
}

export default MediumCard;
