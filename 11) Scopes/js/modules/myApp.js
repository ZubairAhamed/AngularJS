(function(angular) {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error
	
	// Follow the below line to define an angular application; The packages included within [] are the dependencies
	angular.module('myApp', ['ui.router', 'ui.bootstrap'])
			.config(($stateProvider, $urlRouterProvider) => {
				// Set a default url if the website is loaded for the first time
				$urlRouterProvider.otherwise('/home');

				// The first argument inside state should be the same as the value in ui-sref;
				// eg: ui-sref="home" ALSO .state('home')
				// url is the path you see on the browser's address bar
				// templateUrl is the path to file
				// controller is the name of the controller used for that templateUrl
				$stateProvider
					.state('home', {
			            url: '/home',
			            templateUrl: './views/home.html',
			            controller: 'homeController'
			        })
			        .state('about', {
			            url: '/about',
			            templateUrl: './views/about.html',
			            controller: 'aboutController'
			        })
			        .state('contact', {
			            url: '/contact',
			            templateUrl: './views/contact.php',
			            controller: 'contactController'
			        });
			});
})(window.angular);