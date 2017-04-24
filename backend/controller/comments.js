'use strict';

const db = require(__dirname + '/mysql');

exports.createComment = function(req, res) {
	const query = "INSERT INTO comments(comment_content, user_id, post_id) VALUES(?, ?, ?)";
	const payload = [
		req.body.comment_content,
		req.body.user_id,
		req.body.post_id
	];

	db.query(query,	payload, function(err, result){
		if(err) return res.send(err);
		res.status(200).send("Comment successfully created");
	});
}; 

exports.getAllComments = function(req, res){
	db.query("SELECT * FROM comments", function(err,result){
		if(err) return res.send(err);
		res.status(200).send(result);
	});
};

exports.getByCommentId = function(req, res){
	const query = "SELECT * FROM comments WHERE comment_id = ?";
	const payload = [req.params.comment_id];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}) 
};

exports.getByPostId = function(req, res){
	const query = "SELECT * FROM comments WHERE post_id = ?";
	const payload = [req.params.post_id];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}) 
};

exports.getCommentsByUsers = function(req, res) {
	const query = "SELECT * FROM comments WHERE user_id = ?";
	const payload = [req.body.user_id];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}); 
};

exports.getByUserId = function(req, res){
	const query = "SELECT * FROM comments WHERE user_id = ?";
	const payload = [req.params.user_id];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}) 
};