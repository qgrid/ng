# qgrid 
## markup
```html
<q-grid rows='data'></q-grid>
```
## script
```javascript
controller.$inject = ['$scope'];
function controller($scope){
	$scope.data = [];
	$scope.settings = {
          navigation: {
            {
               key: '3',
               action: function(options) {
                          //smth to do
               }
            }
        };
}
```