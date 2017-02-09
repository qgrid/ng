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