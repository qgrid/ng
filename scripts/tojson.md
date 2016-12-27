# tojson

converts custom formats to json

## node tojson `line` some-path.json
input [https://github.com/arangodb/example-datasets/tree/master/RandomUsers]
```json
{foo: 1, bar: 2}
{foo: 1, bar: 3}
```
output
```json
[{foo: 1, bar: 2},
{foo: 1, bar: 3}]
```