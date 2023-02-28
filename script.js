// Imports
import { attendees } from "./data/data.js";
import { renderItems, handleSearch } from "./modules/htmlRenderer.js";
// Variables
const inputSearchEl = document.querySelector(".search-input");
const selectEl = document.querySelector(".select");

// Functions that are executed on body load
renderItems(attendees);

// Event listeners
inputSearchEl.addEventListener("keyup", (event) => {
  const searchTerm = event.target.value;
  const filterBy = selectEl.value;

  const filteredResults = handleSearch(attendees, searchTerm, filterBy);

  renderItems(
    filteredResults,
    "There are no attendees according to the entered term"
  );
});

selectEl.addEventListener("change", (event) => {
  const searchTerm = inputSearchEl.value;
  const filterBy = event.target.value;

  const filteredResults = handleSearch(attendees, searchTerm, filterBy);

  renderItems(
    filteredResults,
    "There are no attendees according to the entered term"
  );
});
