import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #f6f5f3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;

  .loader {
    width: 40%;
  }
`;

function Loader({ show }) {
  useEffect(() => {
    const body = document.querySelector("body");
    if (show) body.style.overflow = "hidden";
    else body.style.overflow = "auto";
  }, [show]);

  if (show)
    return (
      <Container>
        <img src="/airbnb.gif" alt="" className={"loader"} />
      </Container>
    );

  return <></>;
}

export default Loader;
