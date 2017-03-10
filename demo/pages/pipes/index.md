## description
The grid data processing is inspired by middleware pattern. Every pipe in queue gets data from previous one, handles it, and passes to the next pipe. By default the whole pipeline is triggered when some pipeline-related property is changed (e.g. filters, order etc.). User is allowed to modify pipeline. Pipe is a part of `data` model of qgrid. 

## examples
To add basic `fetch` function to pipe, you need to create a function that meets middleware signature and prepend it to default grid pipes.
```javascript
Controller.$inject = ['qgrid'];
function Controller(qgrid){
   var gridModel = qgrid.model();
   var data = gridModel.data();
   var pipes = data.pipes;
   var fetch = (data, context, next) => {
      $http.get('/path/to/data')
         .then(response => {
            next(response.data);
         });
   };
	
   gridModel.data({
      pipe: [fetch].concat(pipes)
   });
}
```

## attributes
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
	  <td>data</td>
	  <td><code>object|array</code></td>
	  <td>Middleware shared object	  
	  </td>
	</tr>
	<tr>
	  <td>context</td>
	  <td><code>object</td>
	  <td>Middleware context:
	  	<ul>
	  	 <li><code>source</code> - where changes occurred</li>
       <li><code>model</code> - grid model</li>
       <li><code>changes</code> - what was changed</li>
	  	</ul>
	  </td>
	</tr>			
	<tr>
	  <td>next</td>
	  <td><code>function(data)</td>
	  <td>Finishes current pipe and passes data to the next one	  
	  </td>
	</tr>
</tbody>
</table>
