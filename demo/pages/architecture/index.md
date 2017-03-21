## description
The core unit of the grid is model. The model is a storage of the grid state. Any data, template, settings manipulations go through the model. All other units have only one aim - to render model state.

## model concepts
* angry contract - there is only one way to get/set state of the particular model
* immutability - to update the model state you should create a new reference 
```javascript
// works
model.data({rows: rows.concat(newRow)});
// not works
const rows = model.data().rows;
rows.push(newRow);
```
* event driven - every model has an appropriate event and you have access to it, just use modelName + 'Changed'
```javascript
model.dataChanged.on(e => {});
```
* one level hierarchy - we are trying to keep grid model as simple as possible 

## event attributes
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
	  <td>emit</td>
	  <td><code>function(e)</code></td>
	  <td>Dispatches an event notifying the registered listeners</td>
	</tr>
	<tr>
	  <td>on</td>
	  <td><code>function(function(e))</code></td>
	  <td>Listens on events of a given model. The event listener function format is <code>function(event)</code>. The event object passed into the listener has the following attributes:
	  <ul>
	  	<li><code>hasChanges</code> - <code>function(key)</code> allows to check if the model property is in change set</li>
	  	<li><code>changes</code> - object with 2 properties newValue and oldValue that are filled with old/new values of the appropriate model</li>
	  	<li><code>state</code> - current state of the model</li>
	  	<li><code>tag</code> - some user additional information that was passed by user on model modification(generally is used by core components)</li>
	  	<li><code>source</code> - source of the event trigger, by default is 'emit'</li>
	  </ul>
	  </td>
	</tr>	
	<tr>
	  <td>watch</td>
	  <td><code>function(function(e))</td>
	  <td>Listens on events of a given model. The event listener function format is <code>function(event)</code>. <b>It will be triggered on registration if there already were some changes in the model</b>. The event object passed into the listener has the following attributes:
	  <ul>
	  	<li><code>hasChanges</code> - <code>function(key)</code> allows to check if the model property is in change set</li>
	  	<li><code>changes</code> - object with 2 properties newValue and oldValue that are filled with old/new values of the appropriate model</li>
	  	<li><code>state</code> - current state of the model</li>
	  	<li><code>tag</code> - some user additional information that was passed by user on model modification(generally is used by core components)</li>
	  	<li><code>source</code> - source of the event trigger, by default is 'emit'</li>
	  </ul>
	  </td>
	</tr>			
</tbody>
</table>

## model dependency diagram
![model dependency diagram](https://github.com/qgrid/ng/blob/master/docs/architecture.png?raw=true)