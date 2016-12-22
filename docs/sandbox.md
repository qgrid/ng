#qgrid design sandbox

### markup
```html
<q-grid-toolbox model="groupings"></q-grid-toolbox>
<!-- naming: q-grid vs qgrid vs q-table vs qtable 
     where sorting,filter,selection,grouping should be located on q-grid, q-grid:head or :body?
-->
<q-grid rows="data" 
        columns="columns"
        scroll="scrollContext"
        filter="filters"
        filterChanged="onFilterChanged()"
        sorting="sortings"
        sortingChanged="onSortingChanged()"
        selection="selections"
        selectionChanged="onSelectionChanged()"
        grouping="groupings"
        onGroupingChanged="onGroupingChanged()">
        <!-- naming: q-grid:head vs q-head vs qhead 
             do we really nead q-grid:head or can just write <q-grid:th key=...?
             where orderChanged should be located?
        -->
        <q-grid:head sticky="true"
                     resizable="true"
                     reorderable="true"
                     orderChanged="onColumnOrderChanged()"> 
            <!-- naming: q-grid:td vs q-grid:th vs q-th vs qtd  
                 how to declare multi-column header?
                 should we have options like isVisible in markup?
            -->
            <q-grid:td key="zipCode"
                       isVisible="false"
                       isDefault="false"
                       isPinned="false"> 
                <i title="{{$value.name}}">{{$value.label}}</i>
            </q-grid:td>
        </q-grid:head>
        <!-- do we really need g-grid:body or can just write <q-grid:td key=...?
             do we need to customization access for q-grid:tr?
        -->
        <q-grid:body>
            <q-grid:td key="firstName">
                <b>{{$value}}</b>
            </q-grid:td>
            <q-grid:td key="dateBirth">
                {{$value|date:'yyyy/mm/dd'}}
            </q-grid:td>
        </q-grid:body>
        <q-grid:foot>
        </q-grid:foot>
</q-grid>
<q-grid-pager model="scrollContext.container"></q-grid-page>
```
### script
```javascript
controller.$inject = ['$scope', 'qgrid'];
function controller($scope, qgrid){
    $scope.data = [];
    $scope.columns = [
        {key: 'firstName', label: 'First Name', type: 'text', isVisible: true, isDefault: true, isPinned: true},
        {key: 'lastName', label: 'Last Name', type: 'text', isVisible: true, isDefault: true, isPinned: true},
        {key: 'birthDate', label: 'Date of Birth', type: 'date', isVisible: true, isDefault: true, isPinned: false},
        {key: 'location', label: 'Location', type: 'date', isVisible: true, isDefault: true, isPinned: false},
        {key: 'zipCode', label: 'Zip', type: 'number', isVisible: false, isDefault: false, isPinned: false}
    ];
    
    $scope.filters = {};
    $scope.sortings = {};
    $scope.selections = {};
    $scope.groupings = {};

    $scope.scrollContext = qgrid.scroll({
        // The number defines how many items will be materialized to dom elements.
        threshold: 30,
        // The function defines method of getting data for next page of infinite scroll.        
        fetch: function (skip, take, d) {
            getSomeData(skip, take)
                .success(function(data){
                    $scope.data = data;
                    // if you don't know total number of items
                    // you can use "+ take" expression,
                    // it says that next page can be fetched
                    d.resolve(data.length + take);
                });
            }       
    });

    $scope.onFilterChanged = function(e){
    };
    
    $scope.onSortingChanged = function(e){
    };
    
    $scope.onSelectionChanged = function(e){
    };
    
    $scope.onGroupingChanged = function(e){
    };
    
    $scope.onColumnOrderChanged = function(e){
    };
}
```
