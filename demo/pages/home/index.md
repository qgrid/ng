# Angular data grid

## Installation

#### Using NPM

```
npm install ng-qgrid --save
```

In your `index.html` file, include q-grid module and style:

```html
<!-- style sheet -->
<link href="path/to/qgrid.css" rel="stylesheet" type="text/css"/>
<!-- module -->
<script type="text/javascript" src="path/to/qgrid.js"></script>
```

Also you can optionally add some q-grid theme (for example Material).

```html
<!-- style sheet -->
<link href="path/to/qgrid.material.css" rel="stylesheet" type="text/css"/>
<!-- module -->
<script type="text/javascript" src="path/to/qgrid.material.js"></script>
```

Include the `qgrid` module and a `grid.theme` as dependencies in your application.

```javascript
angular.module('myApp', ['qgrid', 'qgrid.theme.material']);
```

To render simple table just put this snippet of code to your markup ($ctrl.rows is a collection of data from your application):

```html
<q-grid rows='$ctrl.rows'>
	<q-grid:columns generation="deep"></q-grid:columns>
</q-grid>

```