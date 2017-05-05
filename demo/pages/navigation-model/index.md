## description
You can manage navigation by setting values of navigation model properties to required values. Also when you use keyboard-navigation/keyboard-selection commands navigation model is changed, when you click on cell navigation model is changed too.

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
	  <td>rowIndex</td>
	  <td><code>number</code></td>
	  <td>Current row index, by default -1
	  </td>
	</tr>
	<tr>
	  <td>row</td>
	  <td><code>object</code></td>
	  <td>Current row, by default null
	  </td>
	</tr>
	<tr>
	  <td>columnIndex</td>
	  <td><code>number</code></td>
	  <td>Current column index, by default -1
	  </td>
	</tr>
	<tr>
	  <td>column</td>
	  <td><code>object</code></td>
	  <td>Current column, by default null
	  </td>
	</tr>
	<tr>
	  <td>active</td>
	  <td><code>object</code></td>
	  <td>Expose objects that are in focus now:
	  	<ul>
	  		<li><code>cell</code> - contains focused $cell object</li>
	  	</ul>
	  </td>
	</tr>
</tbody>
</table>
