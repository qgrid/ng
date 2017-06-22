## description
The grid allows you to export data in different formats.

## supported formats
csv, json, pdf, xlsx, xml

## predefined options
<table class="attributes">
<thead>
	<tr>
		<th>Key</th>
		<th>Description</th>
	</tr>
</thead>
<tbody>
	<tr>
	  <td>type</td>
	  <td>Takes one of supported formats as a value</td>
	</tr>
	<tr>
        <td>exportOptions</td>
        <td>Takes options' object</td>
    </tr>
</tbody>
</table>

## export options
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
	  <td>structure</td>
	  <td><code>string</code></td>
	  <td>Takes one of two values : <code>plain</code> or <code>tree</code>. Default value is <code>tree</code>. This option is applied to choose the structure of output json.</td>
	</tr>
</tbody>
</table>