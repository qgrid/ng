## Description
Validation model and plugin are created to manage the validation of grid data: columns and rows
Validation is based on [LIVR](https://github.com/koorchik/js-validator-livr)

### Required attributes
<table class="attributes">
<thead>
	<tr>
		<th>Attribute</th>
		<th>Type of parameter</th>
		<th>Description</th>
	</tr>
</thead>
<tbody>
	<tr>
	  <td>for</td>
	  <td><code>string</code></td>
	  <td>Specify what type of validation do you want to use: <code>column</code> or <code>row</code></td>
	</tr>
	<tr>
   	<td>key</td>
   	<td><code>string</code></td>
   	<td>Key of the column</td>
   </tr>
</tbody>
</table>

### Optional attributes
<table class="attributes">
<thead>
	<tr>
		<th>Attribute</th>
		<th>Type of parameter</th>
		<th>Default Error</th>
		<th>Example</th>
		<th>Description</th>
	</tr>
</thead>
<tbody>
   <tr>
       <td>length-between</td>
       <td><code>string</code></td>
       <td>'TOO_LONG' or 'TOO_SHORT'</td>
       <td><code>length-between="[3, 40]"</code></td>
       <td>Pass here array of two values: minimum length and maximum length</td>
   </tr>
   <tr>
       <td>length-equal</td>
       <td><code>string</code></td>
       <td>'TOO_LONG' or 'TOO_SHORT'</td>
       <td><code>length-equal="2"</code></td>
       <td>Pass here exact length</td>
   </tr>
   <tr>
       <td>min-length</td>
       <td><code>string</code></td>
       <td>'TOO_SHORT'</td>
       <td><code>min-length="3"</code></td>
       <td>Pass here minimum length</td>
   </tr>
   <tr>
       <td>max-length</td>
       <td><code>string</code></td>
       <td>'TOO_LONG'</td>
       <td><code>max-length="10"</code></td>
       <td>Pass here maximum length</td>
   </tr>
   <tr>
       <td>one-of</td>
       <td><code>string</code></td>
       <td>'NOT_ALLOWED_VALUE'</td>
       <td><code>one-of="['male', 'female']"</code></td>
       <td>Pass here array of values and validator will choose from them</td>
   </tr>
   <tr>
       <td>positive-integer</td>
       <td><code>string</code></td>
       <td>'NOT_POSITIVE_INTEGER'</td>
       <td><code>positive-integer</code> or <code>positive-integer=""</code></td>
       <td>The presence of  this attribute applies the appropriate validation rule</td>
   </tr>
   <tr>
        <td>required</td>
        <td><code>string</code></td>
        <td>'REQUIRED'</td>
        <td><code>required</code> or <code>required=""</code></td>
        <td>The presence of  this attribute applies the appropriate validation rule</td>
   </tr>
</tbody>
</table>

