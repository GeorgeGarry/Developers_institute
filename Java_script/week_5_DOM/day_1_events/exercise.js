let my_row = 3;
  function insertRow() {
    const table = document.getElementById("sampleTable");
    const row = table.insertRow(table.rows.length);
    const cell_1 = row.insertCell(0);
    const cell_2 = row.insertCell(1);
    cell_1.innerHTML = `Row ${my_row} cell 1`;
    cell_2.innerHTML = `Row ${my_row} cell 2`;
    my_row++
  }
