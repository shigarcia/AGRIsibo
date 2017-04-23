'use strict';

const body_parser   = require('body-parser');   
const express       = require('express');

let app = express();

app.set('case sensitive routing', true);
app.set('x-powered-by', false);
app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());
app.use(express.static(__dirname + '/../frontend'));
app.use(require(__dirname + '/router/router')(express.Router()));

app.listen(8000, function() {
	console.log('info: '+'\t'+'Web API server started successfully');
	console.log('info: '+'\t'+ 'Server listening on port 8000');
});
