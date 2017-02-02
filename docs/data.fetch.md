# qgrid filtering interface

Filtering is tightly coupled with ordering, paging and virtualization.

Data fetch process is going to be a pipeline of ordered operations which can be configured by user.

Every operation gets data from previous stage and handles and passes to the next stage.
If user wants to perform some of this actions on client-side, he modifies pipeline by adding a function to corresponding model.

By default the whole pipeline is triggered when some pipeline-related property is changed (e.g. filters, order etc.).
User also has an ability to trigger data refresh.

Pipeline requires a function with following signature: `(data, model, next) => { }`where 
* `data` is data array from previous stage, 
* `context` is an event, which consists of following fields:
    * `source` - where changes occured
    * `model` - current qgrid model
    * `diff` - what was changed
* `next` is function that finishes current stage and passes data to the next one.

## gridService

Along with `qGridModel` `qGridService` must be exported too to encapsulate some operations on model.
```javascript
var model = qgrid.model(),
    service = qgrid.service(model);

service.invalidate();
```  

## Common cases
1. All data is filtered and ordered on server-side.
```javascript
gridModel
    .data({
        pipe: [
            (data, ctx, next) => {
                $http({
                    filter: ctx.model.filter,
                    order: ctx.model.filter
                })
                .then((data) => next(data))
            }
        ]
    });
```

2. Data is fetched from server but filtering, ordering and pagination is performed on client.

```javascript
gridModel
    .data({
        pipe: [
            (data, ctx, next) => {
                $http({
                    filter: ctx.model.filter,
                    order: ctx.model.filter
                })
                .then((data) => next(data))
            },
            qgrid.pipe.filter,
            qgrid.pipe.order
        ]
    })
    .filter({
        match: (model, row) => {
            // some filtering logic here
        }
    })
    .order({
        compare: (i1, i2) => {
            return i1.id - i2.id;
        }
    }),
    .page({
        number: 0,
        size: 10
    });
```

## Other cases

Such pipeline allows cache data and invalidate it using grid notifications:

```javascript
gridModel
    .data({
        pipe: []
            (data, ctx, next) => {
                if (invalidate) {
                    $http({
                        filter: ctx.model.filter,
                        order: ctx.model.filter
                    })
                    .then((res) => { data = res.data; next(data); })
                } else {
                    next(data);
                }
            },
            qgrid.pipe.filter,
            qgrid.pipe.order
        ]
    })
    .order({
        onModelChanged: () => {
            invalidate = true;
        }
    });
```

User can provide his own middleware by adding a function to pipeline:

```javascript
gridModel
    .data({
        pipe: [
            (data, ctx, next) => {
                $http({
                    filter: ctx.model.filter,
                    order: ctx.model.filter
                })
                .then((res) => next(res.data))
            },
            (data, ctx, next) => {
                var filteredData = someFilteringFunctiono();
                next(filteredData);
            }         
        ]
    });
```

User needs an ability to manually trigger data refresh:
```javascript
var model = qgrid.model(),
    service = qgrid.service(model);

invalidateButton.on('click', () => service.invalidate());
```