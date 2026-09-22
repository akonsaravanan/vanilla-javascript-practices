// TODO: Write your solution here.
// Requirements:
// 1) Open the first accordion in each .accordion-group by default.
// 2) Only one accordion per group can be active.
// 3) Clicking in one group must not affect the other group.

const { version } = require('react');

const acc_grp = document.querySelectorAll('.accordion-group');
acc_grp[0].querySelectorAll('.accordian')[0].classList.add('active');
acc_grp[1].querySelectorAll('.accordian')[0].classList.add('active');

acc_grp[0].querySelectorAll('.accordian').forEach((accordian) => {
  const title = accordian.querySelector('.title-section');
  title.addEventListener('click', () => {
    acc_grp[0].querySelectorAll('.accordian').forEach((accord) => {
      accord.classList.remove('active');
    });
    accordian.classList.add('active');
  });
});
acc_grp[1].querySelectorAll('.accordian').forEach((accordian) => {
  const title = accordian.querySelector('.title-section');
  title.addEventListener('click', () => {
    acc_grp[1].querySelectorAll('.accordian').forEach((accord) => {
      accord.classList.remove('active');
    });
    accordian.classList.add('active');
  });
});

// compact version
const groups = document.querySelectorAll('.accordion-group');

groups.forEach((group) => {
  const accordions = group.querySelectorAll('.accordian');

  if (accordions.length > 0) {
    accordions[0].classList.add('active');
  }

  accordions.forEach((accordion) => {
    const title = accordion.querySelector('.title-section');

    title.addEventListener('click', () => {
      accordions.forEach((item) => {
        item.classList.remove('active');
      });

      accordion.classList.add('active');
    });
  });
});
