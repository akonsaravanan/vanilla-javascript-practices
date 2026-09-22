// TODO:
// 1. Expand the first accordion by default.
// 2. When an accordion title is clicked, collapse any already-open accordion.
// 3. Expand the clicked accordion.
// 4. Keep only one accordion open at a time.

const accordions = document.querySelectorAll('.accordian');
accordions[0].classList.add('active');

accordions.forEach((acc) => {
  const title = acc.querySelector('.title-section');
  title.addEventListener('click', () => {
    accordions.forEach((ele) => {
      ele.classList.remove('active');
    });
    acc.classList.add('active');
  });
});
