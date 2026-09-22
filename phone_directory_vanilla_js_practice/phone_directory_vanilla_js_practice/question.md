# Phone Directory - Vanilla JavaScript Challenge

Build a small **Phone Directory / Contact Directory** using vanilla JavaScript.

## UI already provided
The page contains:
- three form fields:
  - Name
  - Email
  - Phone Number
- a **Submit** button
- a **Search** input
- a table with headers:
  - Name
  - Email
  - Phone Number

## Requirements

### 1) Validation
Validate all fields before adding a row.

#### Name rules
- required
- ignore leading/trailing spaces
- must contain only letters and spaces
- must be at least 3 characters after trimming

#### Email rules
- required
- must be a valid email format

#### Phone rules
- required
- must contain exactly 10 digits

### 2) Submit behavior
When the **Submit** button is clicked:
- validate all fields
- if invalid, show inline error messages in the error areas already present in HTML
- if valid:
  - add the contact to the internal data list
  - render a new row in the table body
  - clear inputs
  - clear previous errors

### 3) Search
The search input should filter visible rows.
- search by **name**, **email**, or **phone**
- name and email search should be case-insensitive
- clearing the search box should show all rows again

### 4) Sort by Name
Clicking the **Name** sort button should toggle sort order:
- first click → ascending by name
- second click → descending by name
- subsequent clicks continue toggling

### 5) Rendering model
Use a single in-memory array (for example `contacts`) as the source of truth.
Then render the visible table rows from that data.

## Implement in
- `src/script.js`
