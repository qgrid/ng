# qgrid 

## Option 1 - settings in template

## markup
```html
<q-grid rows='data'>
  <q-grid:head sticky="true"></q-grid:head>
</q-grid>
```

## Option 2 - settings in controller

## markup
```html
<q-grid rows='data'
        settings='settings'>
  <q-grid:head></q-grid:head>
</q-grid>
```

## script
```javascript
controller.$inject = ['$scope'];
function controller($scope){
    $scope.data = [];
    $scope.settings = {
      table: { ... },
      header: {
          sticky: true,
      },
      footer: { ... }
    };
}
```
