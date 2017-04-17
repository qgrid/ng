# description
User can assign a predefined editor to any type column. The editor will be shown in the edit mode for this column instead of default column edit template. Behaviour of the editor based on editor options which should be defined by user in the <a href="#!/column-model">column model</a>.

## editor options
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
	  <td>trigger</td>
	  <td><code>string</code></td>
	  <td>
	    Вefines how switch to the edit mode. 'click' by default
	    <ul>
	      <li>'click' - react to click on the cell</li>
	      <li>'custom' - react to click on the custom control, e.g. button</li>
	    </ul>
	  </td>
	</tr>	
	<tr>
	  <td>fetch</td>
	  <td><code>any</code></td>
	  <td>Вefines way to get data for the editor. It can be
	    <ul>
     	   <li>any - data itself</li>
     	   <li>function(row, deferred, args) - defines dynamic way to get data for editor. Returns:
     	   <ul>
     	     <li><code>any</code> - data directly</li>
     	     <li><code>Promise</code> - promised data</li>
     	     <li><code>undefined</code> - function should invoke resolve or reject method of the deferred object passed as second argument.</li>
     	   </ul>
     	   returns value of column by default</br>
     	   <code>[args](...Array)</code> - any additional arguments, depends on specific editor implementation
     	   </li>
     	 </ul>
	  </td>
	</tr>
</tbody>
</table>