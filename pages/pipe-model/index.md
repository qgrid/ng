# Pipe model

Data fetch process is inspired by middleware pattern. 
Pipeline is a list of pipes. 

Every pipe gets data from previous one, handles it, and passes to the next pipe.

By default the whole pipeline is triggered when some pipeline-related property is changed (e.g. filters, order etc.).
User also has an ability to trigger data refresh manually.

By default pipeline consists of following pipes:
* `Pipe.data` - returns model.data().rows
* `Pipe.filter` - filters data according to filters
* `Pipe.sort` - sorts data according to sort model
* `Pipe.pagination` - fetches necessary page of data
* `Pipe.memo` - converts data to `{ rows: [], pivot: {}, nodes: []}` structure
* `Pipe.group` - converts rows to groups according to group settings
* `Pipe.pivot` - pivots data 
* `Pipe.column` - populates columns based on previous stages results 
* `Pipe.view` - writes all data to view, which is directly added to markup
