import React from "react";
import styled from "styled-components";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UserReco from "./components/user-reco";
import Tendencia from "./components/tendencia";
import InputPio from "./components/input-pio";
import Pio from "./components/pio";
import Buscador from "./components/buscador";
import LeftLink from "./components/left-link";
import Logo from "./components/logo";
import Section from "./components/section";
import Footer from "./components/footer";

const Container = styled.div`
  padding: 0 !important;
  margin: 0 !important;
`;

const RowContainer = styled.div`
  display: flex;
  padding: 0 !important;
  margin: 0 !important;
`;

const ContenedorIzquierdo = styled.div`
  border-right: 1px solid #202327;
  padding: 0 15px 0 0 !important;
  min-width: 50px;

  @media all and (min-width: 768px) and (max-width: 1024px) {
    border-right: 0px;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    border-right: 0px;
  }
  @media all and (max-width: 480px) {
    border-right: 0px;
    padding-left: 15px !important;
  }
`;

const ContenedorCentral = styled.div`
  padding: 0 25px 0 25px;
  width: 100%;
`;

const ContenedorDerecho = styled.div`
  border-left: 1px solid #202327;
  padding: 0 0 0 15px !important;

  @media all and (min-width: 768px) and (max-width: 1024px) {
    border-left: 0px;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    border-left: 0px;
  }
  @media all and (max-width: 480px) {
    border-left: 0px;
    padding-right: 15px !important;
  }
`;

const RightMid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  background: #15181c;
  margin: 15px 0 15px 0;
`;

const RightMidSublink = styled.div`
  color: #865dca;
  font-size: 1rem;
  padding: 10px 15px 10px 15px;

  &:hover {
    cursor: pointer;
  }
`;

const TendContainer = styled.div`
  border-bottom: 1px solid #2f3336;
  padding: 10px 15px 0px 15px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Tendencias = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 10px;
`;

const TendIcon = styled.div`
  padding-bottom: 10px;

  .fas {
    font-size: 1.1rem;
    margin-right: 0px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const RightLow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  background: #15181c;
  margin: 15px 0 15px 0;
`;

const Icon = styled.i``;

const App = () => {
  return (
    <Container>
      <RowContainer>
        <ContenedorIzquierdo className="col-lg-3 justify-content-center">
          <Logo />
          <LeftLink title="Inicio" icon="fas fa-home" />
          <LeftLink title="Explorar" icon="fas fa-hashtag" />
          <LeftLink title="Notificaciones" icon="far fa-bell" />
          <LeftLink title="Mensajes" icon="far fa-envelope" />
          <LeftLink title="Guardados" icon="fas fa-thumbtack" />
          <LeftLink title="Listas" icon="far fa-list-alt" />
          <LeftLink title="Perfil" icon="fas fa-user-circle" />
          <LeftLink title="Más opciones" icon="fas fa-ellipsis-h" />
        </ContenedorIzquierdo>

        <ContenedorCentral className="col-lg-6 justify-content-center">
          <Section title="Inicio" icon="✨" />
          <InputPio />
          <Row>
            <Pio
              nombre="Nombre 1"
              usuario="usuario1"
              fecha="Hoy"
              img="https://picsum.photos/50"
              pio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia ligula lacus, in vulputate quam elementum vitae. Aliquam tempus est ante, ut placerat enim volutpat eu. Suspendisse potenti. Sed ac aliquet sem. Nulla ornare sed."
            />
            <Pio
              nombre="Nombre 2"
              usuario="usuario2"
              fecha="Hoy"
              img="https://picsum.photos/51"
              pio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia ligula lacus, in vulputate quam elementum vitae. Aliquam tempus est ante, ut placerat enim volutpat eu. Suspendisse potenti. Sed ac aliquet sem. Nulla ornare sed."
            />
            <Pio
              nombre="Nombre 3"
              usuario="usuario3"
              fecha="Hoy"
              img="https://picsum.photos/52"
              pio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia ligula lacus, in vulputate quam elementum vitae. Aliquam tempus est ante, ut placerat enim volutpat eu. Suspendisse potenti. Sed ac aliquet sem. Nulla ornare sed."
            />
            <Pio
              nombre="Nombre 4"
              usuario="usuario4"
              fecha="Ayer"
              img="https://picsum.photos/53"
              pio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia ligula lacus, in vulputate quam elementum vitae. Aliquam tempus est ante, ut placerat enim volutpat eu. Suspendisse potenti. Sed ac aliquet sem. Nulla ornare sed."
            />
            <Pio
              nombre="Nombre 5"
              usuario="usuario5"
              fecha="Ayer"
              img="https://picsum.photos/54"
              pio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia ligula lacus, in vulputate quam elementum vitae. Aliquam tempus est ante, ut placerat enim volutpat eu. Suspendisse potenti. Sed ac aliquet sem. Nulla ornare sed."
            />
            <Pio
              nombre="Nombre 6"
              usuario="usuario6"
              fecha="Ayer"
              img="https://picsum.photos/55"
              pio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia ligula lacus, in vulputate quam elementum vitae. Aliquam tempus est ante, ut placerat enim volutpat eu. Suspendisse potenti. Sed ac aliquet sem. Nulla ornare sed."
            />
          </Row>
        </ContenedorCentral>

        <ContenedorDerecho className="col-lg-3 justify-content-center">
          <Buscador />
          <Col>
            <RightMid>
              <TendContainer>
                <Tendencias>Tendencias para ti</Tendencias>
                <TendIcon>
                  <Icon className="fas fa-cog"></Icon>
                </TendIcon>
              </TendContainer>
              <Tendencia pais="Argentina" titulo="Título 1" cantidad="1015" />
              <Tendencia pais="Argentina" titulo="Título 2" cantidad="905" />
              <Tendencia pais="Argentina" titulo="Título 3" cantidad="520" />
              <Tendencia pais="Argentina" titulo="Título 4" cantidad="410" />
              <Tendencia pais="Argentina" titulo="Título 5" cantidad="120" />
              <RightMidSublink>Mostrar más</RightMidSublink>
            </RightMid>
          </Col>
          <Col>
            <RightLow>
              <TendContainer>
                <Tendencias>A quien seguir</Tendencias>
              </TendContainer>
              <UserReco nombreUsuario="Usuario 1" cuentaUsuario="@usuario1" />
              <UserReco nombreUsuario="Usuario 2" cuentaUsuario="@usuario2" />
              <UserReco nombreUsuario="Usuario 3" cuentaUsuario="@usuario3" />
              <RightMidSublink>Mostrar más</RightMidSublink>
            </RightLow>
          </Col>
          <Footer />
        </ContenedorDerecho>
      </RowContainer>
    </Container>
  );
};

export default App;
