# qgrid sticky

Sticky provides opportunity to freeze element.  It can be applied to header or footer. Header will be shown on the grid top and reacted to column choosing, resizing, etc. Accordingly footer will be shown on the bottom of table view.

Header and footer models looks like:

```javascript
head: {				// |foot
	isSticky: true,
	...
}
```

Sticky behaviour is managed by head (foot) model property **isSticky** which is set to true by default.

User has two ways to switch off sticky behaviour:
- from template via qGridHead (qGridFoot) component with attribute is-sticky="false"
- from controller via gridModel.head(model) (gridModel.foot(model)) function call where model is object which has property **isSticky** (set to false if it need).

## Examples

## Switch off from template

### markup
```html
<q-grid rows='data'>
  <q-grid:head is-sticky="false"></q-grid:head>
</q-grid>
```

## Switch off from controller

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
      isSticky: false
    });
    this.gridModel.data({rows: [...]});
}
```
