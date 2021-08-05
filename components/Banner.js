import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  background: url("https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560");
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  position: relative;
  padding: 50px;
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 100px;
  max-width: 500px;
`;

const Title = styled.h1`
  font-size: 55px;
  font-weight: 900;
  margin-bottom: 15px;
`;

function Banner() {
  return (
    <Container>
      <Wrapper>
        <Title>Olympian & Paralympian Online Experiences</Title>

        <Button>Explore now</Button>
      </Wrapper>
    </Container>
  );
}

export default Banner;
