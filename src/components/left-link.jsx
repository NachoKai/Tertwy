import React from 'react';
import Row from 'react-bootstrap/Row';

function LeftLink(props) {
	return (
		<Row>
			<div className="left-btn">
				<i className={props.icon}></i>
				<span>{props.title}</span>
			</div>
		</Row>
	);
}

export default LeftLink;
