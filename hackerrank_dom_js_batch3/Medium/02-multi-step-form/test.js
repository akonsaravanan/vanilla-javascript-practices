(() => {
  const { click, equal, render } = window.TestUtils;
  const steps = document.querySelectorAll('.step');
  const visibleId = () => document.querySelector('.step.visible').id;

  equal(visibleId(), 'step-1', 'Step 1 is visible by default');
  click(document.querySelector('#step-1 .next-btn'));
  equal(visibleId(), 'step-2', 'Next moves to step 2');
  click(document.querySelector('#step-2 .next-btn'));
  equal(visibleId(), 'step-3', 'Next moves to step 3');
  click(document.querySelector('#step-3 .prev-btn'));
  equal(visibleId(), 'step-2', 'Prev moves back to step 2');

  render('Multi Step Form Tests');
})();
