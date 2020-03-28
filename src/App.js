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
							<i className="fab fa-twitter"></i>
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
						<div className="twittear-btn">Twittear</div>
					</Row>
				</div>
				<div className="col-md-6 justify-content-center contenedor-cen">
					<Row>Inicio</Row>
					<Row>¿Que esta pasando?</Row>
					<Row>Componente Tuits</Row>
				</div>
				<div className="col-md-3 justify-content-center contenedor-der">
					<Row>Buscar en Twitter</Row>
					<Col>
						<Row>Tendencias para ti</Row>
						<Row>Tendencia en Argentina</Row>
						<Row>Tendencia en Argentina</Row>
						<Row>Tendencia en Argentina</Row>
						<Row>Tendencia en Argentina</Row>
						<Row>Tendencia en Argentina</Row>
						<Row>Mostrar Mas</Row>
					</Col>
					<Col>
						<Row>A quien seguir</Row>
						<Row>Persona</Row>
						<Row>Persona</Row>
						<Row>Persona</Row>
						<Row>Mostrar Mas</Row>
					</Col>
					<Row>
						Términos Política de privacidad Cookies Información de anuncios Más opciones
						© 2020 Twitter, Inc.
					</Row>
				</div>
			</div>
		</div>
	);
}

export default App;
