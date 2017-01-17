# qgrid filtering interface

Filtering is tightly coupled with ordering, paging and virtualization.

Data fetch process is going to be a pipline of ordered operations:

 1. Fetch
 2. Filter
 3. Order
 4. Page
 5. Virtualize

By default


## Script
```javascript
gridModel
	.filter({

	})
``` 