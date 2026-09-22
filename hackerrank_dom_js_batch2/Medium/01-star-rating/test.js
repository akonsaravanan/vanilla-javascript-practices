(() => {
  const { click, equal, render } = window.TestUtils;
  const stars = document.querySelectorAll('.star');
  const value = document.getElementById('rating-value');

  equal(value.textContent.trim(), '0', 'Rating starts at 0');
  click(stars[2]);
  equal(value.textContent.trim(), '3', 'Rating becomes 3 after clicking third star');
  equal(document.querySelectorAll('.star.active').length, 3, 'First 3 stars become active');

  click(stars[4]);
  equal(value.textContent.trim(), '5', 'Rating becomes 5 after clicking fifth star');
  equal(document.querySelectorAll('.star.active').length, 5, 'All 5 stars become active');

  render('Star Rating Tests');
})();
