# Progress

### Initiate progress
To add progress you should set isBusy property to true on progress start and to false on progress finish, i.e. like this:
```javascript
Controller.$inject = ['$http', '$timeout', 'qgrid'];
export default function Controller($http, $timeout, qgrid) {
    const ctrl = this;
    ctrl.gridModel = qgrid.model();
    ctrl.gridModel.progress({isBusy: true});

    $timeout(() =>
        $http.get('data/people/100.json')
            .then(function (response) {
                ctrl.gridModel.data({
                    rows: response.data
                });
                ctrl.gridModel.progress({isBusy: false});
            }), 1000);
}
```