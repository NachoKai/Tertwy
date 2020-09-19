import React from "react";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { device } from "../device";

const RightUp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    margin-top: 15px;
  }
  @media ${device.mobileL} {
    margin-top: 15px;
  }
  @media ${device.mobileS} {
    margin-top: 15px;
  }
`;

const BuscadorRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: #15181c;
  border-radius: 30px;
  padding: 10px;
`;

const SearchInputIcon = styled.div`
  width: 25px;
  margin: 0 5px 0 5px;

  .fas {
    color: #b1b5bd;
    font-size: 1.2rem;
  }
`;

const Icon = styled.i`
  color: #d9d9d9;
  border: none;
  background-color: #15181c;

  ::placeholder {
    color: #b1b5bd;
  }
`;

const BuscadorInput = styled.input``;

const Buscador = () => {
  return (
    <Row>
      <RightUp>
        <BuscadorRight>
          <SearchInputIcon>
            <Icon className="fas fa-search"></Icon>
          </SearchInputIcon>
          <BuscadorInput className="buscador-input" placeholder="Buscar en PioPio"></BuscadorInput>
        </BuscadorRight>
      </RightUp>
    </Row>
  );
};

export default Buscador;
