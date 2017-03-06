# Grid service

Qgrid exposes API for grid configuration and management.
Grid service can be injected to your application:

```javascript
Controller.$inject = ['qgrid'];
```

### `model`

Model is a factory function to instantiate new grid model.

Usage:

```javascript
$scope.model = qgrid.model();
```

```html
<q-grid model="model"></q-grid>
```

### `service`

Factory function to instantiate a service.

* `invalidate` - a function to start pipeline and refresh data in grid.
 
```javascript
$scope.model = qgrid.model();
var service = qgrid.service($scope.model);

eventHub.on('dataIsDeprecated', function () {
    service.invalidate();
});
```
 
 ### `pipe`
 
 Facade for pipes which are described [here](/demo/#!/pipe-model) 
 
 Usage:
 
```javascript
$scope.model = qgrid.model();
model.data({
    pipe: [
        function () {...},
        qgrid.pipe.memo,
        qgrid.pipe.view
    ]
});
```

 