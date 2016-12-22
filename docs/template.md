# qgrid template
## markup
```html
<q-grid rows="data" >
        <q-grid:head> 
            <q-grid:td> 
                <i title="{{$column.name}}">{{$column.label}}</i>
            </q-grid:td>
        </q-grid:head>
        <q-grid:body>
            <q-grid:tr>
            </q-grid:tr>
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
```
## script
```javascript
controller.$inject = ['$scope'];
function controller($scope){
	$scope.data = [];
}
```