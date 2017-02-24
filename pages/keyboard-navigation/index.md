# Keyboard navigation
Current navigation based on DHTML Style Guide Working Group (DSGWG) reccomendations for keyboard shortcuts and keyboard navigation
http://access.aol.com/dhtml-style-guide-working-group/

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

* `Esc` exits Actionable Mode

### Selection
We have rows, cells and columns which we want to select either individually or contiguously.

|   Object      | Individual      | Contiguous                                                                         |
| ------------- |:-------------:  | -----                                                                              |
| Rows          | `shift+space`   | `shift+arrows` from current position (up/right and down/left functional equivalent)|
| Cells         | 	`space`       | `shift+arrows` from current position                                               |
| Columns       | `control+space` | `shift+arrows` from current position (up/right and down/left functional equivalent)|
| Grid          | `control+A` to select the entire grid                                                                |
