angular.module('portfolio')
.config(function ($routeProvider) {
	$routeProvider.when('/',{
		templateUrl: 'views/main.html',
		controller: 'portfolioController'
	}).otherwise({
		redirectTo: '/'
	})
})