## description
REST plugin which allows to bind grid to REST-ful data source via HTTP.

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
	  <td>url</td>
	  <td><code>string</code></td>
	  <td>URL to request data from. Required.
	  </td>
	</tr>
	<tr>
   	<td>method</td>
   	<td><code>GET|POST</code></td>
   	<td>HTTP-method to send to server. Default - GET.
   	</td>
   </tr>
	<tr>
		<td>serialize</td>
		<td><code>Function</code></td>
		<td>A function which accepts grid model and returns serialized object.
			By default following format is used for GET requests:
<pre>
{
	filter: 'lastName=in:Doe,Jones;firstName=in:John,Harry',
	order: '+firstName,-lastName',
	skip: 100,
	take: 50
}
</pre>
		</td>
	</tr>
</tbody>
</table>
