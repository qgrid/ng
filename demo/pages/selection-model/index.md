# Selection basics
Currently q-grid supports `row`, `column` and `cell` selection with `single` and `multiple` selection modes. 
To enable selection you need to specify `selection-mode` and `selection-unit` attributes within root q-grid tag.

Possible `selection-unit` values:
- `row`
- `column`
- `cell`

Possible `selection-mode` values:
- `single`
- `multiple`

You can bind an array of selected items via `selection` attribute. 

### markup
```html
<q-grid rows="$ctrl.rows"
        selection="$ctrl.selection"
        selection-mode="multiple"
        selection-unit="row">
</q-grid>
```
### script
```javascript
Controller.$inject = ['$http', '$log'];
export default function Controller($http, $log) {
	const ctrl = this;

	this.selection = [];
	this.rows = [];

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
			ctrl.selection = response.data.slice(0, 4);
		});
}
```

# Selection changed

You can subscribe to `selection-changed` event via corresponding attribute. Each time selection changes this event fires, changed attrutes and current state provided via `$event` object.

> Don't forget to specify `on:` prefix before event name! 

### markup
```html
<q-grid rows="$ctrl.rows"
        selection="$ctrl.selection"
        selection-mode="multiple"
        selection-unit="row"
        on:selection-changed="$ctrl.selectionChanged($event)">
</q-grid>
```
### script
```javascript
Controller.$inject = ['$http', '$log'];
export default function Controller($http, $log) {
	const ctrl = this;

	this.selection = [];
	this.rows = [];

	this.selectionChanged = function (e) {
		$log.log(`qgrid.demo: selection changed ${e.state.items.length} on ${e.state.unit} unit and ${e.state.mode} mode`);
	};

	$http.get('data/people/100.json')
		.then(function (response) {
				ctrl.rows = response.data;
				ctrl.selection = response.data.slice(0, 4);
		});
}
```

# Selection appearance

You can customize selection column appearance and override default template for both head and body cells.

### markup
```html
<q-grid rows="$ctrl.rows"
        selection="$ctrl.selection"
        selection-mode="multiple"
        selection-unit="row">
	<q-grid:columns generation="deep">
		<q-grid:column type="select" key="$default.select" is-visible="true">
			<q-grid:template for="head">
				<md-checkbox md-indeterminate="$view.selection.isIndeterminate()"
							ng-checked="$view.selection.state()"
							ng-click="$view.selection.toggleRow.execute()"
							ng-disabled="!$view.selection.toggleRow.canExecute()"
							class="md-warn"
							aria-label="Selection"/>
			</q-grid:template>
			<q-grid:template for="body">
				<md-checkbox md-indeterminate="$view.selection.isIndeterminate($row)"
							ng-checked="$view.selection.state($row)"
							ng-click="$view.selection.toggleRow.execute($row)"
							ng-disabled="!$view.selection.toggleRow.canExecute($row)"
							class="md-warn"
							aria-label="Selection"/>
			</q-grid:template>
		</g-grid:column>
	</q-grid:columns>
</q-grid>
```
### script
```javascript
Controller.$inject = ['$http', '$log'];
export default function Controller($http, $log) {
	const ctrl = this;

	this.selection = [];
	this.rows = [];

	$http.get('data/people/100.json')
		.then(function (response) {
				ctrl.rows = response.data;
				ctrl.selection = response.data.slice(0, 4);
		});
}
```


# Selection shortcuts
We have rows, cells and columns which we want to select either individually or contiguously.

|   Object      | Individual      | Contiguous                                                                         |
| ------------- |:-------------:  | -----                                                                              |
| Rows          | `shift+space`   | `shift+arrows` from current position (up/right and down/left functional equivalent)|
| Cells         | 	`space`       | `shift+arrows` from current position                                               |
| Columns       | `control+space` | `shift+arrows` from current position (up/right and down/left functional equivalent)|
| Grid          | `control+A` to select the entire grid                                                                |