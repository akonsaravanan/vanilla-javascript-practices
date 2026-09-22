const list = document.getElementById('page-list');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

const itemsPerPage = 3;
const totalPages = Math.ceil(window.ITEMS.length / itemsPerPage);

let currentPage = 1;

function renderPage() {
  list.innerHTML = '';

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const currentItems = window.ITEMS.slice(start, end);

  currentItems.forEach((item) => {
    list.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
  });

  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderPage();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderPage();
  }
});

// Initial render
renderPage();
// TODO:
// Implement pagination for 3 items per page.
