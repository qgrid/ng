## description
There are situations when you would like to enable the end user to select rows or cells in the grid table, and process data from them or make calculations based on this selection. The grid supports selection by specifying its configuration

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
	  <td>unit</td>
	  <td><code>enum</code></td>
	  <td>Supported values are <code>row|column|cell</code>  
	  </td>
	</tr>	
	<tr>
	  <td>mode</td>
	  <td><code>enum</code></td>
	  <td>Supported values are <code>single|multiple|range</code>  
	  </td>
	</tr>
	<tr>
	  <td>items</td>
	  <td><code>array</code></td>
	  <td>Selected items passed throught the <code>key</code>, depend on selection unit (column, rows or <code>{row, column}</code>)  
	  </td>
	</tr>
	<tr>
	  <td>key</td>
	  <td><code>object</code></td>
	  <td>This property allows to change output of the selection
	    <ul>
			 <li><code>row</code> - map row to user defined entity</li>
			 <li><code>column</code> - map column to user defined entity </li>
	    </ul>
	  </td>
	</tr>					
	<tr>
	  <td>entries</td>
	  <td><code>array</code></td>
	  <td>Selected data items depend on selection unit (column, rows or <code>{row, column}</code>)
	    <ul>
			 <li><code>row</code> - map row to user defined entity</li>
			 <li><code>column</code> - map column to user defined entity </li>
	    </ul>
	  </td>
	</tr>					
						
</tbody>
