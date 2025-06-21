// script.js

// Basic search functionality for filtering list items by text input
function setupSearch(inputId, listSelector) {
  const input = document.getElementById(inputId);
  if (!input) return;

  input.addEventListener("input", function () {
    const filter = input.value.toLowerCase();
    const items = document.querySelectorAll(listSelector);

    items.forEach(function (item) {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(filter) ? "list-item" : "none";
    });
  });
}

// Example usage — you must have:
// <input id="search-bar" type="text" placeholder="Search...">
// <ul><li class="search-item">Opportunity 1</li></ul>
document.addEventListener("DOMContentLoaded", function () {
  setupSearch("search-bar", ".search-item");
})

;function copyList() {
  const items = document.querySelectorAll("#research-list li");
  const text = Array.from(items).map(li => li.textContent).join("\\n");
  navigator.clipboard.writeText(text).then(() => alert("List copied to clipboard!"));
}

function downloadList() {
  const items = document.querySelectorAll("#research-list li");
  const text = Array.from(items).map(li => li.textContent).join("\\n");
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "STEM_Research_Programs.txt";
  link.click();
}
