<div class="container-fluid">
    <strong>{{rootScopeVar}}</strong>
	<form novalidate 
		  class="simple-form"
		  name="contactForm">
		<div class="form-group">
			<label for="name">Name:</label>
			<!-- The Name field is made as a required field using 'required' attribute -->
			<!-- Only 'name' attribute can be used for validation -->
			<input type="text" 
				   class="form-control" 
				   name="name" 
				   ng-model="queryDetails.name"
				   required>
		</div>
		<div class="form-group">
			<label for="name">Message:</label>
			<!-- The Name field is made as a required field using 'required' attribute -->
			<!-- Only 'name' attribute can be used for validation -->
			<textarea class="form-control" 
					  name="message" 
				   	  ng-model="queryDetails.message"
				   	  required>
			</textarea>
		</div>
		<div class="form-group">
			<!-- Call printUserDetails function and pass user object as argument -->
			<button type="button" 
					class="btn btn-default"
					ng-click="saveQuery(queryDetails)">
				Submit
			</button>
		</div>
	</form>
	<h1>{{successStatement}}</h1>
</div>