# qgrid filtering interface 
## script

## concepts
Filtering should be configured from controller.
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