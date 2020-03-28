import React from 'react';
import './App.css';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
					<Row>Inicio</Row>
					<Row>Explorar</Row>
					<Row>Notificaciones</Row>
					<Row>Mensajes</Row>
					<Row>Guardados</Row>
					<Row>Listas</Row>
					<Row>Perfil</Row>
					<Row>Mas opciones</Row>
					<Row>Twittear</Row>
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
