import React from 'react';

function Buscador(props) {
	return (
		<div className="right-up">
			<div className="buscador-right">
				<div className="search-input-icon">
					<i className="fas fa-search"></i>
				</div>
				<input className="buscador-input" placeholder="Buscar en PioPio"></input>
			</div>
		</div>
	);
}
export default Buscador;
