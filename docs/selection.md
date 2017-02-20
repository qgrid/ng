# Selection basics
Currently q-grid supports rows, columns and cells selection with single and multiple selection modes. 
To enable selection you need to specify selection-mode and selection-unit attributes within root q-grid tag.

Possible selection-unit values:
- row
- column
- cell

Possible selection-mode values:
- single
- multiple

You can bind an array of selected items via selection attribute. 

### markup
```html
<q-grid rows="$ctrl.rows"
        selection="$ctrl.selection"
        selection-mode="multiple"
        selection-unit="row">
	<q-grid:columns generation="deep">
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

# Selection changed

You can subscribe to selection-changed event via corresponding attribute. 

*Note*: don't forget to specify on: prefix before event name! 


### markup
```html
<q-grid rows="$ctrl.rows"
        selection="$ctrl.selection"
        selection-mode="multiple"
        selection-unit="row"
        on:selection-changed="$ctrl.selectionChanged($event)">
	<q-grid:columns generation="deep">
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

