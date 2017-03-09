## description
The grid allows you to display data summaries within its footer. There are several predefined summaries called aggregations.

## predefined aggregations
<table class="attributes">
<thead>
	<tr>
		<th>Key</th>
		<th>Description</th>
	</tr>
</thead>
<tbody>
	<tr>
	  <td>first</td>
	  <td>Returns first item from rows collection</td>
	</tr>
	<tr>
  	  <td>last</td>
  	  <td>Returns last item from rows collection</td>
  	</tr>
	<tr>
  	  <td>max</td>
  	  <td>Return maximum value item from rows collection</td>
  	</tr>
	<tr>
  	  <td>min</td>
  	  <td>Return minimim value item from rows collection</td>
  	</tr>
	<tr>
  	  <td>minMax</td>
  	  <td>Return array <code>[min, max]</code> from rows collection</td>
  	</tr>
	<tr>
  	  <td>avg</td>
  	  <td>Return average value from rows collection</td>
  	</tr>
	<tr>
  	  <td>sum</td>
  	  <td>Return sum of value items from rows collection</td>
  	</tr>
	<tr>
  	  <td>join</td>
  	  <td>Return one concatenated string that is join with <code>'; '</code> by default from rows collection</td>
  	</tr>
	<tr>
  	  <td>count</td>
  	  <td>Return number of rows</td>
  	</tr>
</tbody>
</table>

## aggregation options
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
	  <td>distinct</td>
	  <td><code>bool</code></td>
	  <td>Default value is <code>false</code>. If true aggregation applies only for unique values</td>
	</tr>
	<tr>
	  <td>separator</td>
	  <td><code>string</code></td>
	  <td>Default value is <code>'; '</code>. Used by <code>join</code> aggregation</td>
	</tr>
</tbody>
</table>