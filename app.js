const app = document.getElementById("app");
const clarityDisplay = document.getElementById("clarity-level");

// Load pages
document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => loadPage(btn.dataset.page));
});

function loadPage(page) {
  fetch(page + ".txt")
    .then(r => r.text())
    .then(t => {
      app.textContent = t;
      updateClarity(page);
    })
    .catch(() => app.textContent = "Fehler beim Laden.");
}

// Klarheitspegel — 0 bis 3
function updateClarity(page) {
  const scoreMap = {
    morning: 3,
    reset: 3,
    check: 2,
    evening: 2,
    daily: 1
  };

  const value = scoreMap[page] || 0;
  clarityDisplay.textContent = "Klarheitspegel: " + value + " / 3";

  localStorage.setItem("clarity", value);
}

// Load last clarity level
const last = localStorage.getItem("clarity");
if (last) clarityDisplay.textContent = "Klarheitspegel: " + last + " / 3";
