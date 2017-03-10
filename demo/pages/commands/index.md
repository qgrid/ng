## description
We use command pattern in lots of places of the grid, not only for editing. The command pattern encapsulates interface actions into reusable objects, which separates logic for executing an action from concrete objects into its own testable unit. The command has a public execute method that executes the action if canExecute is true. If canExecute is implemented it should be called explicitly by the command user.

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
	  <td>canExecute(arg)</td>
	  <td><code>function</code></td>
	  <td>Should return true if command can be invoked otherwise false</td>
	</tr>
	<tr>
	  <td>execute(arg)</td>
	  <td><code>function</code></td>
	  <td>Invoke command</td>
	</tr>
	<tr>
	  <td>shortcut</td>
	  <td><code>string</code></td>
	  <td>Indicates keyboard shortcut for command invoking (e.g. <code>'ctrl+a'</code>)</td>
	</tr>
</tbody>
</table>




