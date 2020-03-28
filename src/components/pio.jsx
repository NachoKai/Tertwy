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
						<span className="pio-nombre">Nombre</span>
						<span className="pio-user">@usuario</span>
						<span className="pio-fecha">• Fecha</span>
					</div>
					<span className="pio-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo
						metus id sapien mattis aliquam. Suspendisse consectetur mi at tortor
						tincidunt, ut dapibus est varius. Suspendisse luctus elit enim, in aliquet
						justo porttitor metus.
					</span>
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
