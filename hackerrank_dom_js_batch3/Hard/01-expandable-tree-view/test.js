(() => {
  const { click, equal, render } = window.TestUtils;
  const parents = document.querySelectorAll('.node.parent');
  const labels = document.querySelectorAll('.label');

  equal(document.querySelectorAll('.node.open').length, 0, 'No tree branch is open on load');
  click(parents[0].querySelector('.label'));
  equal(parents[0].classList.contains('open'), true, 'Frontend branch opens');
  equal(parents[1].classList.contains('open'), false, 'Backend remains closed');
  click(parents[1].querySelector('.label'));
  equal(parents[0].classList.contains('open'), true, 'Frontend stays open');
  equal(parents[1].classList.contains('open'), true, 'Backend also opens');
  click(labels[6]);
  equal(document.querySelectorAll('.node.open').length, 2, 'Childless node click does nothing');

  render('Expandable Tree View Tests');
})();
