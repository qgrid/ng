# qgrid checkable row
## descrition
Checkable rows is just a one of the selection modes we offer to user.

Here is a list of features we should support:
* Extra column with checkboxes for each row
* Select all checkbox in the header of the column
* Column and header should be templatable
* Selected items should be bound to `selection`

When qgrid works in server side pagination mode we might face a trouble with `selection`.
Just a simple case:
1. First page loaded
2. User clicks on select all checkbox
3. Only first page is presented in `selection` array

Considering example above it might be good idea to expose a promise to get all the selected items. But it's debatable.
## markup
```html
<q-grid rows="data"
        selection="selections"
        selection-mode="check">
</q-grid>
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
   ];

   $scope.selections = [];
}
```
## references
* [https://github.com/klumba12/groupbox](https://github.com/klumba12/groupbox)