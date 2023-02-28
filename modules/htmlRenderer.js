export const renderItems = (items, fallbackMessage = "No results") => {
  const tableEl = document.querySelector(".table");
  const tableBodyEl = document.querySelector(".table__body");
  const alertEl = document.querySelector(".alert");

  tableBodyEl.innerHTML = "";

  if (items.length) {
    alertEl.classList.remove("alert_visible");

    items.forEach((item) => {
      tableEl.style.display = "table";

      const tableRowEl = document.createElement("tr");
      tableRowEl.className = "table__row";

      const tableDataIdEl = document.createElement("td");
      tableDataIdEl.className = "table__data";
      tableDataIdEl.innerText = item.id;

      const tableDataNameEl = document.createElement("td");
      tableDataNameEl.className = "table__data";
      tableDataNameEl.innerText = item.name;

      const tableDataSurnameEl = document.createElement("td");
      tableDataSurnameEl.className = "table__data";
      tableDataSurnameEl.innerText = item.surname;

      const tableDataAgeEl = document.createElement("td");
      tableDataAgeEl.className = "table__data";
      tableDataAgeEl.innerText = item.age;

      tableRowEl.appendChild(tableDataIdEl);
      tableRowEl.appendChild(tableDataNameEl);
      tableRowEl.appendChild(tableDataSurnameEl);
      tableRowEl.appendChild(tableDataAgeEl);

      tableBodyEl.appendChild(tableRowEl);
    });
  } else {
    tableEl.style.display = "none";
    alertEl.classList.add("alert_visible");
    alertEl.innerText = fallbackMessage;
  }
};

export const handleSearch = (attendees, searchTerm, filterBy) => {
  let filteredResults = [];

  switch (filterBy) {
    case "":
      filteredResults = attendees.filter((attendee) =>
        attendee.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      break;
    case "age_ascending":
      filteredResults = attendees
        .filter((attendee) =>
          attendee.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => a.age - b.age);
      break;
    case "age_descending":
      filteredResults = attendees
        .filter((attendee) =>
          attendee.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => b.age - a.age);
      break;
  }

  return filteredResults;
};
