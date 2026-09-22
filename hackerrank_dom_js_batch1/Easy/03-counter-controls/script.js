// TODO: Write your solution here.
// Requirements:
// 1) Increment the count.
// 2) Decrement the count.
// 3) Reset the count to 0.
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const count = document.getElementById('count');

increment.onclick = () => {
  const value = +count.textContent + 1;
  count.textContent = value;
};
decrement.onclick = () => {
  const value = +count.textContent > 0 ? +count.textContent - 1 : 0;
  count.textContent = value;
};
reset.onclick = () => {
  count.textContent = 0;
};
