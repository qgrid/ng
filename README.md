# qgrid
Angular grid

## core consepts
* **easy** to start: ```<q-grid rows="data"></grid>``` should be enought to start
* **virtualization** everywhere: rows and columns should be virtualizable
* **considered styles**: user should be able to make any css customization in easy format
* fully **customazable**: header, cells, rows, footer etc. should be templatable 
* **clear javavascript**: no html templates in javascript

##licence
Code licensed under MIT license.

## examples
in progress

## development
`$ npm install` prerequisits
`$ npm run build` create a JS bundle with Webpack:
`$ npm run start` start the Webpack development server on 'localhost:3000'
`$ npm run test` run tests
`$ npm run lint` linting

## get started
```html
<q-grid rows="data"></q-grid>
```

## design
[sandbox](https://github.com/klumba12/qgrid/blob/master/docs/sandbox.md)

## features in progress
* [expressive templates](https://github.com/klumba12/qgrid/blob/master/docs/template.md) `Dmitry`
* [column generation from data](https://github.com/klumba12/qgrid/blob/master/docs/column.generation.md) `Maxim`
* [virtualization of vertical & horizontal scrolls (handle large data sets)](https://github.com/klumba12/qgrid/blob/master/docs/scroll.virtual.md) `Valentin`
* [sticky header](https://github.com/klumba12/qgrid/blob/master/docs/header.sticky.md) `Maxim`
* [column reordering and resizing](https://github.com/klumba12/qgrid/blob/master/docs/header.sticky.md) `Maxim`
* [pagination](https://github.com/klumba12/qgrid/blob/master/docs/pagination.md) `Valentin`
* [infinite scroll](https://github.com/klumba12/qgrid/blob/master/docs/scroll.infinite.md) `Valentin`
* [filtering](https://github.com/klumba12/qgrid/blob/master/docs/filter.md) `Valentin`
* [sorting](https://github.com/klumba12/qgrid/blob/master/docs/sorting.md) `Evgeniy`
* [selection](https://github.com/klumba12/qgrid/blob/master/docs/selection.md) `Dmitry`
* [checkable rows](https://github.com/klumba12/qgrid/blob/master/docs/row.checkable.md) `Dmitry`
* [column chooser](https://github.com/klumba12/qgrid/blob/master/docs/column.chooser.md) `Evgeniy`
* [keyboard navigation](https://github.com/klumba12/qgrid/blob/master/docs/navigation.md) `Kate`
* [frozen/pinned columns](https://github.com/klumba12/qgrid/blob/master/docs/column,pin.md) `Kate`
* [export api](https://github.com/klumba12/qgrid/blob/master/docs/export.md) `Mikhail`
* [table editing](https://github.com/klumba12/qgrid/blob/master/docs/table.editing.md) `Mikhail`
* [inline row editing](https://github.com/klumba12/qgrid/blob/master/docs/row.editing.inline.md) `Fedor`
* [row details](https://github.com/klumba12/qgrid/blob/master/docs/row.details.md) `Fedor`
* [embeded editors](https://github.com/klumba12/qgrid/blob/master/docs/cell.editing.md) `Vladimir`

## backlog
* `component api`
    *   `expressive header and cell templates for particular data`
    *   `reach bindings`
* `javascript api`
* `column generation from data`
    * `camel case to pretty form`
* `virtualization of vertical & horizontal scrolls (handle large data sets)`
* `sticky header`
* multi-column header
* `column reordering and resizing`
* `client/server side pagination`
* `client/server side infinite scroll`
* client/server side filtering
    *  filter row
    *  `filter popup with checkboxes (like in excel)`
    *  `expression-builder`
* `client/server side sorting`
* `cell, row and column selection`
    * disable api for particular data
* header toolbar
* grouping/hierarchy
* aggregation
    * by count
    * by expression
    * total footer
* `pager`
    * `should reflect on infinite scroll`
* `row details`
* `inline row editing`
    * confirmation api
    * edit/save actions
* `table editing`
    *  add new rows
    *  delete rows
    *  confirmation api
*  edit api
    *  e.g. for modal dialog edit
    *  validation
* `embeded editors`
    *  text
    *  number
    *  date
    *  time
    *  uri
    *  password
    *  file
    *  image
    *  autocomplete
* `checkable rows`
    *  `select all button on header`
    *  select all with pagination?
* `column-chooser`
    * `possibility to declare default set of columns`
    * `change column order by drag and drop`
    * `persistable model`
* tooltips
* `export`
    * excel
    * pdf
    * csv
* copy
    *  to excel
*  `frozen/pinned columns`
    *  `from left and right`
*  `keyboard navigation`
*  small screen support

## refernces
* [ngx-datatable](https://github.com/swimlane/ngx-datatable)
* [ui-grid](http://ui-grid.info/docs/#/tutorial)
* [ng-table](http://ng-table.com/#/)
* [addazle react data grid](http://adazzle.github.io/react-data-grid/examples.html#/all-features)
* [zippyui react data grid](http://zippyui.com/react-datagrid/#/examples/basic)
* [ag-grid](https://www.ag-grid.com/example.php)
* [js-grid](http://js-grid.com/demos/)
* [advanced data grid component](https://codepen.io/andrewcourtice/pen/VabXQV)
* [backgridjs](http://backgridjs.com/index.html#complete-example)
* [kendo-ui grid](http://demos.telerik.com/kendo-ui/grid/index)
* [ignite-ui grid](http://www.igniteui.com/grid/_ga=1.24026938.1636625595.1482499194)
* [devexpress grid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/LocalDataSource/jQuery/Light/)
* [devexpress asp.net grid](https://www.devexpress.com/Products/NET/Controls/ASP/Grid/demos.xml)
* [devexpress silverlight grid](https://demos.devexpress.com/DemoCenter/Silverlight/?GridDemo#Page=Modules?Product=DXGrid.SL)
* [wpf toolkit grid](http://wpftoolkit.codeplex.com/wikipage?title=DataGrid&referringTitle=Documentation)
* [telerik silverlight grid](http://demos.telerik.com/silverlight/#GridView/FirstLook)
* [infragistics silverlight grid](http://www.infragistics.com/samples/silverlight/grid/overview)