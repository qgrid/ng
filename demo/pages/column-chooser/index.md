# Column chooser

Column chooser plugin is created to manage the visibility of grid columns

### Markup

```html
<q-grid:column-chooser></q-grid:column-chooser>
```

Include q-grid:column-chooser tag to  your template, e.g.

```html
<q-grid model="$ctrl.gridModel">
	<q-grid:toolbar>
		<q-grid:template for="right">
			<q-grid:column-chooser>
			</q-grid:column-chooser>
		</q-grid:template>
	</q-grid:toolbar>
</q-grid>
```

### Properties
Default column-chooser model properties:

```javascript
 canAggregate : false
```

* canAggregate property affects on aggregation functionality for each column

To allow aggregation functionality set this property value to true:

```html
<q-grid:column-chooser can-aggregate="true"></q-grid:column-chooser>
```
