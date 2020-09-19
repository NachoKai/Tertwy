import React from "react";
import styled from "styled-components";
import { device } from "../device";

const ContenedorPio = styled.div`
  width: 100%;

  &:hover {
    background: #15181c;
    cursor: pointer;
  }
`;

const PioPersona = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid #202327;

  @media all and (max-width: 480px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const PioAvatar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;

const AvatarMidPio = styled.div`
  margin-right: 10px;
  width: 48px;

  .fas {
    font-size: 3rem;
  }
  @media all and (max-width: 330px) {
    max-width: 35px;
  }
`;

const AvatarCircle = styled.img`
  border-radius: 30px;

  @media all and (max-width: 330px) {
    max-width: 35px;
  }
`;

const PioUserContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const CenterNameUser = styled.div`
  display: flex;
  align-items: center;
`;

const PioNombre = styled.span`
  font-size: 1rem;
  font-weight: bold;
  padding: 5px 0px 5px 0px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const PioUser = styled.span`
  margin-left: 10px;
  color: #b1b5bd;
  font-size: 1rem;
  padding: 5px 0px 5px 0px;
`;

const PioFecha = styled.span`
  margin-left: 10px;
  color: #b1b5bd;
  font-size: 0.9rem;
  padding: 5px 0px 5px 0px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const PioText = styled.span``;

const PioIcons = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 5px;
  padding: 0 10px 0 10px;

  .far,
  .fas {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    font-size: 1.1rem;

    &:hover {
      cursor: pointer;
      color: #794bc4;
      background: #162632;
      border-radius: 30px;
    }
  }
`;

const IconContainer = styled.span``;

const Icon = styled.i``;

const Pio = ({ img, nombre, usuario, fecha, pio }) => {
  return (
    <ContenedorPio>
      <PioPersona>
        <PioAvatar>
          <AvatarMidPio>
            <AvatarCircle src={img} width="50" alt="" />
          </AvatarMidPio>
        </PioAvatar>
        <PioUserContainer>
          <CenterNameUser>
            <PioNombre>{nombre}</PioNombre>
            <PioUser>@{usuario} • </PioUser>
            <PioFecha>{fecha}</PioFecha>
          </CenterNameUser>
          <PioText>{pio}</PioText>
          <PioIcons>
            <IconContainer>
              <Icon className="far fa-comment"></Icon>
            </IconContainer>
            <IconContainer>
              <Icon className="fas fa-retweet"></Icon>
            </IconContainer>
            <IconContainer>
              <Icon className="far fa-star"></Icon>
            </IconContainer>
            <IconContainer>
              <Icon className="fas fa-external-link-alt"></Icon>
            </IconContainer>
          </PioIcons>
        </PioUserContainer>
      </PioPersona>
    </ContenedorPio>
  );
};

export default Pio;
