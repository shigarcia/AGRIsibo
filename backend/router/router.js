var users = require('../controller/users');
var posts = require('../controller/posts');
var comments = require('../controller/comments');
var answers = require('../controller/answers');
var authenticate = require('../controller/authenticate');
var check_session = require('../config/session');

module.exports = function(router) {	

	router.del = router.delete;

	//authenticate routes

	router.post('/authenticate/login', authenticate.login);
	router.get('/authenticate/logout', check_session, authenticate.logout);

	router.post('/users/createUserAccounts/', users.createUserAccount);
	router.get('/users/getAllUserAccounts/', users.getAllUserAccounts);
	router.post('/users/getByUserId/:user_id', users.getByUserId);
	router.post('/users/getByFirstName/:first_name', users.getByFirstName);
	router.post('/users/getByMiddleName/:middle_name', users.getByMiddleName);
	router.post('/users/getByLastName/:last_name', users.getByLastName);
	router.post('/users/getByUsername/:username', users.getByUsername);
	router.post('/users/getByMembershipDate/:member_since', users.getByMembershipDate);
	router.post('/users/getByEmail/:email', users.getByEmail);

	router.post('/posts/createPost/', posts.createPost);
	router.get('/posts/getAllPosts/', posts.getAllPosts);
	router.post('/posts/getByPostId/:post_id', posts.getByPostId);
	router.post('/posts/getByUserId/:user_id', posts.getByUserId);

	router.post('/comments/createComment/', comments.createComment);
	router.get('/comments/getAllComments/', comments.getAllComments);
	router.post('/comments/getByCommentId/:comment_id', comments.getByCommentId);
	router.post('/comments/getByPostId/:post_id', comments.getByPostId);
	router.post('/comments/getByUserId/:user_id', comments.getByUserId);	

	router.post('/answers/createAnswer/', answers.createAnswer);
	router.get('/answers/getAllAnswers/', answers.getAllAnswers);
	router.post('/answers/getByAnswerId/:answer_id', answers.getByAnswerId);
	router.post('/answers/getByPostId/:post_id', answers.getByPostId);
	router.post('/answers/getByUserId/:user_id', answers.getByUserId);	

	router.all('*', function (req, res, next) {
		res.status(404).send({message : 'Nothing to do here.'});
	});
	
	return router;	
};
