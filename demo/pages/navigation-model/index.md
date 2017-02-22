# Navigation model

### New Navigation
To create new Navigation instance pass to it navigation model, e.g.

```javascript
const navigation = new Navigation(navigationModel);
```

### Default navigation model

Default navigation model constructor :
```javascript
   export default class NavigationModel {
     constructor() {
        this.row = -1;
        this.column = -1;
        this.active = {
           cell: null
        };
     }
  }
```
* `row` and `column` properties contain active navigation row and column indexes. They equal -1 when navigation isn't touched by user
* `active.cell` is object which contains active cell and it's DOM element

### Access from grid
You have access to navigation model from grid model
Call navigation() on grid component

```javascript
   Controller.$inject = ['qgrid', '$log'];
   export default function Controller(qgrid, Log) {
      const model = qgrid.model();
      Log.info(model.navigation()); // here it is
   }
```

#### Get navigation property
To get any navigation model property
```javascript
   model.navigation().row;
```
#### Set navigation properties
You can manage navigation by setting values of navigation model properties to required values.
To change navigation model properties pass object with new values
```javascript
   model.navigation({row:5, column:38});
```

### Navigation model behavior

When you use keyboard-navigation / keyboard-selection commands navigation model is changed.
When you click on cell navigation changes.
