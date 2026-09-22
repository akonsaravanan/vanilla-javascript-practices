(() => {
  const { input, equal, render } = window.TestUtils;
  const textarea = document.getElementById('message-input');
  const counter = document.getElementById('counter');

  equal(counter.textContent.trim(), '0/20', 'Counter starts at 0/20');
  input(textarea, 'hello');
  equal(counter.textContent.trim(), '5/20', 'Counter updates on input');
  input(textarea, 'abcdefghijklmnopqrstuvwxyz');
  equal(textarea.value.length, 20, 'Textarea value is capped at 20 characters');
  equal(counter.textContent.trim(), '20/20', 'Counter shows max after capping');

  render('Character Counter Tests');
})();
