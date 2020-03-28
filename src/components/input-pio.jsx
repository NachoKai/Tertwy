import React from 'react';

function InputPio(props) {
	return (
		<div className="input-center">
			<div className="input-up">
				<div className="avatar-center">
					<i class="fas fa-user-circle"></i>
				</div>
				<div className="pio-input-div">
					<input className="pio-input" placeholder="¿Que esta pasando?"></input>
				</div>
			</div>
			<div className="input-down">
				<div className="tools-icons">
					<span className="tool-icon">
						<i class="far fa-image"></i>
					</span>
					<span className="tool-icon">
						<i class="fas fa-video"></i>
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
	);
}
export default InputPio;
