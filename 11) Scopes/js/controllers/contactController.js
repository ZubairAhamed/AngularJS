(function(angular) {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error
	
	// Follow the below line to define a controller.
	// Note that there are no square brackets
	// Inject all the dependencies in the 2nd argument
	angular.module('myApp')
			// It is a good practice to have Services name starting with a capital letter
			.controller('contactController', function($rootScope, $scope, Contact) {
				// A $scope is an object that has a lifetime within that controller
				$scope.contactSubmit = (submissionDetails) => {
					// Call a method submitQuery in the Contact service
					// Note that the validation should happen here before sending to the Service
					// Mind the object that is passed to the service 
					Contact.submitQuery(submissionDetails)
								.then((response) => {
									// This block is the success block
									// Assign the returned data to the scope variable
									$scope.successStatement = 'New Record Created with Id='+response.data.id;
					});
				};

				// $rootScope is like a global variable
				$rootScope.superName = 'AngularApp';
			});
})(window.angular);