# Custom pipes

User is allowed to modify pipeline. Pipe is a part of `data` model of qgrid.

Pipeline requires a function with following signature: `(data, context, next) => { }` where 
* `data` is data array from previous stage, 
* `context` is an event, which consists of following fields:
    * `source` - where changes occured
    * `model` - current qgrid model
    * `diff` - what was changed
* `next` is function that finishes current pipe and passes data to the next one.

## Example

To add basic `fetch` function to pipe, you need to create a function that meets middleware signature
and prepend it to default grid pipes.

```javascript
   var gridModel = qgrid.model();
   var data = gridModel.data();
   var pipes = data.pipes;
   var fetch = (data, context, next) => {
      $http
         .get()
         .then(response => {
            next(response.data);
         });
   };
	
   gridModel.data({
      pipe: [fetch].concat(pipes)
   });
```