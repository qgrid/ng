# description
The grid data processing is inspired by middleware pattern. Every pipe in queue gets data from previous one, handles it, and passes to the next pipe. By default the whole pipeline is triggered when some pipeline-related property is changed (e.g. filters, order etc.). User also has an ability to trigger data refresh manually.

## usefull pipes
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
	  <td><code>Pipe</code></td>
	  <td>If the first Returns model.data().rows	
	  </td>
	</tr>	
	<tr>
	  <td>filter</td>
	  <td><code>Pipe</code></td>
	  <td>Filters data from <code>filter.by</code> model	
	  </td>
	</tr>	
	<tr>
	  <td>sort</td>
	  <td><code>Pipe</code></td>
	  <td>Sorts data from <code>sort.by</code> model	
	  </td>
	</tr>	
	<tr>
	  <td>pagination</td>
	  <td><code>Pipe</code></td>
	  <td>Trim data to appropriate page	
	  </td>
	</tr>	
	<tr>
	  <td>memo</td>
	  <td><code>Pipe</code></td>
	  <td>converts data to <code>{ rows: [], pivot: {}, nodes: []}`</code> structure (that is aprox the grid data view interface)	
	  </td>
	</tr>	
	<tr>
	  <td>group</td>
	  <td><code>Pipe</code></td>
	  <td>Converts rows to node from <code>group.by</code> model	
	  </td>
	</tr>	
	<tr>
	  <td>pivot</td>
	  <td><code>Pipe</code></td>
	  <td>Adds pivoted data from <code>pivot.by</code> model 	
	  </td>
	</tr>	
	<tr>
	  <td>column</td>
	  <td><code>Pipe</code></td>
	  <td>Generates nessesary column set to satisfy user input	
	  </td>
	</tr>	
	<tr>
	  <td>view</td>
	  <td><code>Pipe</code></td>
	  <td>Writes all data to the view, which is directly coupled with the grid markup	
	  </td>
	</tr>	
</tbody>
</table>