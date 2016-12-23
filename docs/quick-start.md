# qgrid quick start
## markup
```html
<q-grid rows="data"></q-grid>
```
## script
```javascript
controller.$inject = ['$scope'];
function controller($scope){
    $scope.data = [
        {firstName: 'Anton', lastName: 'Petrov', birthDate: '01/02/2000', location: 'Saint-Petersburg', 'zipCode': 12455},
        {firstName: 'Vlad', lastName: 'Ivanov', birthDate: '11/02/1985', location: 'Moscow', 'zipCode': 14553},
        {firstName: 'Oleg', lastName: 'Simonov', birthDate: '16/10/1967', location: 'Saint-Petersburg', 'zipCode': 12455},
        {firstName: 'Alexander', lastName: 'Radulov', birthDate: '30/04/2008', location: 'Saint-Petersburg', 'zipCode': 12455},
    ]
}
```