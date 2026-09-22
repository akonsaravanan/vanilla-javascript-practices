(async function () {
  const { assert, equal, click, render, visible } = window.TestUtils;
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.content');

  assert(tabs[0].classList.contains('active'), 'First tab is active by default');
  assert(panels[0].classList.contains('visible'), 'First content is visible by default');
  equal(document.querySelectorAll('.tab.active').length, 1, 'Exactly one tab is active on load');
  equal(document.querySelectorAll('.content.visible').length, 1, 'Exactly one panel is visible on load');

  click(tabs[2]);
  assert(tabs[2].classList.contains('active'), 'Third tab becomes active after click');
  assert(panels[2].classList.contains('visible'), 'Third content becomes visible after click');
  assert(!tabs[0].classList.contains('active'), 'First tab becomes inactive after switching');
  assert(!panels[0].classList.contains('visible'), 'First content becomes hidden after switching');
  equal(document.querySelectorAll('.tab.active').length, 1, 'Exactly one tab remains active after switching');
  equal(document.querySelectorAll('.content.visible').length, 1, 'Exactly one panel remains visible after switching');

  render('Tabs Tests');
})();
