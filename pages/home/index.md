## installation
* `$ npm install ng-qgrid`
* `$ bower install ng-qgrid`
* https://plnkr.co/edit/cz0CL7?p=preview

## include to your project
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
## dependency diagram
We are trying to encapsulate any ui framework(angular in our case) dependencies to the separate module. We believe that it will give us a chance to migrate
`q-grid` to other environments without big efforts(in plans angular2, react and vuejs)

![dependecy diagram](https://github.com/qgrid/ng/blob/master/docs/dependency.png?raw=true)
