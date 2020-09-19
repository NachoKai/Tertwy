import React from "react";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

const CenterTop = styled.div`
  border-bottom: 1px solid #2f3336;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 13px;
`;

const InicioCenter = styled.span`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
  }
`;

const EstrellasIcon = styled.div`
  font-size: 1.5rem;
  padding: 5px;

  &:hover {
    cursor: pointer;
    background: #0c0714;
    border-radius: 30px;
  }
`;

const IconContainer = styled.span``;

const Section = ({ title, icon }) => {
  return (
    <Row>
      <CenterTop>
        <InicioCenter>{title}</InicioCenter>
        <EstrellasIcon>
          <IconContainer role="img" aria-label="Stars">
            {icon}
          </IconContainer>
        </EstrellasIcon>
      </CenterTop>
    </Row>
  );
};

export default Section;
