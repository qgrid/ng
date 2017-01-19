# qgrid sticky header

Header will be shown on the grid top and reacted to column choosing, resizing, etc.
It's managed by head model property **sticky** which is set to true by default.
User has two ways to switch off sticky behaviour:
- from template via qGridHead component with attribute sticky="false"
- from controller via gridModel.head(model) function call where model is object which has property **sticky** (set to false if it need).

## Examples

## Configure from template

### markup
```html
<q-grid rows='data'>
  <q-grid:head sticky="false"></q-grid:head>
</q-grid>
```

## Configure from controller

### markup
```html
<q-grid model='$ctrl.gridModel'>
</q-grid>
```

### script
```javascript
controller.$inject = ['$scope', 'qgrid'];
function controller($scope, qgrid){
    this.gridModel = qgrid();
    this.gridModel.head({
      sticky: false
    });
    this.gridModel.data({rows: [...]});
}
```
