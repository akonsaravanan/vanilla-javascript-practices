(() => {
  const { click, equal, render } = window.TestUtils;
  const btn = document.getElementById('sort-name-btn');
  const tbody = document.getElementById('employee-body');
  const names = () => Array.from(tbody.querySelectorAll('tr')).map(r => r.children[0].textContent.trim());

  click(btn);
  equal(JSON.stringify(names()), JSON.stringify(['Kannan', 'Saravanan', 'Vimalraj']), 'First click sorts ascending');
  click(btn);
  equal(JSON.stringify(names()), JSON.stringify(['Vimalraj', 'Saravanan', 'Kannan']), 'Second click sorts descending');

  render('Sortable Table Tests');
})();
