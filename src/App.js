import React from 'react';
import './App.css';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UserReco from './components/user-reco';
import Tendencia from './components/tendencia';
import InputPio from './components/input-pio';
import Pio from './components/pio';
import Buscador from './components/buscador';
import LeftLink from './components/left-link';
import Logo from './components/logo';
import Section from './components/section';
import Footer from './components/footer';

function App() {
	return (
		<div className="container justify-content-center contenedor-gen">
			<div className="row">
				<div className="col-lg-3 justify-content-center contenedor-izq">
					<Logo />
					<LeftLink title="Inicio" icon="fas fa-home" />
					<LeftLink title="Explorar" icon="fas fa-hashtag" />
					<LeftLink title="Notificaciones" icon="far fa-bell" />
					<LeftLink title="Mensajes" icon="far fa-envelope" />
					<LeftLink title="Guardados" icon="fas fa-thumbtack" />
					<LeftLink title="Listas" icon="far fa-list-alt" />
					<LeftLink title="Perfil" icon="fas fa-user-circle" />
					<LeftLink title="Más opciones" icon="fas fa-ellipsis-h" />
				</div>
				<div className="col-lg-6 justify-content-center contenedor-cen">
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
				</div>
				<div className="col-lg-3 justify-content-center contenedor-der">
					<Buscador />
					<Col>
						<div className="right-mid">
							<div className="tend-div">
								<div className="tendencias">Tendencias para ti</div>
								<div className="tend-icon">
									<i className="fas fa-cog"></i>
								</div>
							</div>
							<Tendencia pais="Argentina" titulo="Título 1" cantidad="1015" />
							<Tendencia pais="Argentina" titulo="Título 2" cantidad="905" />
							<Tendencia pais="Argentina" titulo="Título 3" cantidad="520" />
							<Tendencia pais="Argentina" titulo="Título 4" cantidad="410" />
							<Tendencia pais="Argentina" titulo="Título 5" cantidad="120" />
							<div className="right-mid-sublink">Mostrar más</div>
						</div>
					</Col>
					<Col>
						<div className="right-low">
							<div className="tend-div">
								<div className="tendencias">A quien seguir</div>
							</div>
							<UserReco nombreUsuario="Usuario 1" cuentaUsuario="@usuario1" />
							<UserReco nombreUsuario="Usuario 2" cuentaUsuario="@usuario2" />
							<UserReco nombreUsuario="Usuario 3" cuentaUsuario="@usuario3" />
							<div className="right-mid-sublink">Mostrar más</div>
						</div>
					</Col>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
