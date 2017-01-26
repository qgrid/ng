#qgrid design sandbox

### markup
```html
<q-grid rows="$ctrl.data" 
        columns="$ctrl.columns"        
        filter="$ctrl.filters"
        sorting="$ctrl.sortings"
        selection="$ctrl.selections"
        grouping="$ctrl.groupings"
        on:sortingChanged="$ctrl.onSortingChanged()"
        on:selection-changed="$ctrl.onSelectionChanged()"
        on:filter-changed="$ctrl.onFilterChanged()"
        on:grouping-changed="$ctrl.onGroupingChanged()">
        
        <q-grid:columns auto-generate="true"
        						group-by="['country', 'gender']">
        		<q-grid:column key="last-name" 
        							title="Last Name" 
        							path="name.last">
        			<q-grid:template for="head">
        				<span style="background: #f00;">{{$column.title}}</span>
        			</q-grid:template>
        		</q-grid:column>
        		<q-grid:column key="birthday" 
        							title="Birthday"
        							is:visible="true" 
        							is:default="true"
        							can:move="false"
        							can:sort="true"
        							can:resize="false"
        							pin="right">
        			<q-grid:template for="body">
        				{{$cell.value | date:'yyyy/mm/dd'}}
        			</q-grid:template>
        		</q-grid:column>
        		<q-grid:column key="age" 
        		 					value="$ctrl.getAge($row)"
        		 					aggregation="average">        			
				</q-grid:column>
        	</q-grid:columns>
        	
        	<q-grid:toolbar>
         	<q-grid:template for="top" let="$ctrl">
         		<button ng-click="$ctrl.update()">Update</button>
         	</q-grid:template>
         </q-grid:toolbar>
         
         <q-grid:pager>
        		<q-grid:template>
        				<label>{{$pager.from}}-{{$pager.to}} of {{$pager.total}}</label>
        		</q-grid:template>
        	</q-grid:pager>
        	        	
</q-grid>
```
### script
```javascript
controller.$inject = ['qgrid', '$http'];
function controller(qgrid, $http){
	const gridModel = qgrid.model();
	const gridService = qgrid.service(gridModel);
	
	gridModel.data({
		pipe: [
				(data, model, next) => {
					const state = model.data();
					$http.get({
						filter: state.filter, 
						sorting: state.sorting
					})
					.then(serverData => next(serverData))
				},
				qgrid.groupBy,
				qgrid.pivot
		]
	})
}
```
