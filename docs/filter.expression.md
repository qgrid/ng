# angular qgrid filtering 

## concepts

Internally [expression-builder](https://github.com/vkorolev/expression-builder) is supposed to be used.

By default expression builder should have 2 group operations:

* AND
* OR

and the most common comparison ops:
* EQUALS
* NOT EQUALS
* IN
* STARTS WITH
* ENDS WITH
* IS NULL
* IS NOT NULL
* etc.

and probably some type-specific ops:
* GREATER THAN
* LESS THAN
* etc.

User should be allowed to select between advanced and simple mode.
For advanced mode `expression-builder` is used, and simple mode is just a set 

## AST

Syntax tree is a tree-like JS-object.

There are some generic types of nodes:

1. Group

```javascript
{
    kind: 'group',
    op: 'and', // 'or'
    left: {},
    right: {}
}

```
Group is a grouping operation which is union of other operations.

`op` field is an operation, which can be only 'and' or 'or'.

`left` and `right` - nodes joined by current group. They are JS-objects which can be *groups* as well as *conditions*.

2. Condition

```javascript
{
    kind: 'condition',
    op: 'equals', // 'notEquals', 'in', etc.
    left: {},
    right: {}
}

```
`op` field is an operation, which can be only 'and' or 'or'.

`left` is always a node of type *field*

`right` is a node of type *literal* or null.

3. Field

```javascript
{
    kind: 'field',
    name: ''
}
```
`name` is the name of column to be used in condition.

4. Literal

```javascript
{
    kind: 'literal',
    value: ''
}
```

`value` is a value which must be compared to column, selected in `field`.

### AST Example

Below is AST representation of following expression: `Z IS NULL OR (X == 'abc' AND Y <> 'qwe')`

```javascript
{
    kind: 'group',
    op: 'or',
    left: {
        kind: 'group',
        op: 'and',
        left: {
            kind: 'condition',
            op: 'equals',
            left: {
                kind: 'field',
                name: 'X'
            },
            right: {
                kind: 'literal',
                value: 'abc'
            }
        },
        right: {
            kind: 'condition',
            op: 'notEquals',
            left: {
                kind: 'field',
                name: 'Y'
            },
            right: {
                kind: 'literal',
                value: 'qwe'
            }
        }
    },
    right: {
        kind: 'condition',
        op: 'isNull',
        left: {
            kind: 'field',
            name: 'Z'
        },
        right: null
    }
}

```