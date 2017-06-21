## description
You can manage navigation by setting values of focus model properties to required values. Also when you use keyboard-navigation/keyboard-selection commands navigation & focus models are changed, when you click on cell navigation & focus models are changed too.

Navigation works when grid is focused only. You can set q-grid:autofocus directive to q-grid element and then focus will be set to grid on page load. Row and column indexes will be set to 0.

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
	  <td>columnIndex</td>
	  <td><code>number</code></td>
	  <td>Current column index, by default -1
	  </td>
	</tr>
</tbody>
</table>
