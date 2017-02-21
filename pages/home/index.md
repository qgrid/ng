# qgrid
Angularjs data grid

## installation
`npm install ng-qgrid`
`bower install ng-qgrid`

## the basics
In your `index.html` file, include `qgrid` script and styles
```html
<link type="text/css" rel="stylesheet" href="path/to/qgrid.css"  />
<link  type="text/css" rel="stylesheet" href="path/to/qgrid.material.css"/>
<script type="text/javascript" src="path/to/qgrid.js"></script>
```
Include `qgrid` and a `grid.theme.xxx` as dependencies to your angular module
```javascript
angular.module('myApp', ['qgrid', 'qgrid.theme.material']);
```
To show the grid put next snippet to your html ($ctrl.rows is a collection of objects from angular controller)
```html
<q-grid rows='$ctrl.rows'>
	<q-grid:columns generation="deep"></q-grid:columns>
</q-grid>
```