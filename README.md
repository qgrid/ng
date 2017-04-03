# qgrid
Angularjs data grid

## examples
https://qgrid.github.io/ng/

## installation
* `$ npm install ng-qgrid`
* `$ bower install ng-qgrid`

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
* [valor grid](http://valor-software.com/ng2-table/)
* [iron data table](https://saulis.github.io/iron-data-table/demo/)