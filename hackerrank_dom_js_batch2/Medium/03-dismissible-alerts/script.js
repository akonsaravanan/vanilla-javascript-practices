// TODO:
// Use event delegation to remove only the clicked alert.

const alertsContainer = document.getElementById('alerts-container');
alertsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-alert')) {
    e.target.parentElement.remove();
  }
});
