(function(angular) {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error
	
	// Follow the below line to define a controller.
	// Note that there are no square brackets
	// Inject all the dependencies in the 2nd argument
	angular.module('myApp')
			// Inject the service in the controller's dependencies
			.controller('homeController', function($scope, facebook) {
				// A $scope is an object that has a lifetime within that controller
				$scope.printHello = 'Hello Home!';

				// Assign current date into a scope variable and print on the template
				$scope.currentDate = new Date();

				// Initialize the variable
				$scope.isPrint = false;
				// Initialize the object
				$scope.user = {};

				// We only need to set isPrint to true
				// With the help of 2-way binding, whenever we type on the ng-model, the values automatically gets binded and prints on the {{}}
				$scope.printUserDetails = (user) => {
					$scope.isPrint = true;
				};

				// Call a method pagePhotos in the facebook service
				facebook.pagePhotos().then((response) => {
					// This block is the success block
					// Assign the returned data to the scope variable
					$scope.pagePhotos = response.data.data;
				});
			});
})(window.angular);