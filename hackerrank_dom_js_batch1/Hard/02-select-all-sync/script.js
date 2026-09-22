const selectAll = document.getElementById('select-all');
const selectedCount = document.getElementById('selected-count');
const items = document.querySelectorAll('.item-checkbox');

// Function to update selected count
function updateCount() {
  let count = 0;

  items.forEach((item) => {
    if (item.checked) {
      count++;
    }
  });

  selectedCount.textContent = count;
}

// Function to sync select-all based on items
function updateSelectAll() {
  const allChecked = [...items].every((item) => item.checked);
  selectAll.checked = allChecked;
}

// When Select All changes
selectAll.addEventListener('change', () => {
  items.forEach((item) => {
    item.checked = selectAll.checked;
  });

  updateCount();
});

// When any individual item changes
items.forEach((item) => {
  item.addEventListener('change', () => {
    updateSelectAll();
    updateCount();
  });
});