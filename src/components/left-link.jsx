import React from "react";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { device } from "../device";

const LeftBtn = styled.div`
  display: flex;
  margin: 3px;
  padding: 10px;
  font-weight: bold;
  font-size: 1.2rem;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: #794bc4;
    background: #0c0714;
    border-radius: 30px;
  }
  @media all and (max-width: 330px) {
    font-size: 1rem;

    .fas,
    .far,
    .fab {
      font-size: 1.3rem;
    }
  }
`;

const Icon = styled.i``;

const Title = styled.span``;

const LeftLink = ({ icon, title }) => {
  return (
    <Row>
      <LeftBtn>
        <Icon className={icon}></Icon>
        <Title>{title}</Title>
      </LeftBtn>
    </Row>
  );
};

export default LeftLink;
