const CODES = {
    A: 65,
    Z: 90
}

function createCell(content) {
    return `
    <div class="excel__table-cell" contenteditable>${content}</div>
    `
}

function toColumn(element) {
    return `
    <div class="excel__table-column">${element}</div>
    `
}

function createRow(content) {
    return `
    <div class="excel__table-row">
        <div class="excel__table-row-info"></div>
        <div class="excel__table-row-data">${content}</div>
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

    rows.push(createRow(cols));

    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow(''));
    }

    return rows.join('');
}