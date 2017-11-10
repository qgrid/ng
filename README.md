# qgrid
Angularjs data grid

## examples
https://qgrid.github.io/ng/

## installation
* `$ npm install ng-qgrid`
* `$ bower install ng-qgrid`
* https://plnkr.co/edit/cz0CL7?p=preview

## core concepts
* **easy** to start:
```javascript
	<q-grid rows="data">
		<q-grid:columns generation="deep">
		</q-grid:columns>
	</grid>
```
* **virtualization** everywhere: rows and columns should be virtualizable
* **considered styles**: user should be able to make any css customization in easy format
* fully **customizable**: header, cells, rows, footer etc. should be templatable
* **clear javascript**: no html templates in javascript

## development
* `$ npm install` prerequisites
* `$ npm run start` start the webpack development server on [http:\\\\localhost:3030\demo](http:\\localhost:3030\demo)
* `$ npm run build:prod` create a js bundle with webpack
* `$ npm run lint` run code quality tests
* `$ npm run test` run tests
* `$ npm run test:debug` watch and debug tests

## dependency diagram
We are trying to encapsulate any ui framework(angular in our case) dependencies to the separate module. We believe that it will give us a chance to migrate
`q-grid` to other environments without big efforts(in plans angular2, react and vuejs)

![dependecy diagram](https://github.com/qgrid/ng/blob/master/docs/dependency.png)

## licence
Code licensed under MIT license.

## references

### themes
* [material design](https://material.io/guidelines/components/data-tables.html)

### virtualization
* [vscroll](https://github.com/klumba12/vscroll)

### expressions
* [expression builder](https://github.com/vkorolev/expression-builder)

### markdown
* [dillinger](http://dillinger.io/)

### test
* [chai](http://chaijs.com/api/bdd/)
* [mocha](https://mochajs.org/#getting-started)
* [karma](https://karma-runner.github.io/1.0/index.html)
* [eslint](http://eslint.org/)

### build

* [webpack](http://webpack.github.io/docs/)
* [babel](https://babeljs.io/)
* [babel polyfill](http://babeljs.io/docs/usage/polyfill/)

### grid
* [primeng](https://www.primefaces.org/primeng/#/datatable)
* [ngx-datatable](https://github.com/swimlane/ngx-datatable)
* [kendo-ng grid](http://www.telerik.com/kendo-angular-ui/components/grid/)
* [ui-grid](http://ui-grid.info/docs/#/tutorial)
* [ng-table](http://ng-table.com/#/)
* [addazle react data grid](http://adazzle.github.io/react-data-grid/examples.html#/all-features)
* [zippyui react data grid](http://zippyui.com/react-datagrid/#/examples/basic)
* [ag-grid](https://www.ag-grid.com/javascript-grid-features/#gsc.tab=0)
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
* [ng2-supertable](https://andyperlitch.github.io/ng2-super-table/demo/)
* [valor grid / ng2-table](http://valor-software.com/ng2-table/)
* [iron data table](https://saulis.github.io/iron-data-table/demo/)
* [Handsontable](https://github.com/handsontable/handsontable)
* [SlickGrid](https://github.com/mleibman/SlickGrid)
* [DataTables](https://github.com/DataTables/DataTables)
* [jqGrid / trirand / guriddo](https://github.com/tonytomov/jqGrid/tree/master)
* [jsGrid](https://github.com/tabalinas/jsgrid)
* [DevExtreme](https://github.com/DevExpress/DevExtreme)
* [DHtmlXGrid](https://dhtmlx.com/docs/products/dhtmlxGrid/)
* [Webix spreadsheet](https://webix.com/spreadsheet/)
* [FancyGrid](https://www.fancygrid.com/)
* [Data Grid](https://documentation.devexpress.com/WindowsForms/3455/Controls-and-Libraries/Data-Grid)
* [Clusterize](https://github.com/NeXTs/Clusterize.js)
* [Ng table](https://github.com/esvit/ng-table)
* [Smart-Table](https://github.com/lorenzofox3/Smart-Table)
* [ngx-datatable](https://github.com/swimlane/ngx-datatable)
* [recline](https://github.com/okfn/recline)
* [w2ui grid](http://w2ui.com/web/demos/#!grid/grid-1)
* [Ember table](https://github.com/addepar/ember-table/)
* [jtable](https://github.com/hikalkan/jtable)
* [dgrid](https://github.com/sitepen/dgrid)
* [React-Spreadsheet-Component](https://github.com/felixrieseberg/React-Spreadsheet-Component)
* [react-pivot](https://github.com/davidguttman/react-pivot)
* [jQuery.sheet](https://github.com/Spreadsheets/WickedGrid/releases/tag/3.1)
* [paramquery](https://github.com/paramquery/grid)
* [bs_grid](https://github.com/pontikis/bs_grid)
* [jexcel](https://github.com/paulhodel/jexcel)
* [sou-react-table](https://github.com/miadwang/sou-react-table)
* [jui_datagrid](https://github.com/pontikis/jui_datagrid)
* [cell-cursor](https://github.com/team-lab/cell-cursor)
* [react-virtualized-pivot](https://github.com/turnerniles/react-virtualized-pivot)
* [ipgrid](https://jspreadsheets.com/ipgrid.html)
* [ingrid](https://github.com/reconstrukt/ingrid)
* [tgrid](https://github.com/TesserisPro/tgrid)
* [dynamic-table](https://github.com/key-lime-box/dynamic-table)