## description
Visibility model and plugin is created to manage the visibility of grid components and plugins

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
	  <td>head</td>
	  <td><code>bool</code></td>
	  <td>Show/hide grid header	  
	  </td>
	</tr>	
	<tr>
	  <td>foot</td>
	  <td><code>bool</code></td>
	  <td>Show/hide grid footer	  
	  </td>
	</tr>	
	<tr>
	  <td>body</td>
	  <td><code>bool</code></td>
	  <td>Show/hide grid body	  
	  </td>
	</tr>
	<tr>
	  <td>toolbar</td>
	  <td><code>object</code></td>
	  <td>Manage toolbar visibility:
	  	  <ul>
	  	  	<li><code>top</code> - Show/hide top toolbar</li>
	  	  	<li><code>right</code> - Show/hide right toolbar</li>
	  	  	<li><code>bottom</code> - Show/hide bottom toolbar</li>
	  	  	<li><code>left</code> - Show/hide left toolbar</li>
	  	  </ul>
	  </td>
	</tr>	
	<tr>
	  <td>plugin</td>
	  <td><code>object</code></td>
	  <td>When plugin is added to the grid scope, <code>visibility.plugin</code> model is automatically filled by plugin key, 
	  so the visibility of the plugin can be manipulated throught the <code>visibility.plugin</code> property 	  
	  </td>
	</tr>			
</tbody>
</table>
