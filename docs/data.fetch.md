# qgrid filtering interface

Filtering is tightly coupled with ordering, paging and virtualization.

Data fetch process is going to be a pipline of ordered operations:

 1. Fetch
 2. Filter
 3. Page
//  3. Order
//  4. Page
//  5. Virtualize

By default


## Script
```javascript
gridModel
    // .data({
    //     filter: {some_filter_here},        
    //     sortings: ['name', 'gender']
    // })
	.filter({
        model: {some_filter_here},
        apply: (data, filter) => {
            return filterd_data;
        }         
	})
    .order({
        model: ['name', 'gender']
        apply: (data, sortings) => {
            return ordered_data;
        }         
	});

gridModel.filter().model


gridModel.dataChanged(e => {
    if(e.changes.filter || e.changes.order){
        e.handled.filter = true;
        e.handled.order = true;
        $http.get(e.state.filter, e.state.order)
             .then(data =>{
                gridModel.data({
                    rows: data
                })
        })
    }
});  

gridModel.vscroll({
    fetch: (data, skip, take, e) => {
        return data;
        // return data.slice(skip, take);

        // return $http.get(e.state.filter, e.state.order)
        //             .then((res) => {
        //                 data.push.apply(data, res);
        //                 e.resolve(data.length);
        //          });
    }
})

gridModel
    .data(
        fetch: (e) => {
            return $http.get({e.state.filter, e.state.order, skip, take});
        }
    )

gridModel
    .data(
        fetch: (filter, order) => {
            return $http.get({
            });
        }
    )
``` 