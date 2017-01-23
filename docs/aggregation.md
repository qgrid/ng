# qgrid 
## markup
```html
<q-grid rows='data'>
	<q-grid:columns>
		<q-grid:column key="Name" title="Name" aggregation="count"></q-grid:column>
		<q-grid:column key="Age" title="Age" aggregation="avg"></q-grid:column>
		<!-- max || min || sum || count || avg -->
	</q-grid:columns>
	<q-grid:aggregation></q-grid:aggregation>
</q-grid>
```
## script
```javascript
controller.$inject = ['$scope'];
function controller($scope){
	$scope.data = [];
}
```