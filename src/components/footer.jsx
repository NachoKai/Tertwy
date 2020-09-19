import React from "react";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

const RightFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
  font-size: 0.9rem;
  color: #b1b5bd;
`;

const RightLowLink = styled.div`
  color: #b1b5bd;
  font-size: 0.8rem;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const RightLowFooter = styled.div`
  margin: 0 auto;
  color: #b1b5bd;
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <Row>
      <RightFooter>
        <RightLowLink>Términos</RightLowLink>
        <RightLowLink>Política de privacidad</RightLowLink>
        <RightLowLink>Cookies</RightLowLink>
        <RightLowLink>Información de anuncios</RightLowLink>
        <RightLowLink>Más opciones</RightLowLink>
      </RightFooter>
      <RightLowFooter>© 2020 PioPio, Inc.</RightLowFooter>
    </Row>
  );
};
export default Footer;
