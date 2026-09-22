const accordions = document.querySelectorAll('.accordion');

// Hide all first
accordions.forEach((item) => {
  item.querySelector('.description').style.display = 'none';
  item.querySelector('.expand-icon').style.display = 'inline';
  item.querySelector('.collapse-icon').style.display = 'none';
});

// Open first by default
accordions[0].querySelector('.description').style.display = 'block';
accordions[0].querySelector('.expand-icon').style.display = 'none';
accordions[0].querySelector('.collapse-icon').style.display = 'inline';

accordions.forEach((acc) => {
  const title = acc.querySelector('.title-section');

  title.addEventListener('click', () => {
    const isOpen = acc.querySelector('.description').style.display === 'block';
    // Close all
    accordions.forEach((item) => {
      item.querySelector('.description').style.display = 'none';
      item.querySelector('.expand-icon').style.display = 'inline';
      item.querySelector('.collapse-icon').style.display = 'none';
    });

    // Open only if it was previously closed
    if (!isOpen) {
      acc.querySelector('.description').style.display = 'block';
      acc.querySelector('.expand-icon').style.display = 'none';
      acc.querySelector('.collapse-icon').style.display = 'inline';
    }
  });
});
