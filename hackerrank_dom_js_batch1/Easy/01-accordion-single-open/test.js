(async function () {
  const { assert, equal, click, render } = window.TestUtils;
  const accordions = document.querySelectorAll('.accordian');
  const titles = document.querySelectorAll('.title-section');

  await Promise.resolve();

  assert(accordions.length === 3, 'There are exactly 3 accordions');
  assert(accordions[0].classList.contains('active'), 'First accordion is open by default');
  equal(document.querySelectorAll('.accordian.active').length, 1, 'Only one accordion is active on load');

  click(titles[1]);
  assert(!accordions[0].classList.contains('active'), 'First accordion closes when second is clicked');
  assert(accordions[1].classList.contains('active'), 'Second accordion opens when clicked');
  equal(document.querySelectorAll('.accordian.active').length, 1, 'Only one accordion stays active after click');

  click(titles[2]);
  assert(accordions[2].classList.contains('active'), 'Third accordion opens when clicked');
  assert(!accordions[1].classList.contains('active'), 'Second accordion closes when third opens');

  render('Accordion Tests');
})();
