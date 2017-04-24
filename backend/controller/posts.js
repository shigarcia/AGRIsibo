'use strict';

const db = require(__dirname + '/mysql');

exports.createPost = function(req, res) {
	const query = "INSERT INTO posts(post_content, user_id) VALUES(?, ?)";
	const payload = [
		req.body.post_content,
		req.body.user_id
	];

	db.query(query,	payload, function(err, result){
		if(err) return res.send(err);
		res.status(200).send("Post successfully created");
	});
}; 

exports.getAllPosts = function(req, res){
	db.query("SELECT * FROM posts", function(err,result){
		if(err) return res.send(err);
		res.status(200).send(result);
	});
};

exports.getByPostId = function(req, res){
	const query = "SELECT * FROM posts WHERE post_id = ?";
	const payload = [req.params.post_id];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}) 
};

exports.getByUserId = function(req, res){
	const query = "SELECT * FROM posts WHERE user_id = ?";
	const payload = [req.params.user_id];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}) 
};

exports.getPostsByUsers = function(req, res) {
	const query = "SELECT * FROM posts WHERE user_id = ?";
	const payload = [req.body.user_id];

	db.query(query, payload, function(err, result) {
		if (err) res.send(err);
		res.status(200).send(result);
	}); 
};