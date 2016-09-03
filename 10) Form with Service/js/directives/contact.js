(function(angular) {
	'use strict';
	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error
	
	// Follow the below line to define a custom directive.
	// Note that there are no square brackets
	// "contact-panel" in html will be read as "contactPanel" in directive definition
	// restrict: 'E' means that it is an element directive
	angular.module('myApp')
			.directive('contactPanel', () => {
				// '=' means 2 way binding
				// '&' is used to refer a function
				// Any page that has a javascript operation must have a controller
				return {
					restrict: 'E',
					templateUrl: './views/contactPanel.html',
					scope: {
						successStatement: '=',
						contactSubmit: '&'
					},
					controller: 'contactCtrl'
				}
			});
})(window.angular);