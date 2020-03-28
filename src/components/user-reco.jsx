import React from 'react';

function UserReco(props) {
	return (
		<div className="each-tendencia">
			<div className="right-low-persona">
				<div className="avatar-low-right">
					<i class="fas fa-user-circle"></i>
				</div>
				<div className="persona-user">
					<span className="persona">{props.nombreUsuario}</span>
					<span className="right-low-user">{props.cuentaUsuario}</span>
				</div>
			</div>
		</div>
	);
}
export default UserReco;
