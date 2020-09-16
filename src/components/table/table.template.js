const CODES = {
    A: 65,
    Z: 90
}

function toCell(element) {
    return `
        <div class="excel__table-cell" contenteditable>${element}</div>
    `
}

function toColumn(element) {
    return `
        <div class="excel__table-column">
            ${element}
            <div class="col-resize"></div>
        </div>
    `
}

function createRow(content, index) {
    const resizer = index ? `<div class="row-resize"></div>` : '';
    return `
        <div class="excel__table-row">
            <div class="excel__table-row-info">
                ${index ? index : ''}
                ${resizer}
            </div>
            <div class="excel__table-row-data">${content} </div>
        </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1;
    const rows = [];
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow(cols, null));

    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('')
        rows.push(createRow(cells, i + 1));
    }

    return rows.join('');
}