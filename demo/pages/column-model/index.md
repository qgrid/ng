## description
A grid column is a visual representation of a set of data values that have a particular type. This page covers the main features of grid columns and the ways they can be configured.  

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
	  <td>type</td>
	  <td><code>string</code></td>
	  <td>You can always make your own type and define appropriate templates for that type. However, there are some predefined types:
		<ul>
	  		<li>array</li>
	  		<li>bool</li>
	  		<li>date</li>
	  		<li>email</li>
	  		<li>file</li>
	  		<li>group</li>
	  		<li>image</li>
	  		<li>number</li>
	  		<li>pad</li>
	  		<li>password</li>
	  		<li>pivot</li>
	  		<li>reference</li>
	  		<li>row-indicator</li>
	  		<li>row-number</li>
	  		<li>select</li>
	  		<li>text</li>
	  		<li>time</li>
	  		<li>url</li>
	   </ul>
	  </td>
	</tr>
	<tr>
		<td>key</td>
		<td><code>string</code></td>
		<td>Defines <strong>unique</strong> identifier for the column. This is essential property that is used not only in templates but also by aggregation, sorting, grouping, pivoting and positioning of columns.</td>
	</tr>
	<tr>
   	<td>title</td>
   	<td><code>string</code></td>
   	<td>Defines header text of the column</td>
   </tr>
   <tr>
     	<td>value</td>
     	<td><code>function(row, value)</code></td>
     	<td>If specified, function should return value that will be shown in the column. If edit mode is on - the second argument is a new value from user input</td>
   </tr>
   <tr>
     	<td>width</td>
     	<td><code>number</code>|<code>string</code></td>
     	<td>Defines the initial width of the column. Supported values:
     	 	<ul>
     	 		<li>
     	 			number - width in pixels(width=120)
     	 		</li>
     	 		<li>
               string - width in percnets(width='20%')
            </li>
     	 	</ul>
     	</td>
   </tr>    
	<tr>
     	<td>minWidth</td>
     	<td><code>number</code></td>
     	<td>Defines a minimum width of the column in pixels</td>
   </tr>
	<tr>
     	<td>maxWidth</td>
     	<td><code>number</code></td>
     	<td>Defines a maximum width of the column in pixels</td>
   </tr>    
	<tr>
     	<td>canEdit</td>
     	<td><code>bool</code></td>
     	<td>Indicates if user can edit the column</td>
   </tr>    
	<tr>
     	<td>canResize</td>
     	<td><code>bool</code></td>
     	<td>Indicates if user can resize the column</td>
   </tr>    
	<tr>
     	<td>canSort</td>
     	<td><code>bool</code></td>
     	<td>Indicates if user can apply sorting to the column</td>
   </tr>    
	<tr>
     	<td>canMove</td>
     	<td><code>bool</code></td>
     	<td>Indicates if user can put the column to another place</td>
   </tr>    
	<tr>
     	<td>isVisible</td>
     	<td><code>bool</code></td>
     	<td>Indicates if column is visible</td>
   </tr>    
   <tr>
     	<td>isDefault</td>
     	<td><code>bool</code></td>
     	<td>Says that column is in default set of visible columns for particular grid, useful for reseting visibility</td>
    </tr>
	<tr>
     	<td>index</td>
     	<td><code>number</code></td>
     	<td>Defines position of the column</td>
   </tr>           
	<tr>
     	<td>aggregation</td>
     	<td><code>string</code></td>
     	<td>Defines aggregation for the column. Predefined aggregations:
     		<ul>
     			<li>avg</li>
     			<li>count</li>
     			<li>join</li>
     			<li>first</li>
     			<li>last</li>
     			<li>max</li>
     			<li>min</li>
     			<li>minMax</li>
     			<li>sum</li>
     		</ul>
     	</td>
   </tr>   
	<tr>
		<td>aggregationOptions</td>
		<td><code>object</code></td>
		<td>Setup options for the column aggregation.
			<ul>
				<li>distinct - 'false' by default</li>
				<li>separator - '; ' by default</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>editor</td>
		<td><code>string</code></td>
		<td>Defines editor for the column. Predefined editors:
			<ul>
				<li>dropdown</li>
				<li>autocomplete</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>editorOptions</td>
		<td><code>object</code></td>
		<td>Setup options for the column editor.
			<ul>
				<li>trigger - 'click' by default</li>
				<li>fetch - returns column value by default</li>
			</ul>
			<a href="#!/editors">More details</a>
		</td>
	</tr>
</tbody>
</table>