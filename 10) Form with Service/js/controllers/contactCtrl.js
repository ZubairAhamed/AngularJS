(function(angular) {
	'use strict';
	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error
	
	// Follow the below line to define a controller.
	// Note that there are no square brackets
	// Inject all the dependencies in the 2nd argument
	angular.module('myApp')
			.controller('contactCtrl', function($scope) {
				// A $scope is an object that has a lifetime within that controller
				// Always have a function in the directive that calls the function in the controller
				// Arguments must be passed via json object
				// Mind the key and the value. It is just like any other json object
				$scope.saveQuery = (queryDetails) => {
					$scope.contactSubmit({submissionDetails: queryDetails});
				};
			});
})(window.angular);