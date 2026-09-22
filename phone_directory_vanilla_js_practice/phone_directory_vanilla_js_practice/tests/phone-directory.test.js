const { fireEvent, getByTestId, within } = require('@testing-library/dom');
require('@testing-library/jest-dom');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const path = require('path');

const BASE = path.resolve(__dirname, '../src');

let dom;
let body;

async function loadDom() {
  const virtualConsole = new jsdom.VirtualConsole();
  virtualConsole.on('error', console.error);

  dom = await JSDOM.fromFile(`${BASE}/index.html`, {
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
    virtualConsole,
  });

  await new Promise((resolve) => {
    dom.window.addEventListener('load', () => setTimeout(resolve, 20));
  });

  body = dom.window.document.body;
}

function fillValidForm() {
  fireEvent.input(getByTestId(body, 'name-input'), { target: { value: 'Saravanan R' } });
  fireEvent.input(getByTestId(body, 'email-input'), { target: { value: 'saravanan@example.com' } });
  fireEvent.input(getByTestId(body, 'phone-input'), { target: { value: '9876543210' } });
}

function fillSecondValidForm() {
  fireEvent.input(getByTestId(body, 'name-input'), { target: { value: 'Kannan T' } });
  fireEvent.input(getByTestId(body, 'email-input'), { target: { value: 'kannan@example.com' } });
  fireEvent.input(getByTestId(body, 'phone-input'), { target: { value: '9123456780' } });
}

function fillThirdValidForm() {
  fireEvent.input(getByTestId(body, 'name-input'), { target: { value: 'Vimalraj Kanagaraj' } });
  fireEvent.input(getByTestId(body, 'email-input'), { target: { value: 'vimal@example.com' } });
  fireEvent.input(getByTestId(body, 'phone-input'), { target: { value: '9988776655' } });
}

describe('Phone Directory - Vanilla JS', () => {
  beforeEach(async () => {
    await loadDom();
  });

  it('starts with an empty table body', () => {
    const tbody = getByTestId(body, 'directory-body');
    expect(tbody.children.length).toBe(0);
  });

  it('shows validation errors and does not add row for invalid inputs', () => {
    fireEvent.input(getByTestId(body, 'name-input'), { target: { value: '  ' } });
    fireEvent.input(getByTestId(body, 'email-input'), { target: { value: 'abc' } });
    fireEvent.input(getByTestId(body, 'phone-input'), { target: { value: '12345' } });

    fireEvent.click(getByTestId(body, 'submit-btn'));

    expect(getByTestId(body, 'name-error').textContent.trim().length).toBeGreaterThan(0);
    expect(getByTestId(body, 'email-error').textContent.trim().length).toBeGreaterThan(0);
    expect(getByTestId(body, 'phone-error').textContent.trim().length).toBeGreaterThan(0);

    const tbody = getByTestId(body, 'directory-body');
    expect(tbody.children.length).toBe(0);
  });

  it('adds a row for valid input and clears the form/errors', () => {
    fillValidForm();
    fireEvent.click(getByTestId(body, 'submit-btn'));

    const tbody = getByTestId(body, 'directory-body');
    expect(tbody.children.length).toBe(1);

    const row = tbody.querySelector('tr');
    const cells = row.querySelectorAll('td');
    expect(cells[0]).toHaveTextContent('Saravanan R');
    expect(cells[1]).toHaveTextContent('saravanan@example.com');
    expect(cells[2]).toHaveTextContent('9876543210');

    expect(getByTestId(body, 'name-input')).toHaveValue('');
    expect(getByTestId(body, 'email-input')).toHaveValue('');
    expect(getByTestId(body, 'phone-input')).toHaveValue('');

    expect(getByTestId(body, 'name-error')).toHaveTextContent('');
    expect(getByTestId(body, 'email-error')).toHaveTextContent('');
    expect(getByTestId(body, 'phone-error')).toHaveTextContent('');
  });

  it('supports adding multiple rows', () => {
    fillValidForm();
    fireEvent.click(getByTestId(body, 'submit-btn'));
    fillSecondValidForm();
    fireEvent.click(getByTestId(body, 'submit-btn'));
    fillThirdValidForm();
    fireEvent.click(getByTestId(body, 'submit-btn'));

    const tbody = getByTestId(body, 'directory-body');
    expect(tbody.children.length).toBe(3);
  });

  it('filters rows by search input using name, email, or phone', () => {
    fillValidForm();
    fireEvent.click(getByTestId(body, 'submit-btn'));
    fillSecondValidForm();
    fireEvent.click(getByTestId(body, 'submit-btn'));
    fillThirdValidForm();
    fireEvent.click(getByTestId(body, 'submit-btn'));

    const search = getByTestId(body, 'search-input');
    const tbody = getByTestId(body, 'directory-body');

    fireEvent.input(search, { target: { value: 'kannan' } });
    expect(tbody.children.length).toBe(1);
    expect(tbody).toHaveTextContent('Kannan T');

    fireEvent.input(search, { target: { value: 'vimal@example.com' } });
    expect(tbody.children.length).toBe(1);
    expect(tbody).toHaveTextContent('Vimalraj Kanagaraj');

    fireEvent.input(search, { target: { value: '9876' } });
    expect(tbody.children.length).toBe(1);
    expect(tbody).toHaveTextContent('Saravanan R');

    fireEvent.input(search, { target: { value: '' } });
    expect(tbody.children.length).toBe(3);
  });

  it('sorts by name and toggles ascending/descending on repeated clicks', () => {
    fillThirdValidForm();
    fireEvent.click(getByTestId(body, 'submit-btn'));
    fillValidForm();
    fireEvent.click(getByTestId(body, 'submit-btn'));
    fillSecondValidForm();
    fireEvent.click(getByTestId(body, 'submit-btn'));

    const sortBtn = getByTestId(body, 'sort-name-btn');
    const tbody = getByTestId(body, 'directory-body');

    // First click -> ascending
    fireEvent.click(sortBtn);
    let rows = tbody.querySelectorAll('tr');
    let names = Array.from(rows).map((row) => row.querySelectorAll('td')[0].textContent.trim());
    expect(names).toEqual(['Kannan T', 'Saravanan R', 'Vimalraj Kanagaraj']);

    // Second click -> descending
    fireEvent.click(sortBtn);
    rows = tbody.querySelectorAll('tr');
    names = Array.from(rows).map((row) => row.querySelectorAll('td')[0].textContent.trim());
    expect(names).toEqual(['Vimalraj Kanagaraj', 'Saravanan R', 'Kannan T']);
  });

  it('keeps search results renderable after sorting', () => {
    fillThirdValidForm();
    fireEvent.click(getByTestId(body, 'submit-btn'));
    fillValidForm();
    fireEvent.click(getByTestId(body, 'submit-btn'));
    fillSecondValidForm();
    fireEvent.click(getByTestId(body, 'submit-btn'));

    fireEvent.click(getByTestId(body, 'sort-name-btn'));
    fireEvent.input(getByTestId(body, 'search-input'), { target: { value: 'saravanan' } });

    const tbody = getByTestId(body, 'directory-body');
    expect(tbody.children.length).toBe(1);
    expect(tbody).toHaveTextContent('Saravanan R');
  });
});
