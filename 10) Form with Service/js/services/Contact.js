(function(angular) {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error
	
	// Follow the below line to define a service.
	// Note that there are no square brackets
	angular.module('myApp')
			// Inject $http to access a third party website
			.service('Contact', function($http) {
				// The below function is the custom service method
				// The url is a third party site that allows only one record to be posted
			    this.submitQuery = (submissionDetails) => {
			        return $http({
		              method: 'POST',
		              url: 'http://jsonplaceholder.typicode.com/posts',
		              data: {
					    title: submissionDetails.name,
					    body: submissionDetails.message,
					    userId: 999
					  }
		            });
			    }
			});
})(window.angular);