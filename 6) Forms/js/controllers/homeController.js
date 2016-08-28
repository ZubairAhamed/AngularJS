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
				
				// Initialize the variable
				$scope.isPrint = false;
				// Initialize the object
				$scope.user = {};
				// The following is called the Array Of Objects
				$scope.cities = [
					{
						id: 1,
						name: 'Bangalore'
					},
					{
						id: 2,
						name: 'Chennai'
					},
					{
						id: 3,
						name: 'Cochin'
					},
					{
						id: 4,
						name: 'Delhi'
					},
					{
						id: 5,
						name: 'Mumbai'
					},
					{
						id: 6,
						name: 'Hyderabad'
					}
				];

				// We only need to set isPrint to true
				// With the help of 2-way binding, whenever we type on the ng-model, the values automatically gets binded and prints on the {{}}
				$scope.printUserDetails = (user) => {
					$scope.isPrint = true;
				};
			});
})(window.angular);