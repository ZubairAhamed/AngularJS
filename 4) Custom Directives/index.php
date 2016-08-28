
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Angular Application</title>
	<!-- Declare the basic meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="This is an angular application">
	<meta name="keywords" content="angular, routing">
	<meta name="author" content="Besant Tech">
	<!-- Refer the library scripts -->
	<!-- Refer the angular library -->
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
	<!-- Refer the angular ui router library -->
	<script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.8/angular-ui-router.min.js"></script>
	<!-- Refer the ui.bootstrap library -->
  	<script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.1.3/ui-bootstrap.min.js"></script>
  	<!-- Refer the styles -->
  	<!-- Refer the ui.bootstrap css -->
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
</head>
<body>
	<!-- Initialize the angular application using ng-app -->
	<!-- Any attribute that starts with ng- is an angular built-in directive -->
	<div ng-app="myApp">
		<!-- Use bootstrap classes for styling-->
		<div class="container-fluid">
			<nav-bar></nav-bar>
		</div>
		<div class="container-fluid">
			<!-- Create a div where the files will be displayed -->
			<div ui-view></div>
		</div>
	</div>
	<!-- Refer the user scripts -->
	<!-- Refer the angular modules scripts -->
	<script src="./js/modules/myApp.js"></script>
	<!-- Refer the angular controllers scripts -->
	<script src="./js/controllers/homeController.js"></script>
	<script src="./js/controllers/aboutController.js"></script>
	<!-- Refer the angular directives scripts -->
	<script src="./js/directives/navBar.js"></script>
</body>
</html>