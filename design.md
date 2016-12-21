# qgrid design specs

## core consepts
* **easy** to start: ```<q-grid rows="data"></grid>``` should be enought to start
* **virtualization** everywhere: rows and columns should be virtualizable
* **considered styles**: user should be able to make any css customization in easy format
* fully **customazable**: header, cells, rows, footer etc. should be templatable 
* **clear javavascript**: no html templates in javascript

## backlog
* component api
    *   expressive header and cell templates for particular data
    *   reach bindings
* javascript api
* column generation from data
    * camel case to pretty form
* virtualization of vertical & horizontal scrolls (handle large data sets)
* sticky header
* multi-column header
* column reording and resizing
* client/server side pagination
* client/server side infinite scroll
* client/server side filtering
    *  filter row
    *  filter popup with checkboxes (like in excel)
    *  expression-builder
* client/server side sorting
* column ordering
* cell, row and column selection
    * disable api for particular data
* header toolbar
* grouping/hierarchy
* aggregation
    * by count
    * by expression
    * total footer
* pager
    * should reflect on infinite scroll
* row details
* inline row editing
    * confirmation api
    * edit/save actions
* table editing 
    *  add new rows
    *  delete rows
    *  confirmation api
*  edit api
    *  e.g. for modal dialog edit
    *  validation
* embeded editors
    *  text
    *  number
    *  date
    *  time
    *  uri
    *  password
    *  file
    *  image
    *  autocomplete
* checkable rows
    *  select all button on header
    *  select all with pagination?
* column-chooser
    * possibility to declare default set of columns
    * change column order by drag and drop
    * persistable model
* tooltips
* export
    * excel
    * pdf
    * csv
* copy
    *  to excel
*  frozen/pinned columns
    *  from left and right
*  keyboard navigation
*  small screen support

# design
## start point
```html
<q-grid rows="data"></q-grid>
```
## sandbox
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
                       isVisible="false"> 
                <i>{{$value}}</i>
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
