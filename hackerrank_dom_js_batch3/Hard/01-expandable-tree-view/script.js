// TODO:
// Toggle only the clicked parent node using event delegation.
const labels = document.querySelectorAll('.label');

labels.forEach((label) => {
  label.addEventListener('click', function () {
    const parentNode = label.closest('.node');

    // Check if it has children
    const children = parentNode.querySelector('.children');

    if (!children) return; // do nothing if no children

    // Toggle visibility
    parentNode.classList.toggle('open');
  });
});
