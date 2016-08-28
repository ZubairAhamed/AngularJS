(function(angular) {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error
	
	// Follow the below line to define a controller.
	// Note that there are no square brackets
	// Inject all the dependencies in the 2nd argument
	angular.module('myApp')
			.controller('aboutController', function($scope, crud) {
				// A $scope is an object that has a lifetime within that controller
				$scope.printHello = 'Hello About!';

				// Call a method getCustomers in the crud service
				crud.getCustomers().then((response) => {
					// This block is the success block
					// Assign the returned data to the scope variable
					$scope.customers = response.data.records;
				});
			});
})(window.angular);