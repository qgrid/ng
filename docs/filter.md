# qgrid filtering interface

## Core filtering concepts

* Core should only allow to get, set filters and notify user when filters are changed. 

## Angular-specific filtering

* Filters should be displayed as popup windows like in MS Excel.

* Popups' content should be configurable.

* Default implementations of filters: checkbox list of distinct values and `expression-builder` tree-like filters.

* Default templates are serialized to AST which is described detailed in [filter.expression.md]()
