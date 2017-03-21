## description
Pipes are assembled to the units - generic lists of useful pipes. They are exist only for simplifying the assembling of a pipeline.  

## examples
Everything is on server side
```javascript
Controller.$inject = ['qgrid'];
function Controller(qgrid){
   var gridModel = qgrid.model();
   var fetch = (data, context, next) => {
      $http.get('/path/to/data', gridModel.sort().by, gridModel.filter().by, gridModel.pagination().current)
         .then(response => {
            next(response.data);
         });
   };
	
   gridModel.data({
      pipe: [fetch].concat(qgrid.pipeUnit.view)
   });
}
```

## predefined pipe units
<table class="attributes">
<thead>
	<tr>
		<th>Parameter</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
</thead>
<tbody>
	<tr>
	  <td>default</td>
	  <td><code>array</code></td>
	  <td>Contains ordered set of pipes that grid uses by default. It provides all major grid features like sorting, pagination etc. for client side
	  	<ul>
	  		<li>Pipe.data</li>
      	<li>Pipe.filter</li>
      	<li>Pipe.sort</li>
      	<li>Pipe.pagination</li>
      	<li>Pipe.memo</li>
      	<li>Pipe.group</li>
      	<li>Pipe.pivot</li>
      	<li>Pipe.column</li>
      	<li>Pipe.view</li>
      </ul>
	  </td>
	</tr>	
	<tr>
	  <td>column</td>
	  <td><code>array</code></td>
	  <td>Contains 3 pipes that are used when only column view should be changed(for instance, when user drag and drop columns)	
	  	<ul>
	  		<li>Build data argument for the Pipe.column</li>      	
      	<li>Pipe.column</li>
      	<li>Update column property of the view model</li>
      </ul>
	  </td>
	</tr>	
	<tr>
	  <td>view</td>
	  <td><code>array</code></td>
	  <td>Contains pipes that are responsible for grid view update, useful when all grid features are handled by server side
	  	<ul>
	  		<li>Pipe.data</li>
      	<li>Pipe.memo</li>
      	<li>Pipe.column</li>
      	<li>Pipe.view</li>
      </ul>
	  </td>
	</tr>	
</tbody>
</table>