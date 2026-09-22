(async function () {
  const { equal, click, render } = window.TestUtils;
  const inc = document.getElementById('increment');
  const dec = document.getElementById('decrement');
  const reset = document.getElementById('reset');
  const count = document.getElementById('count');

  equal(count.textContent.trim(), '0', 'Counter starts at 0');
  click(inc);
  equal(count.textContent.trim(), '1', 'Increment increases count to 1');
  click(inc);
  equal(count.textContent.trim(), '2', 'Increment increases count to 2');
  click(dec);
  equal(count.textContent.trim(), '1', 'Decrement decreases count to 1');
  click(reset);
  equal(count.textContent.trim(), '0', 'Reset sets count to 0');

  render('Counter Tests');
})();
