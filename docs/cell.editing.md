# Cell editing
To switch on cell editing specify edit-mode="cell" in q-grid:
### Markup
```html
<q-grid columns="$ctrl.columns"
               rows="$ctrl.rows"
               edit-mode="cell">
</q-grid>
```
You can override default cell edit template for columns:
* Bind the model with the new template by specifying $view.edit.cell.value
* Action to exit from the edit mode : $view.edit.cell.commit.execute($cell)

#### Example
```html
<q-grid columns="$ctrl.columns"
               rows="$ctrl.rows"
               edit-mode="cell">
    <q-grid:columns>
        <q-grid:column key="name.first">
            <q-grid:template for="edit">
                 <input type="text"
                     q-grid:focus
                     style="border: 1px solid #f00;"
                     ng-blur="$view.edit.cell.commit.execute($cell)"
                     ng-model="$view.edit.cell.value"/>
            </q-grid:template>
        </q-grid:column>
    </q-grid:columns>
</q-grid>
```
### Usage
* Click over the cell you want to edit to change it's mode to edit.
* Set new value.

#### Editing from keyboard
Move focus by navigation or by click to the cell you want to edit.
##### `Enter` , `F2`
* The initial press of Enter or F2 key changes cell mode from view to edit
* A second enter saves and exits from edit mode.

##### `Esc`
Exit from edit mode without saving.