# qgrid

Sorting allow you to order data on the client side in both directions - ascending (ASC) and descending (DESC).
## markup
```html
<q-grid rows='data'></q-grid>
```
## script
```javascript
controller.$inject = ['$scope'];
function controller($scope){
	$scope.data = [];
}
```