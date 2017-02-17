angular.module('portfolio')
.config(function ($routeProvider) {
	$routeProvider.when('/',{
		templateUrl: 'views/main.html',
		controller: 'portfolioController'
	}).when('/about',{
		templateUrl: 'views/about.html',
		controller: 'portfolioController'
	}).otherwise({
		redirectTo: '/'
	})
})