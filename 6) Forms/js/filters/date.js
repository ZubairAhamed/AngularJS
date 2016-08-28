(function(angular) {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error
	
	// Follow the below line to define a custom filter.
	// Note that there are no square brackets
	// Based on the input, format the string/character/number/etc and return it back to the template
	angular.module('myApp')
			.filter('cleanDate', () => {
				return (input) => {
					let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
					
					return (monthNames[input.getMonth()] + ' ' + input.getDate() + ', ' + input.getFullYear());					
				}
			});
})(window.angular);