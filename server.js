import express from 'express';
import React from 'react';
import Home from './views/home';

const app = express();

app.get('/', (req, res) => {
	const html = React.renderToString(<Home />);

	res.send(html);
});

app.listen(3000);
