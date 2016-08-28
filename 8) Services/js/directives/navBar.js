(function(angular) {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error
	
	// Follow the below line to define a custom directive.
	// Note that there are no square brackets
	// "nav-bar" in html will be read as "navBar" in directive definition
	// restrict: 'E' means that it is an element directive
	angular.module('myApp')
			.directive('navBar', () => {
				return {
					restrict: 'E',
					templateUrl: './views/navBar.html'
				}
			});
})(window.angular);