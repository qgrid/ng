# qgrid
## Shortcut


Shortcut maps keyboard button shortcut with the command, which should be invoked on pushing this button. I.E.
```javascript
    "down" => {
                    shortcut: 'down',
                    canExecute: () => {
                        //condition
                    },
                    execute: () => {
                        //execution
                    }
                }

```

Your command can contain several shortcuts. The delimeter is '|' symbol. I.E.
```
    shortcut: 'tab|right',
    canExecute: () => {
        //condition
    },
    execute: () => {
       //execution
    }
```
In this case will be created mappings for every of the delimetered values.

## Create new shortcut instance
To bind shortcuts with navigation commands you should create new instance of Shortcut object and pass document object to it
```javascript
    const shortcut = new Shortcut(document);
```

## Bind shortcut to navigation
Pass new id for this shortcut and commands for bind to
```javascript
    shortcut('navigation', commands);
```