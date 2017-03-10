## description
The grid includes a comprehensive set of appearance and behavior customization options for individual grid columns. One of the supported options is custom cell templates.

## cell template environment
<table class="attributes">
<thead>
	<tr>
		<th>Key</th>
		<th>Description</th>
	</tr>
</thead>
<tbody>
	<tr>
	  <td>$cell</td>
	  <td>Expose properties for the cell rendering:
	  	<ul class="attributes">
	  		<li>
	  			<code>row</code> - data row instance for which cell template is rendered 
	  		</li>
	  		<li>
	  			<code>column</code> - column instance for which cell template is rendered
	  		</li>
	  		<li>
	  			<code>rowIndex</code> - display rowIndex of the row
	  		</li>
	  		<li>
	  			<code>columnIndex</code> - display columnIndex of the row
	  		</li>
	  		<li>
	  			<code>value</code> - value to display in the cell 
	  		</li>
	  	</ui>
	  </td>
	</tr>
	<tr>
	  <td>$head</td>
	  <td>Expose properties for the head rendering:
	  	<ul class="attributes">
		  	<li>
		  	<code>rows</code> - column rows for header template, several rows can be when pivoting is on, or when multi-row header is displayed
		  	</li>
		</ul>
	  </td>
	</tr>
	<tr>
	  <td>$body</td>
	  <td>Expose functions and properties for the body cell rendering:
	  	<ul class="attributes">
		  	<li>
		  	<code>rows</code> - collection of rows or nodes(if grouping is on)
		  	</li>
		  	<li>
		  	<code>columnns</code> - one dimension collection of columns that are rendered in the body
		  	</li>
     	  	<li>
     		  	<code>value(row, column)</code> - interlally used in the <code>$cell.value</code> to show value in template
     		</li>
     		<li>
           	<code>valueFactory(column)</code> - returns value function for the appropriate column
         </li>
     	</ul>
     	</td>
	</tr>
	<tr>
	  <td>$foot</td>
	  <td>Expose functions and properties for the footer rendering:
	  	<ul class="attributes">
     	  	<li>
     		  	<code>value(column)</code> - value to display in the summary footer for appropriate column
     		</li>
     		<li>
           	<code>count</code> - number of footer rows, applies when several footer templates are defined for a one column
         </li>
    	</ul>	  
     </td>
	</tr>
	<tr>
	  <td>$layout</td>
	  <td>Contains logic for syncronization column widthes and scrolls between header, footer and body:
		<ul class="attributes">
     	  	<li>
     		  	<code>form</code> - dictionary of column widthes (column key: width number in pixels)
     		</li>
    	</ul>	  	  
	  </td>
	</tr>
	<tr>
	  <td>$nav</td>
	  <td>Contains commands that allows to go throught the cells net:
		<ul class="attributes">
     	  	<li>
     		  	<code>blur.execute(rowIndex, columnIndex)</code> - deactivate cell at <code>[rowIndex, columnIndex]</code> coordinates
     		</li>
     	  	<li>
     		  	<code>focus.execute(rowIndex, columnIndex)</code> - mark cell at <code>[rowIndex, columnIndex]</code> coordinates as active  
     		</li>
     	  	<li>
     		  	<code>scrollTo.execute(rowIndex, columnIndex)</code> - scroll to cell at <code>[rowIndex, columnIndex]</code> coordinates
     		</li>			     		
    	</ul>	  	  
	  </td>
	</tr>
	<tr>
	  <td>$highlight</td>
	  <td>Contains commands that allows to apply grid parts highlighting:
		<ul class="attributes">
     	  	<li>
     		  	<code>column.execute(column, state)</code> - dependeing on boolean <code>state</code> highlight or unhighlight appropriate <code>column</code>
     		</li>     	
    	</ul>	  
	  </td>
	</tr>
	<tr>
	  <td>$selection</td>
	  <td>Contains commands that are parts of the selection behavior of the grid:
		<ul class="attributes">
     	  	<li>
     		  	<code>toggleRow.execute(row, ?state)</code> - add/remove row to selection
     		</li>     	
     	  	<li>
     		  	<code>toggleColumn.execute(column, ?state)</code> - add/remove column to selection
     		</li>     	
     	  	<li>
     		  	<code>toggleCell.execute(cell, ?state)</code> - add/remove cell to selection
     		</li>     	     	   	
     	  	<li>
     		  	<code>selectAll.execute()</code> - select all rows/columns/cells depending on selection unit
     		</li>     	
     	  	<li>
     		  	<code>state(item)</code> - get/set selection state of the row/column/cell depending on selection unit
     		</li>     	
     	  	<li>
     		  	<code>isIdenterminate(item)</code> - this determines when the selection does include not all but more then zero items
     		</li>     	
    	</ul>	  
	  </td>
	</tr>
	<tr>
	  <td>$group</td>
	  <td>Contains commands and functions for the rendering group column:
		<ul class="attributes">
     	  	<li>
     		  	<code>count(node)</code> - returns number of children for the node
     		</li>   
     	  	<li>
     		  	<code>status(node)</code> - returns true if node is expanded otherwise false
     		</li>   
     	  	<li>
     		  	<code>offset(node)</code> - returns offset from the left for the node
     		</li>   
     	  	<li>
     		  	<code>value(node)</code> - returns value that should be renered for the group cell
     		</li>   
     	  	<li>
     		  	<code>toggleStatus.execute(node)</code> - collapse/expand node
     		</li>   
      </ul>
	  </td>
	</tr>
	<tr>
	  <td>$pivot</td>
	  <td>Contains properties and functions for the rendreing pivot cells:
		<ul class="attributes">
     	  	<li>
     		  	<code>rows</code> - returns row collection for pivoted data
     		</li>   
     	  	<li>
     		  	<code>value(row, column)</code> - returns value that should be renered for the pivot cell
     		</li>   
	   </ul>
	  </td>
	</tr>
	<tr>
	  <td>$sort</td>
	  <td>Contains commands and function for the rendering column sort indicators:
		<ul class="attributes">
     	  	<li>
     		  	<code>toggle.execute(column)</code> - toggle column with key sorting between desc/asc and none 
     		</li>   
     	  	<li>
     		  	<code>direction(column)</code> - returns sort direction(desc/asc) of the column
     		</li>   
     	  	<li>
     		  	<code>order(key)</code> - returns priority index of the sort for the column
     		</li>   
	   </ul>
	  </td>
	</tr>
	<tr>
	  <td>$filter</td>
	  <td>Contains functions for the rendering column filter indicators:
		<ul class="attributes">
     	  	<li>
     		  	<code>has(column)</code> - indicates if column contains filter
     		</li>   
	   </ul>
	  </td>
	</tr>
	<tr>
	  <td>$edit</td>
	  <td><code>$edit.cell</code> property contains command and properties that provides possibility of edit behavior:
		<ul class="attributes">
     	  	<li>
     		  	<code>enter.execute(cell, e)</code> - activates edit mode for the cell
     		</li>   
     	  	<li>
     		  	<code>commit.execute(cell, e)</code> - persist new value of the cell
     		</li>   
     	  	<li>
     		  	<code>cancel.execute(cell, e)</code> - to not persist new value and exit from edit mode 
     		</li>   
     	  	<li>
     		  	<code>reset.execute(cell, e)</code> - reset edit value to the origin cell value
     		</li>   
     	  	<li>
     		  	<code>value</code> - get/set edit value, initially it equals to cell value
     		</li>   
	   </ul>	  
	  </td>
	</tr>
</tbody>
</table>

## cell template scope diagram
![cell template environment](https://github.com/qgrid/ng/blob/master/docs/view.png?raw=true)