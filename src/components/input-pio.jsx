import React from 'react';
import Row from 'react-bootstrap/Row';

function InputPio(props) {
	return (
		<Row>
			<div className="input-center">
				<div className="input-up">
					<div className="avatar-center">
						<i className="fas fa-user-circle"></i>
					</div>
					<div className="pio-input-div">
						<input className="pio-input" placeholder="¿Que esta pasando?"></input>
					</div>
				</div>
				<div className="input-down">
					<div className="tools-icons">
						<span className="tool-icon">
							<i className="far fa-image"></i>
						</span>
						<span className="tool-icon">
							<i className="fas fa-video"></i>
						</span>
						<span className="tool-icon">
							<i className="fas fa-poll-h"></i>
						</span>
						<span className="tool-icon">
							<i className="far fa-grin-alt"></i>
						</span>
					</div>
					<div className="piar-btn-mid">Pio Pio!</div>
				</div>
			</div>
		</Row>
	);
}
export default InputPio;
