(function(angular) {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error
	
	// Follow the below line to define a service.
	// Note that there are no square brackets
	angular.module('myApp')
			// Inject $http to access a third party website
			.service('crud', function($http) {
				// The below function is the custom service method
			    this.getCustomers = () => {
			        return $http({
		              method: 'GET',
		              url: 'http://www.w3schools.com/angular/customers.php'
		            });
			    }
			});
})(window.angular);