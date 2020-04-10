var tableNumColumns = -1;


function buildTable(elements, headerClassName) {
  const table = document.createElement('table');
  table.className = 'table';
  table.appendChild(buildTableHeader(elements, headerClassName));
  for (let row of elements) {
    table.appendChild(buildTableDataRow(row));
  }
  return table;
}


function buildTableHeader(elements, className) {
  if (!elements || elements.length === 0) {
    throw new Error(`buildTableHeader: an array with at least one element was expected`);
  }
  const thead = document.createElement('thead');
  if (className) thead.className = className;
  const headerItems = Object.keys(elements[0]);
  tableNumColumns = headerItems.length;
  const tr = document.createElement('tr');
  for (let headerItem of headerItems) {
    const th = document.createElement('th');
    th.appendChild(document.createTextNode(headerItem));
    tr.appendChild(th);
  }
  thead.appendChild(tr);
  return thead;
}


function buildTableDataRow(dataRowItems) {
  if (!dataRowItems || Object.keys(dataRowItems).length !== tableNumColumns) {
    throw new Error(`buildTableDataRow: an object with ${ tableNumColumns } was expected`);
  }

  const tr = document.createElement('tr');
  for (let [, dataRowItemValue] of Object.entries(dataRowItems)) {
    const td = document.createElement('td');
    td.appendChild(document.createTextNode(dataRowItemValue));
    tr.appendChild(td);
  }
  return tr;
}

export { buildTable as default, buildTableHeader, buildTableDataRow };
