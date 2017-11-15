## description
Validation model and plugin are created to manage the validation of grid data: cells, columns and rows

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
	  <td>for</td>
	  <td><code>string</code></td>
	  <td>Specify what type of validation do you want to use: <code>column</code>, <code>row</code> or <code>cell</code></td>
	</tr>
	<tr>
   	<td>key</td>
   	<td><code>string</code></td>
   	<td>Key of the column</td>
   </tr>
   <tr>
      <td>required</td>
      <td><code>string</code></td>
      <td>The presence of  this attribute applies the appropriate validation rule</td>
   </tr>
    <tr>
         <td>one-of</td>
         <td><code>string</code></td>
         <td>Pass here array of values and validator will choose from them</td>
      </tr>
</tbody>
</table>
