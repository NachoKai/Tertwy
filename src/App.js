import React from 'react';
import './App.css';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
	return (
		<div className="container justify-content-center contenedor-gen">
			<div className="row">
				<div className="col-md-3 justify-content-center contenedor-izq">
					<Row>
						<div className="logo" id="logo">
							<i class="fas fa-dove"></i>
						</div>
					</Row>
					<Row>
						<div className="left-btn">
							<i class="fas fa-home"></i>
							<span>Inicio</span>
						</div>
					</Row>
					<Row>
						<div className="left-btn">
							<i class="fas fa-hashtag"></i>
							<span>Explorar</span>
						</div>
					</Row>
					<Row>
						<div className="left-btn">
							<i class="far fa-bell"></i>
							<span>Notificaciones</span>
						</div>
					</Row>
					<Row>
						<div className="left-btn">
							<i class="far fa-envelope"></i>
							<span>Mensajes</span>
						</div>
					</Row>
					<Row>
						<div className="left-btn">
							<i class="fas fa-thumbtack"></i>
							<span>Guardados</span>
						</div>
					</Row>
					<Row>
						<div className="left-btn">
							<i class="far fa-list-alt"></i>
							<span>Listas</span>
						</div>
					</Row>
					<Row>
						<div className="left-btn">
							<i class="fas fa-user-circle"></i>
							<span>Perfil</span>
						</div>
					</Row>
					<Row>
						<div className="left-btn">
							<i class="fas fa-ellipsis-h"></i>
							<span>Mas opciones</span>
						</div>
					</Row>
					<Row>
						<div className="piar-btn">Pio Pio!</div>
					</Row>
				</div>
				<div className="col-md-6 justify-content-center contenedor-cen">
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
						<div className="input-center">
							<div className="input-up">
								<div className="avatar-center">
									<i class="fas fa-user-circle"></i>
								</div>
								<div className="pio-input-div">
									<input
										className="pio-input"
										placeholder="¿Que esta pasando?"
									></input>
								</div>
							</div>
							<div className="input-down">
								<div className="tools-icons">
									<span className="tool-icon">
										<i class="far fa-image"></i>
									</span>
									<span className="tool-icon">
										<i class="fas fa-poll-h"></i>
									</span>
									<span className="tool-icon">
										<i class="far fa-grin-alt"></i>
									</span>
								</div>
								<div className="piar-btn-mid">Pio Pio!</div>
							</div>
						</div>
					</Row>
					<Row>Componente Tuits</Row>
				</div>
				<div className="col-md-3 justify-content-center contenedor-der">
					<Row>
						<div className="right-up">
							<div className="buscador-right">
								<div className="search-input-icon">
									<i class="fas fa-search"></i>
								</div>
								<input
									className="buscador-input"
									placeholder="Buscar en PioPio"
								></input>
							</div>
						</div>
					</Row>
					<Col>
						<div className="right-mid">
							<div>Tendencias para ti</div>
							<div>Tendencia en Argentina</div>
							<div>Tendencia en Argentina</div>
							<div>Tendencia en Argentina</div>
							<div>Tendencia en Argentina</div>
							<div>Tendencia en Argentina</div>
							<div>Mostrar Mas</div>
						</div>
					</Col>
					<Col>
						<div className="right-low">
							<div>A quien seguir</div>
							<div>Persona</div>
							<div>Persona</div>
							<div>Persona</div>
							<div>Mostrar Mas</div>
						</div>
					</Col>
					<Row>
						<div className="right-footer">
							Términos Política de privacidad Cookies Información de anuncios Más
							opciones © 2020 PioPio, Inc.
						</div>
					</Row>
				</div>
			</div>
		</div>
	);
}

export default App;
