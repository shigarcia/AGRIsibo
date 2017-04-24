app.controller('indexController', ['$scope', '$http', function($scope, $http) {
	$scope.title = 'AGRIsibo';
	$scope.description = 'AGRIsibo is a web-based crowdsourcing application for Filipino agriculturists and farmers for an agrisibo and progresibong pagsasaka.';


	$http.get('/users/getAllUserAccounts').success(function(res) {
		$http.get('/posts/getAllPosts').success(function(response) {

		$scope.announcements =
		[
			{
				details: response[res[0].user_id-1].post_content,
				date: response[res[0].user_id-1].post_date,
				name: res[0].username
			},
			{
				details: response[res[0].user_id-1].post_content,
				date: response[res[0].user_id-1].post_date,
				name: res[1].username
			},
			{
				details: response[res[0].user_id-1].post_content,
				date: response[res[0].user_id-1].post_date,
				name: res[0].username
			},
			{
				details: response[res[0].user_id-1].post_content,
				date: response[res[0].user_id-1].post_date,
				name: res[1].username
			},
			{
				details: response[res[0].user_id-1].post_content,
				date: response[res[0].user_id-1].post_date,
				name: res[0].username
			},
			{
				details: response[res[0].user_id-1].post_content,
				date: response[res[0].user_id-1].post_date,
				name: res[1].username
			}
		]

		})
	});

	$http.get('/users/getAllUserAccounts').success(function(res) {
		$http.get('/posts/getAllPosts').success(function(response) {

		$scope.posts =
		[
			{
				details: response[res[1].user_id-1].post_content,
				date: response[res[1].user_id-1].post_date,
				name: res[1].username
			}
		]

		})
	});

	$http.get('/users/getAllUserAccounts').success(function(res) {

		$scope.users = [

		]

		for(var i=0; i<2; i++) {
			$scope.users.push({
				first_name: res[i].first_name,
				last_name: res[i].last_name,
				memdate: res[i].member_since,
				username: res[i].username
			});
		}
	});

}]);

app.controller('loginController', ['$scope', '$http', function($scope, $http) {

	$scope.validate = function(index) {
		$http.post('/authenticate/login').success(function(response){
			alert(response);
		})
	}

}]);

app.config(['$routeProvider',
  function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'views/index.html',
		controller: 'indexController'
	}).
	when('/users', {
		templateUrl: 'views/users.html',
		controller: 'indexController'
	}).
	when('/login', {
		templateUrl: 'views/login.html',
		controller: 'loginController'
	}).
	when('/register', {
		templateUrl: 'views/reg.html',
		controller: 'regController'
	}).
	when('/posts', {
		templateUrl: 'views/posts.html',
		controller: 'indexController'
	}).
	otherwise({
 	   redirectTo: '/'
	});
}]);