import React from 'react';
import Row from 'react-bootstrap/Row';

function Section(props) {
	return (
		<Row>
			<div className="center-top">
				<span className="inicio-center">{props.title}</span>
				<div className="estrellas-icon">
					<span role="img" aria-label="Stars">
						{props.icon}
					</span>
				</div>
			</div>
		</Row>
	);
}

export default Section;
