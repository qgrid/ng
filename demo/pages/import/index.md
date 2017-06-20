## description
The grid allows you to import data in different formats.

## supported formats
csv, json, xlsx, xml

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
        <td>importOptions</td>
        <td>Takes options object</td>
    </tr>
</tbody>
</table>

## import options
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
        <td>header</td>
        <td><code>string</code> or <code>number</code></td>
        <td>
        <b>Only for xlsx, csv</b><br><br>
        Takes one of two values : <code>'A'</code> or <code>1</code>. This option is applied to choose the type of title to import into the grid.
        <br><br><code>'A'</code> - imported columns titles will be shown in alphanumeric format;
        <br><br><code>1</code> - imported columns titles will be shown in numeric format<br><br>
        If header option doesn't set or it is smth else - then first row of the imported document will be considered as column titles.</td>
	</tr>
</tbody>
</table>