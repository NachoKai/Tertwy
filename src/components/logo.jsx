import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 10px;
  width: 52px;
  margin-left: 10px;

  .fas {
    font-size: 2.2rem;
  }

  &:hover {
    cursor: pointer;
    background: #0c0714;
    border-radius: 30px;
  }
`;

const Icon = styled.i``;

const Logo = () => {
  return (
    <Container id="logo">
      <Icon className="fas fa-dove"></Icon>
    </Container>
  );
};

export default Logo;
