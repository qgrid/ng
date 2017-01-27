# qgrid checkable row
## descrition
Checkable rows is just a one of the selection modes we offer to user.

Here is a list of features we should support:
* Extra column with checkboxes for each row
* Select all checkbox in the header of the column
* Select all checkbox supports indeterminate state
* Selected items should be bound to `selection`
* Column and header should be templatable

## markup
```html
<q-grid rows="data"
        selection="selections"
        selection-mode="check">
	<q-grid:selection>
			<q-grid:template for="all-check">
				<input type="checkbox" q-grid:indeterminate="$selection.indeterminate()" 
					ng-checked="$selection.state()" 
					ng-click="$selection.toggleAll()"/>
			</q-grid:template>
			<q-grid:template for="item-check">
				<input type="checkbox" 
					ng-checked="$selection.state($row)" 
					ng-click="$selection.toggle($row)"/>
			</q-grid:template>
	</q-grid:selection>
</q-grid>
```
## script
```javascript
Controller.$inject = ['$http', '$log'];
export default function Controller($http, $log) {
	const ctrl = this;

	this.selectionMode = 'check';
	
	this.selectionChanged = function (e) {
		$log.log(`qgrid.demo: selection changed ${e.state.items.length} on ${e.state.mode} mode`);
	};

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
			ctrl.selection = response.data.slice(0, 4);
		});
}
```
## references
* [https://github.com/klumba12/groupbox](https://github.com/klumba12/groupbox)
