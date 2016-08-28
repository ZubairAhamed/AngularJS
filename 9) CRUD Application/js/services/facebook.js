(function(angular) {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error
	
	// Follow the below line to define a service.
	// Note that there are no square brackets
	angular.module('myApp')
			// Inject $http to access a third party website
			.service('facebook', function($http) {
				//  The following are the variables to access a facebook page
				this.pageID = "415143251841327";
				this.appKey = "1139238392777034";
				this.appSecretKey = "b799fea94e7b6d2cbe26e8674b27db72";

				// The below function is the custom service method
			    this.pagePhotos = () => {
			        return $http({
		              method: 'GET',
		              url: 'https://graph.facebook.com/'+this.pageID+'/albums?fields=name,description,likes,count,link,picture,comments&access_token='+this.appKey+'|'+this.appSecretKey
		            });
			    }
			});
})(window.angular);