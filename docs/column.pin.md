# qgrid 
## markup
```html
<q-grid rows="$ctrl.rows">
	<q-grid:columns>
		<q-grid:column isPinned="true" key="name.last" title="Last Name" value="$ctrl.getLastName($row)"></q-grid:column>
		<q-grid:column key="birthday" title="Birthday"></q-grid:column>
		<q-grid:column key="gender" title="Gender"></q-grid:column>
	</q-grid:columns>
</q-grid>
```
## script
```javascript
controller.$inject = ['$scope', 'qgrid'];
function controller($scope, qgrid){
  $scope.columns = [
          {key: 'firstName', label: 'First Name', type: 'text', isVisible: true, isDefault: true, isPinned: true},
          {key: 'lastName', label: 'Last Name', type: 'text', isVisible: true, isDefault: true, isPinned: true},
          {key: 'birthDate', label: 'Date of Birth', type: 'date', isVisible: true, isDefault: true, isPinned: false},
          {key: 'location', label: 'Location', type: 'date', isVisible: true, isDefault: true, isPinned: false},
          {key: 'zipCode', label: 'Zip', type: 'number', isVisible: false, isDefault: false, isPinned: false}
      ];
   
}
```