import React from "react";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { device } from "../device";

const InputCenter = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 5px solid #202327;

  @media all and (max-width: 480px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const InputUp = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  margin-bottom: 10px;
`;

const AvatarCenter = styled.div`
  .fas {
    font-size: 2.5rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Icon = styled.i``;

const Input = styled.input`
  color: #d9d9d9;
  width: 100%;
  font-size: 1.2rem;
  background-color: #000;
  border: none;

  ::placeholder {
    color: #b1b5bd;
  }
`;

const PioInputContainer = styled.div`
  width: 100%;
`;

const InputDown = styled.div`
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;

  @media all and (max-width: 480px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const ToolsIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding: 0 10px 0 10px;
`;

const ToolIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  .far,
  .fas {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 35px;
    font-size: 1.1rem;
    color: #794bc4;

    &:hover {
      cursor: pointer;
      background: #162632;
      border-radius: 30px;
    }
  }
`;

const PiarBtnMid = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 30px;
  padding: 6px 18px 6px 18px;
  background: #794bc4;
  margin: 10px;

  &:hover {
    cursor: pointer;
    background: #865dca;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(1px);
  }
`;

const InputPio = () => {
  return (
    <Row>
      <InputCenter>
        <InputUp>
          <AvatarCenter>
            <Icon className="fas fa-user-circle"></Icon>
          </AvatarCenter>
          <PioInputContainer>
            <Input placeholder="¿Que esta pasando?"></Input>
          </PioInputContainer>
        </InputUp>
        <InputDown>
          <ToolsIcons>
            <ToolIcon>
              <Icon className="far fa-image"></Icon>
            </ToolIcon>
            <ToolIcon>
              <Icon className="fas fa-video"></Icon>
            </ToolIcon>
            <ToolIcon>
              <Icon className="fas fa-poll-h"></Icon>
            </ToolIcon>
            <ToolIcon>
              <Icon className="far fa-grin-alt"></Icon>
            </ToolIcon>
          </ToolsIcons>
          <PiarBtnMid>Pio Pio!</PiarBtnMid>
        </InputDown>
      </InputCenter>
    </Row>
  );
};

export default InputPio;
