import React from 'react';

function Tendencia(props) {
	return (
		<div className="each-tendencia">
			<span className="right-mid-sub">Tendencia en {props.pais}</span>
			<div className="right-mid-link">{props.titulo}</div>
			<span className="right-mid-sub">{props.cantidad} Píos</span>
		</div>
	);
}
export default Tendencia;
