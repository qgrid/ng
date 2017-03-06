# Visibility

Visibility plugin is created to manage the visibility of grid components and plugins

### Add visibility markup
```html
<q-grid:visibility></q-grid:visibility>
```

Include q-grid:visibility tag to  your template, e.g.

```html
<q-grid model="$ctrl.gridModel">
    <q-grid:columns generation="deep"></q-grid:columns>
    <q-grid:toolbar>
        <q-grid:template for="right">
            <q-grid:visibility>
            </q-grid:visibility>
        </q-grid:template>
    </q-grid:toolbar>

    <q-grid:visibility toolbar.left="true"
        toolbar.right="true">
    </q-grid:visibility>
</q-grid>
```

### Visibility properties
Default visibility model properties:

```javascript
            head : true,
            foot : true,
            body : true,
            toolbar : {
                top: true,
                bottom: true,
                right: false,
                left: false
            },
            plugin = {}
```

Visibility properties are divided to two types:

1. Plain

   These properties have boolean values: true or false.

   E.g.
   * head
   * foot
   * body

2. Nested

   These properties are objects and contain other properties.
   E.g.
   * toolbar
   * plugin



### Access from grid
You have access to visibility model from grid model
Call visibility() on grid component

```javascript
   Controller.$inject = ['qgrid', '$log'];
   export default function Controller(qgrid, Log) {
      const model = qgrid.model();
      Log.info(model.visibility()); // here it is
   }
```

#### Get visibility property
To get any visibility model property as soon as model.visibility() returns object:

```javascript
    Log.info('dot notation for plain visibility property', model.visibility().head);
    Log.info('dot notation for nested visibility property', model.visibility().toolbar.top);

    Log.info('bracket notation for plain visibility property', model.visibility()['head']);
    Log.info('bracket notation for nested visibility property', model.visibility()['toolbar']['bottom']);
```

#### Set visibility properties
You can manage visibility by setting values of visibility model properties to required values.
To change visibility model properties pass object with new values.

```javascript
   model.visibility({head: false, toolbar: {top: false}});
```

### Visibility model behavior

When visibility property value is true component or plugin connected to this property is visible, else isn't visible
