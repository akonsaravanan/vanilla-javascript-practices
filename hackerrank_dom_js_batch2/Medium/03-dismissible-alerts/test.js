(() => {
  const { click, equal, render } = window.TestUtils;
  const container = document.getElementById('alerts-container');
  const buttons = document.querySelectorAll('.close-alert');

  equal(container.querySelectorAll('.alert').length, 3, 'Starts with 3 alerts');
  click(buttons[1]);
  equal(container.querySelectorAll('.alert').length, 2, 'One alert is removed after close click');
  equal(container.textContent.includes('Info alert'), false, 'Only clicked alert is removed');
  equal(container.textContent.includes('Success alert'), true, 'Other alerts remain');

  render('Dismissible Alerts Tests');
})();
