// TODO: Write your solution here.
// Requirements:
// 1) Open the first accordion by default.
// 2) Only one accordion should stay open at a time.
// 3) Clicking an accordion should open it and close the others.

const accordians = document.querySelectorAll('.accordian');
accordians[0].classList.add('active');

accordians.forEach((accordian) => {
  const title = accordian.querySelector('.title-section');
  title.addEventListener('click', () => {
    accordians.forEach((accord) => {
      accord.classList.remove('active');
    });
    accordian.classList.add('active');
  });
});
