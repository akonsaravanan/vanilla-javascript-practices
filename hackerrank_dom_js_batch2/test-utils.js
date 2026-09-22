window.TestUtils = (() => {
  const results = [];
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  function log(pass, message, detail) {
    results.push({ pass, message, detail: detail || '' });
  }

  function assert(condition, message, detail = '') {
    log(!!condition, message, detail);
  }

  function equal(actual, expected, message) {
    const pass = actual === expected;
    log(pass, message, pass ? '' : `Expected: ${expected}, Actual: ${actual}`);
  }

  function click(el) {
    el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
  }

  function input(el, value) {
    el.value = value;
    el.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function keydown(target, key) {
    target.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
  }

  function visible(el) {
    if (!el) return false;
    const style = window.getComputedStyle(el);
    return style.display !== 'none' && style.visibility !== 'hidden' && !el.hidden;
  }

  function render(title = 'Test Results') {
    const root = document.getElementById('test-results');
    const passed = results.filter(r => r.pass).length;
    const failed = results.length - passed;
    const allPassed = failed === 0;
    document.body.dataset.testStatus = allPassed ? 'passed' : 'failed';

    if (!root) return { passed, failed, total: results.length };
    root.innerHTML = '';

    const summary = document.createElement('div');
    summary.textContent = `${title}: ${passed}/${results.length} passed, ${failed} failed`;
    summary.style.padding = '12px';
    summary.style.marginBottom = '12px';
    summary.style.background = allPassed ? '#dcfce7' : '#fee2e2';
    summary.style.border = `1px solid ${allPassed ? '#22c55e' : '#ef4444'}`;
    root.appendChild(summary);

    const list = document.createElement('ol');
    results.forEach(r => {
      const li = document.createElement('li');
      li.style.color = r.pass ? '#15803d' : '#b91c1c';
      li.style.marginBottom = '8px';
      li.textContent = `${r.pass ? 'PASS' : 'FAIL'} - ${r.message}${r.detail ? ' | ' + r.detail : ''}`;
      list.appendChild(li);
    });
    root.appendChild(list);
    return { passed, failed, total: results.length };
  }

  return { assert, equal, click, input, keydown, sleep, visible, render };
})();
