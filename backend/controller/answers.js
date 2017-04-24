'use strict';

const db = require(__dirname + '/mysql');

exports.createAnswer = function(req, res) {
	const query = "INSERT INTO answers(answer_content, user_id, post_id) VALUES(?, ?, ?)";
	const payload = [
		req.body.answer_content,
		req.body.user_id,
		req.body.post_id
	];

	db.query(query,	payload, function(err, result){
		if(err) return res.send(err);
		res.status(200).send("Answer successfully created");
	});
}; 

exports.getAllAnswers = function(req, res){
	db.query("SELECT * FROM answers", function(err,result){
		if(err) return res.send(err);
		res.status(200).send(result);
	});
};

exports.getByAnswerId = function(req, res){
	const query = "SELECT * FROM answers WHERE answer_id = ?";
	const payload = [req.params.answer_id];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}) 
};

exports.getByPostId = function(req, res){
	const query = "SELECT * FROM answers WHERE post_id = ?";
	const payload = [req.params.post_id];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}) 
};

exports.getAnswersByUsers = function(req, res) {
	const query = "SELECT * FROM answers WHERE user_id = ?";
	const payload = [req.body.user_id];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}); 
};

exports.getByUserId = function(req, res){
	const query = "SELECT * FROM answers WHERE user_id = ?";
	const payload = [req.params.user_id];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}) 
};