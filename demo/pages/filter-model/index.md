## description
You can manage filtering of grid and set custom filters. Filter model defines how the data will be processed.

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
	  <td>by</td>
	  <td><code>object</code></td>
	  <td>Column keys and values for filtering
	  </td>
	</tr>
	<tr>
	  <td>match</td>
	  <td><code>function</code></td>
	  <td>A predicate function can be used to write arbitrary filters
	  </td>
	</tr>
	<tr>
		<td>fetch</td>
   	<td><code>function</code></td>
   	<td>A can be used to fetch data for column filter
   	</td>
   </tr>
   <tr>
		<td>unit</td>
		<td><code>enum</code></td>
		<td>
			<ul>
				<li><code>default</code></li>
				<li><code>row</code> - turn on <a href="#!/filter-row">filter row</a> (in the grid header)</li>
			</ul>
		</td>
	</tr>
</tbody>
</table>