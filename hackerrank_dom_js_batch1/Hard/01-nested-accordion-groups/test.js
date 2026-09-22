(async function () {
  const { assert, equal, click, render } = window.TestUtils;
  const groupA = document.getElementById('group-a');
  const groupB = document.getElementById('group-b');
  const aAcc = groupA.querySelectorAll('.accordian');
  const bAcc = groupB.querySelectorAll('.accordian');

  assert(aAcc[0].classList.contains('active'), 'First accordion in Group A is open by default');
  assert(bAcc[0].classList.contains('active'), 'First accordion in Group B is open by default');
  equal(groupA.querySelectorAll('.accordian.active').length, 1, 'Only one accordion is active in Group A on load');
  equal(groupB.querySelectorAll('.accordian.active').length, 1, 'Only one accordion is active in Group B on load');

  click(aAcc[2].querySelector('.title-section'));
  assert(aAcc[2].classList.contains('active'), 'A3 opens when clicked');
  assert(!aAcc[0].classList.contains('active'), 'A1 closes when A3 opens');
  assert(bAcc[0].classList.contains('active'), 'Group B remains unchanged when Group A is clicked');
  equal(groupA.querySelectorAll('.accordian.active').length, 1, 'Only one accordion stays active in Group A');

  click(bAcc[1].querySelector('.title-section'));
  assert(bAcc[1].classList.contains('active'), 'B2 opens when clicked');
  assert(!bAcc[0].classList.contains('active'), 'B1 closes when B2 opens');
  assert(aAcc[2].classList.contains('active'), 'Group A remains unchanged when Group B is clicked');
  equal(groupB.querySelectorAll('.accordian.active').length, 1, 'Only one accordion stays active in Group B');

  render('Nested Accordion Tests');
})();
