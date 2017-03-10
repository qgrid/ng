## description
API for the grid configuration and management, grid service can be injected to your ng-controller. Used when need to extend grid configuration possibilities.
```javascript
Controller.$inject = ['qgrid'];
function Controller(qgrid){
	this.model = qgrid.model(); // $ctrl.model
	const service = qgrid.service(model);
}
```
```html
<q-grid model="$ctrl.model"></q-grid>
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
	  <td>model</td>
	  <td><code>function()</code></td>
	  <td>Factory function to instantiate new grid model that can be bind to the grid if you need more control on grid behavior
	  </td>
	</tr>	
	<tr>
	  <td>service</td>
	  <td><code>function(model)</code></td>
	  <td>Service contains some help functions that extends possibilities to use grid outside:
	  	  <ul>
	  	  	<li><code>invalidate()</code> - starts pipeline and refreshes data in the grid</li>
	  	  </ul>
	  </td>
	</tr>	
	<tr>
	  <td>pipe</td>
	  <td><code>object</code></td>
	  <td>Set of usefull pipes</td>
	</tr>	
</tbody>
</table>



