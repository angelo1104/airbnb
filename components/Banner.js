import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: url("https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560");
  min-height: 300vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

function Banner() {
  return <Container></Container>;
}

export default Banner;
