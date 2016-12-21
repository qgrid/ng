# qgrid design specs

## core consepts
* **easy** to start: ```<q-grid rows="data"></grid>``` should be enought to start
* **virtualization** everywhere: rows and columns should be virtualizable
* **considered styles**: user should be able to make any css customization in easy format
* fully **customazable**: header, cells, rows, footer etc. should be templatable 
* **clear javavascript**: no html templates in javascript

## backlog
* component api
    *   expressive header and cell templates for particular data
    *   reach bindings
* javascript api
* virtualization of vertical & horizontal scrolls (handle large data sets)
* sticky header
* multi-column header
* column reording and resizing
* client/server side pagination
* client/server side infinite scroll
* client/server side filtering
    *  filter row
    *  filter popup with checkboxes (like in excel)
    *  expression-builder
* client/server side sorting
* column ordering
* cell, row and column selection
* header toolbar
* grouping/hierarchy
* aggregation
    * by count
    * by expression
    * total footer
* pager
    * should reflect on infinite scroll
* row details
* inline row editing
    * confirmation api
    * edit/save actions
* table editing 
    *  add new rows
    *  delete rows
    *  confirmation api
*  edit api
    *  e.g. for modal dialog edit
    *  validation
* embeded editors
    *  text
    *  number
    *  date
    *  time
    *  uri
    *  password
    *  file
    *  image
* checkable rows
    *  select all button on header
    *  select all with pagination?
* column-chooser
    * possibility to declare default set of columns
    * change column order by drag and drop
    * persistable model
* tooltips
* export
    * excel
    * pdf
    * csv
* copy
    *  to excel
*  frozen columns
    *  from left and right
*  keyboard navigation
*  small screen support

# design
## start point
```html
<q-grid rows="data"></q-grid>
```