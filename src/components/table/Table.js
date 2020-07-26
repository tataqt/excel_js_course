import { ExcelComponent } from "@core/ExcelComponent";

export class Table extends ExcelComponent {
    static className = 'excel__table';

    toHTML() {
        return `
        <div class="excel__table-row">
          <div class="excel__table-row-info"></div>
          <div class="excel__table-row-data">
            <div class="excel__table-column">A</div>
            <div class="excel__table-column">B</div>
            <div class="excel__table-column">C</div>
          </div>
        </div>

        <div class="excel__table-row">
          <div class="excel__table-row-info">1</div>
          <div class="excel__table-row-data">
            <div class="excel__table-cell selected" contenteditable>A1</div>
            <div class="excel__table-cell" contenteditable>B1</div>
            <div class="excel__table-cell" contenteditable>C1</div>
          </div>
        </div>
        <div class="excel__table-row">
          <div class="excel__table-row-info">2</div>
          <div class="excel__table-row-data">
            <div class="excel__table-cell" contenteditable>A2</div>
            <div class="excel__table-cell" contenteditable>B2</div>
            <div class="excel__table-cell" contenteditable>C2</div>
          </div>
        </div>`
    }
}
