const btn = document.getElementById('sort-name-btn');
const tbody = document.getElementById('employee-body');

let asc = true;

btn.onclick = function () {
  let rows = Array.from(tbody.rows);

  rows.sort((a, b) => {
    let A = a.cells[0].innerText;
    let B = b.cells[0].innerText;
    return asc ? A.localeCompare(B) : B.localeCompare(A);
  });

  tbody.innerHTML = ''; // clear table
  rows.forEach((row) => tbody.appendChild(row));

  asc = !asc; // toggle
};
