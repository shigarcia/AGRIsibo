'use strict';

const db = require(__dirname + '/mysql');


exports.login = function(req, res, next) {

	function validatelogin() {
		const query = "SELECT COUNT(*) FROM user_accounts WHERE username = ?";
		const payload = [req.body.username];
		db.query(query, payload, function(err, result) {
			if (result.length) {
				checkpassword();
			}
			else {
				return res.status(404).send({ 'message' : 'User does not exist!'});
			} 
		});
	}

	function checkpassword(){
		const query = "SELECT * FROM user_accounts where username = ? AND password = ? LIMIT 1";
		const payload = [req.body.username, req.body.password];

		db.query(query, payload, function(err, result){
			if (result[0].count === 1) {
				return res.send({ 
					'message' : 'Succesfully Logged In!',
					'username': req.body.username
				});
			}
			else {
				return res.send({ 'message' : 'Wrong password!'});
			} 
		});
	}
	validatelogin();
};

// Logout as a faculty user
exports.logout = function(req, res, next) {
    function validatelogout() {

        if (!req.session.user) {
            return res.status(403).send({ 'message' : 'No session found'});
        }

        req.session.destroy();

        return res.send({message: 'Successfully logged out'});
    }

    validatelogout();
};