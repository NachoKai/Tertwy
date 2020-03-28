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

function App() {
	return (
		<div className="container justify-content-center contenedor-gen">
			<div className="row">
				<div className="col-lg-3 justify-content-center contenedor-izq">
					<Row>
						<div className="logo" id="logo">
							<i className="fas fa-dove"></i>
						</div>
					</Row>
					<Row>
						<div className="left-btn">
							<i className="fas fa-home"></i>
							<span>Inicio</span>
						</div>
					</Row>
					<Row>
						<div className="left-btn">
							<i className="fas fa-hashtag"></i>
							<span>Explorar</span>
						</div>
					</Row>
					<Row>
						<div className="left-btn">
							<i className="far fa-bell"></i>
							<span>Notificaciones</span>
						</div>
					</Row>
					<Row>
						<div className="left-btn">
							<i className="far fa-envelope"></i>
							<span>Mensajes</span>
						</div>
					</Row>
					<Row>
						<div className="left-btn">
							<i className="fas fa-thumbtack"></i>
							<span>Guardados</span>
						</div>
					</Row>
					<Row>
						<div className="left-btn">
							<i className="far fa-list-alt"></i>
							<span>Listas</span>
						</div>
					</Row>
					<Row>
						<div className="left-btn">
							<i className="fas fa-user-circle"></i>
							<span>Perfil</span>
						</div>
					</Row>
					<Row>
						<div className="left-btn">
							<i className="fas fa-ellipsis-h"></i>
							<span>Mas opciones</span>
						</div>
					</Row>
					<Row>
						<div className="piar-btn">Pio Pio!</div>
					</Row>
				</div>
				<div className="col-lg-6 justify-content-center contenedor-cen">
					<Row>
						<div className="center-top">
							<span className="inicio-center">Inicio</span>
							<div className="estrellas-icon">
								<span role="img" aria-label="Stars">
									✨
								</span>
							</div>
						</div>
					</Row>
					<Row>
						<InputPio />
					</Row>
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
					<Row>
						<Buscador />
					</Row>
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
					<Row>
						<div className="right-footer">
							<div className="right-low-link">Términos</div>
							<div className="right-low-link">Política de privacidad</div>
							<div className="right-low-link">Cookies</div>
							<div className="right-low-link">Información de anuncios</div>
							<div className="right-low-link">Más opciones</div>
						</div>
						<div className="right-low-footer">© 2020 PioPio, Inc.</div>
					</Row>
				</div>
			</div>
		</div>
	);
}

export default App;
