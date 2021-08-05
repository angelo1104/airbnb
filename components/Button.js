import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  font-size: 16px;
  padding: 5px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
`;

function Button({ children, dark, styles, onClick }) {
  return (
    <ButtonContainer
      style={{
        background: dark ? "#222" : "white",
        color: dark ? "white" : "#222",
        ...styles,
      }}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
}

export default Button;
