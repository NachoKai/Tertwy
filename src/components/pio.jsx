import React from 'react';

function Pio(props) {
	return (
		<div className="contenedor-pio">
			<div className="pio-persona">
				<div className="pio-avatar">
					<div className="avatar-mid-pio">
						<i class="fas fa-user-circle"></i>
					</div>
				</div>
				<div className="pio-user-div">
					<div className="center-name-user">
						<span className="pio-nombre">{props.nombre}</span>
						<span className="pio-user">@{props.usuario}</span>
						<span className="pio-fecha">• {props.fecha}</span>
					</div>
					<span className="pio-text">{props.pio}</span>
					<div className="pio-icons">
						<span>
							<i class="far fa-comment"></i>
						</span>
						<span>
							<i class="fas fa-retweet"></i>
						</span>
						<span>
							<i class="far fa-star"></i>
						</span>
						<span>
							<i class="fas fa-external-link-alt"></i>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Pio;
