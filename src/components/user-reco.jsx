import React from "react";
import styled from "styled-components";
import EachTendencia from "./tendencia";

const RightLowPersona = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarLowRight = styled.div`
  .fas {
    font-size: 3rem;
  }
`;

const Icon = styled.i``;

const PersonaUser = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Persona = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const RightLowUser = styled.span`
  color: #b1b5bd;
  font-size: 0.9rem;
`;

const UserReco = ({ nombreUsuario, cuentaUsuario }) => {
  return (
    <EachTendencia>
      <RightLowPersona>
        <AvatarLowRight>
          <Icon className="fas fa-user-circle"></Icon>
        </AvatarLowRight>
        <PersonaUser>
          <Persona>{nombreUsuario}</Persona>
          <RightLowUser>{cuentaUsuario}</RightLowUser>
        </PersonaUser>
      </RightLowPersona>
    </EachTendencia>
  );
};
export default UserReco;
