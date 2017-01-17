# qgrid filtering interface

## Concepts
* From API point of view filters should allow user following things in runtime: save filters and get filters.

* Configuration of filter includes a function `match(row, filter)` which is responsible for filtering.

* Filter should allow user to choose between client-side and server-side filtering as well as ordering and pagination.

* By default filter must be a simple list of distinct values with checkboxes. This filter is easily serialized to a list of values.

* Filter should be opened as a popup window. Inspired by MS Excel filters. But in general, user can render it in any way. 
 