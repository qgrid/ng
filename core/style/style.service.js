export class StyleService {
    constructor(model) {
        this.style = model.style;
    }

    row() {
        const { rows, row } = this.style();
        return row === noop
            ? styleState.rows
            : styleState.rows.concat([styleState.row]);
    }

    cell() {
        const { cells, cell } = this.style();
        if (isFunction(styleState.cell)) {
            return cell === noop
                ? cells
                : Composite.func(cells.concat([cell]))
        }


        const keys = Object.keys(cell);
        if (keys.length) {
            return cells.concat(keys.map(key => {
                const invoke = styleState.cell[key];
                return (row, column, context) => {
                    if (column.key === key) {
                        invoke(row, column, context);
                    }
                };
            }));
        }

        return cells;
    }

}
