'use strict';

const mysql = require('mysql'),
	db = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 's2008103138',
		database : 'AGRIsibo'
});

module.exports = db;
