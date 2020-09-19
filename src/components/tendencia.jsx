import React from "react";
import styled from "styled-components";

export const EachTendencia = styled.div`
  padding: 10px 15px 10px 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #2f3336;

  &:hover {
    cursor: pointer;
    background: #191c20;
  }
`;

const RightMidSub = styled.span`
  color: #b1b5bd;
  font-size: 0.9rem;
`;

const RightMidLink = styled.div`
  font-size: 1rem;
  font-weight: bold;
  padding: 5px 0px 5px 0px;
`;

const Tendencia = ({ titulo, cantidad, pais }) => {
  return (
    <EachTendencia>
      <RightMidSub>Tendencia en {pais}</RightMidSub>
      <RightMidLink>{titulo}</RightMidLink>
      <RightMidSub>{cantidad} Píos</RightMidSub>
    </EachTendencia>
  );
};
export default Tendencia;
