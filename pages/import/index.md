## description
The grid allows you to import data in different formats.

## supported formats
csv, json, xlsx, xml

Make work import from xlsx by installing http://github.com/SheetJS/js-xlsx library

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
        <td>Options</td>
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
        <td>head</td>
        <td><code>string</code></td>
        <td>
        <b>Only for xlsx, csv</b><br><br>
        Takes one of three values : <code>alpha</code>, <code>numeric</code> or <code>default</code>. This option is applied to choose the type of title to import into the grid.
        <br><br><code>alpha</code> - imported columns titles will be shown in alphanumeric format;
        <br><br><code>numeric</code> - imported columns titles will be shown in numeric format<br><br>
        If header option isn't set or it's smth else - then first row of the imported document will be considered as column titles.</td>
	</tr>
</tbody>
</table>