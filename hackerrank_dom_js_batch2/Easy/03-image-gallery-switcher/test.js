(() => {
  const { click, equal, render } = window.TestUtils;
  const preview = document.getElementById('preview');
  const thumbs = document.querySelectorAll('.thumb');

  equal(preview.textContent.trim(), 'Image 1', 'Preview starts with Image 1');
  equal(document.querySelectorAll('.thumb.active').length, 1, 'One thumb is active on load');

  click(thumbs[2]);
  equal(preview.textContent.trim(), 'Image 3', 'Preview updates to Image 3');
  equal(document.querySelectorAll('.thumb.active').length, 1, 'Still only one active thumb');
  equal(document.querySelector('.thumb.active').dataset.label, 'Image 3', 'Third thumb becomes active');

  render('Gallery Tests');
})();
