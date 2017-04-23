'use strict';

const db = require(__dirname + '/mysql');

exports.createUserAccount = function(req, res) {
	const query = "INSERT INTO user_accounts(first_name, middle_name, last_name, email, username, password) VALUES(?, ?, ?, ?, ?, ?)";
	const payload = [
		req.body.first_name,
		req.body.middle_name,
		req.body.last_name,
		req.body.email,
		req.body.username,
		req.body.password
	];

	db.query(query,	payload, function(err, result){
		if(err) return res.send(err);
		res.status(200).send("User account successfully created");
	});
}; 

exports.getAllUserAccounts = function(req, res){
	db.query("SELECT * FROM user_accounts", function(err,result){
		if(err) return res.send(err);
		res.status(200).send(result);
	});
};

exports.getByUserId = function(req, res){
	const query = "SELECT * FROM user_accounts WHERE user_id = ?";
	const payload = [req.params.user_id];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}) 
};

exports.getByFirstName = function(req, res){
	const query = "SELECT * FROM user_accounts WHERE first_name = ?";
	const payload = [req.params.first_name];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}) 
};

exports.getByMiddleName = function(req, res){
	const query = "SELECT * FROM user_accounts WHERE middle_name = ?";
	const payload = [req.params.middle_name];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}) 
};

exports.getByLastName = function(req, res){
	const query = "SELECT * FROM user_accounts WHERE last_name = ?";
	const payload = [req.params.last_name];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}) 
};

exports.getByUsername = function(req, res){
	const query = "SELECT * FROM user_accounts WHERE username = ?";
	const payload = [req.params.username];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}) 
};

exports.getByMembershipDate = function(req, res){
	const query = "SELECT * FROM user_accounts WHERE member_since = ?";
	const payload = [req.params.member_since];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}) 
};

exports.getByEmail = function(req, res){
	const query = "SELECT * FROM user_accounts WHERE email = ?";
	const payload = [req.params.email];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}) 
};