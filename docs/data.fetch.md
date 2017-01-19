# qgrid filtering interface

Filtering is tightly coupled with ordering, paging and virtualization.

Data fetch process is going to be a pipline of ordered operations:

 1. **Fetch** - returns a promise which returns data.
 2. **Filter** (optional) - filters data according to `match` function. Gets data from `Fetch` stage.
 3. **Order** (optional) - orders data according to `comparator` function provided by user. Gets data from `Filter` stage. 
 4. **Page** (optional) - defines current page and page size  
 5. **Virtualize** (optional) - defines number of rendered items.

Every operation gets data from previous stage and handles it properly.
If user wants to perform some of this actions on client-side, he modifies pipeline by adding a function to corresponding model.

## Common cases
1. All data is filtered and ordered on server-side.
```javascript
gridModel
    .data({
        fetch: (model) => {
            return $http({
                filter: model.filter,
                order: model.filter
            })
        }
    });
```

2. Data is fetched from server but filtering, ordering and pagination is performed on server.

```javascript
gridModel
    .data({
        fetch: (model) => {
            return $http();
        }
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
        fetch: (model) => {
            var deferred = $q.defer();

            if (invalidate) {
                $http().then(function (res) {
                    data = res.data;
                    deferred.resolve(data);
                });
            } else {
                deferred.resolve(data);
            }

            return deferred.promise;
        }
    })
    .order({
        onModelChanged: () => {
            invalidate = true;
        }
    });
```