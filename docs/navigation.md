# Navigation
Current navigation based on DHTML Style Guide Working Group (DSGWG) reccomendation for keyboard shortcuts
http://access.aol.com/dhtml-style-guide-working-group/

## New Navigation
To create new Navigation instance pass to it it's model. I.E.
```javascript
const navigation = new Navigation(navigationModel);
```

### `Tab`
* The initial tab enters the grid with focus on the first cell of the first row
* A second tab moves out of the grid to the next tab stop on the page.
* Once focus is established in the grid, a TAB into or a Shift Tab into the grid will return to the cell which last had focus.

### `Left` , `Right Arrow`
Move focus to the adjacent column’s cell. There is no wrap at the end or beginning of columns.
### `Up` , `Down Arrow`
Move focus to the adjacent row’s cell. There is no wrap at the first or last row.
### `Home`
Moves focus to the first cell of the current row
### `End`
Moves focus to the last cell of the current row
### `Page Up`
Moves focus to the first cell in the current column
### `Page Down`
Moves focus to the last cell in the current column
### Actionable Mode
* `Enter` or `F2` pressed while focus is on a cell containing an actionable item will enter Actionable Mode.
* Pressing the `Tab` key while in actionable mode moves focus to the next actionable item within the grid, wrapping when the last actionable item in the grid is reached.
* `Shift Tab` does the same as `Tab` but in reverse order.
* Option the author may choose to enable ‘auto action’ on a cell in order to avoid having to press `enter` or `F2` a second time to activate the default behavior of the object contained in a cell.
For example, if the cell contains a single link the author may want to have enter follow the link rather than just move focus to it. This auto action mode should be configurable on a per cell basis as its utility is dependent on each cell’s content. For example, if the cell contains multiple links, auto action should be disabled as its behavior would be ambiguous.
Option the author may choose to implement `Enter` or `F2` as a toggle such that pressing these keys multiple times will enter and exit actionable mode.
* `Esc` exits Actionable Mode

### Selection
We have rows, cells and columns which we want to select either individually or contiguously.

|   Object      | Individual      | Contiguous                                                                         |
| ------------- |:-------------:  | -----                                                                              |
| Rows          | `shift+space`   | `shift+arrows` from current position (up/right and down/left functional equivalent)|
| Cells         | 	`space`       | `shift+arrows` from current position                                               |
| Columns       | `control+space` | `shift+arrows` from current position (up/right and down/left functional equivalent)|
| Grid          | `control+A` to select the entire grid                                                                |

### `Shift+F8`
Adds additional discontinuous items to the selection set. If the user has already selected a column then shift+f8 will add additional columns to the set. Similar behavior for rows and cells.