# qgrid 
## markup
```html
<q-grid rows='data'>
	<q-grid:columns>
		<q-grid:column key="Name" title="Name" aggregation="count"></q-grid:column>
		<q-grid:column key="Age" title="Age" aggregation="avg"></q-grid:column>
		<!-- max || min || sum || count || avg -->
	</q-grid:columns>
	<!-- naming: aggregation, aggregation-footer -->
	<q-grid:aggregation></q-grid:aggregation>

	<!-- q-grid:aggregation template: -->

	<q-grid:row>
		<q-grid:ceil
						ng-repeat="column in ctrl.getColumns()"
						ng-class="{'ceil-invisible': !column.aggregate(), 'ceil-visible': column.aggregate()}">
			{{ceil.aggregate()}}
		</q-grid:ceil>
	</q-grid:row>

</q-grid>
```
## script
```javascript
controller.$inject = ['$scope', 'qgrid'];
function controller($scope, qgrid){
	this.getColumns: function() {
		return qgrid.getColumns();
		//every column should content aggregate() method, which will return aggregation value or null
	}
}
```