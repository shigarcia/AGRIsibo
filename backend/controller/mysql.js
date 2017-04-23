'use strict';

const mysql = require('mysql'),
	db = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'user',
		database : 'AGRIsibo'
});

module.exports = db;
