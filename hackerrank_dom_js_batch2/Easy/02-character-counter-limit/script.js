// TODO:
// Update the counter on input and enforce a max of 20 characters.
const textArea = document.getElementById('message-input');
const counter = document.getElementById('counter');

textArea.setAttribute('maxLength', 20);

textArea.oninput = (e) => {
  console.log(e);
  let value = textArea.value.trim().slice(0, 20);
  let valueLength = value?.length ? value?.length : 0;
  if (valueLength > 20) {
    valueLength = 20;
  }
  textArea.value = value;
  counter.textContent = `${valueLength}/20`;
};
