import React from 'react';
import Row from 'react-bootstrap/Row';

function Buscador(props) {
	return (
		<Row>
			<div className="right-up">
				<div className="buscador-right">
					<div className="search-input-icon">
						<i className="fas fa-search"></i>
					</div>
					<input className="buscador-input" placeholder="Buscar en PioPio"></input>
				</div>
			</div>
		</Row>
	);
}
export default Buscador;
