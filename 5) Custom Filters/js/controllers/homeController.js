(function(angular) {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error
	
	// Follow the below line to define a controller.
	// Note that there are no square brackets
	// Inject all the dependencies in the 2nd argument
	angular.module('myApp')
			.controller('homeController', function($scope) {
				// A $scope is an object that has a lifetime within that controller
				$scope.printHello = 'Hello Home!';

				// Assign current date into a scope variable and print on the template
				$scope.currentDate = new Date();
			});
})(window.angular);