import React from 'react';
import Row from 'react-bootstrap/Row';

function Footer(props) {
	return (
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
	);
}
export default Footer;
