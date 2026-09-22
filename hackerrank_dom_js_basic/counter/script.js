// TODO:
// Increment, decrement, and reset the counter value shown in #count.
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
