angular.module('portfolio')
.config(function ($routeProvider) {
	$routeProvider.when('/',{
		templateUrl: 'views/main.html',
		controller: 'portfolioController'
	}).when('/about',{
		templateUrl: 'views/about.html',
		controller: 'portfolioController'
	}).when('/projects',{
		templateUrl: 'views/projects.html',
		controller: 'portfolioController'
	}).when('/contact',{
		templateUrl: 'views/contact.html',
		controller: 'portfolioController'
	}).otherwise({
		redirectTo: '/'
	})
})