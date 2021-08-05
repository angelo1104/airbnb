import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Rickroll from "../utils/rickroll";

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 362px;
  background-size: cover !important;
  background-position: 50% 85% !important;
  border-radius: 10px;
  padding: 20px 60px;
  background-repeat: no-repeat !important;
  margin: 70px auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;

  button {
    width: fit-content;
  }
`;

const Title = styled.h4`
  font-size: 45px;
  font-weight: 700;
  max-width: 300px;
  margin-bottom: 30px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const defaultImage =
  "https://a0.muscache.com/im/pictures/27a5b2c0-d954-4c8d-be6f-8db072cdfa45.jpg?im_q=medq&im_w=720";

function LargeCard({
  backgroundImage = defaultImage,
  title = "Not sure where to go? Perfect.",
  dark = false,
  buttonText = "I'm flexible",
  nature,
  subtitle,
}) {
  return (
    <Container
      style={{
        background: nature ? `url("/nature.jpeg")` : `url(${backgroundImage})`,
      }}
    >
      <Wrapper>
        <Title style={{ color: dark ? "white" : "#222" }}>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Button dark={!dark} onClick={Rickroll}>
          {buttonText}
        </Button>
      </Wrapper>
    </Container>
  );
}

export default LargeCard;
