(() => {
  const { equal, click, render } = window.TestUtils;
  const input = document.getElementById('password-input');
  const btn = document.getElementById('toggle-password');

  equal(input.type, 'password', 'Password starts hidden');
  equal(btn.textContent.trim(), 'Show', 'Button starts as Show');

  click(btn);
  equal(input.type, 'text', 'Password becomes visible after first click');
  equal(btn.textContent.trim(), 'Hide', 'Button text becomes Hide');

  click(btn);
  equal(input.type, 'password', 'Password becomes hidden after second click');
  equal(btn.textContent.trim(), 'Show', 'Button text becomes Show again');

  render('Show Hide Password Tests');
})();
