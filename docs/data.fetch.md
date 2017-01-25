# qgrid filtering interface

Filtering is tightly coupled with ordering, paging and virtualization.

Data fetch process is going to be a pipeline of ordered operations which can be configured by user.

Every operation gets data from previous stage and handles and passes to the next stage.
If user wants to perform some of this actions on client-side, he modifies pipeline by adding a function to corresponding model.

By default the whole pipeline is triggered when some pipeline-related property is changed (e.g. filters, order etc.).
User also has an ability to trigger data refresh.

Pipeline requires a function with following signature: `(data, model, next) => { }`
where `data` is data array from previous stage, 
`model` is grid model and 
`next` is function that finishes current stage and passes data to the next one.

## gridService

Along with `qGridModel` `qGridService` must be exported too to encapsulate some operations on model.
```javascript
var model = qGridModel(),
    service = qGridService(model);

service.invalidate();
```  

## Common cases
1. All data is filtered and ordered on server-side.
```javascript
gridModel
    .data({
        pipeline: [
            (data, model, next) => {
                $http({
                    filter: model.filter,
                    order: model.filter
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
        pipeline: [
            (data, model, next) => {
                $http({
                    filter: model.filter,
                    order: model.filter
                })
                .then((data) => next(data))
            },
            qGrid.filter,
            gGrid.order
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
        pipeline: []
            (data, model, next) => {
                if (invalidate) {
                    $http({
                        filter: model.filter,
                        order: model.filter
                    })
                    .then((res) => { data = res.data; next(data); })
                } else {
                    next(data);
                }
            },
            qGrid.filter,
            gGrid.order
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
        pipeline: [
            (data, model, next) => {
                $http({
                    filter: model.filter,
                    order: model.filter
                })
                .then((res) => next(res.data))
            },
            (data, model, next) => {
                var filteredData = someFilteringFunctiono();
                next(filteredData);
            }         
        ]
    });
```

User needs an ability to manually trigger data refresh:
```javascript
var model = qGridModel(),
    service = qGridService(model);

invalidateButton.on('click', () => service.invalidate());
```