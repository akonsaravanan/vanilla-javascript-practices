// TODO: Write your solution here.
// Requirements:
// 1) Exactly one tab should be active.
// 2) Exactly one content panel should be visible.
// 3) Clicking a tab should activate only that tab and its matching content.
// TODO:
// Show only the matching content when a tab is clicked.
// First tab/content should be active/visible by default.

// const tabs = document.querySelectorAll('.tab');
// const content = document.querySelectorAll('.content');

// tabs.forEach((tab, index) => {
//   tab.addEventListener('click', () => {
//     tabs.forEach((item) => {
//       item.classList.remove('active');
//     });
//     tab.classList.add('active');
//     content.forEach((ele, i) => {
//       if (index === i) {
//         ele.classList.add('visible');
//       } else {
//         ele.classList.remove('visible');
//       }
//     });
//   });
// });

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    contents.forEach((content) => content.classList.remove('visible'));

    tab.classList.add('active');
    contents[index].classList.add('visible');
  });
});