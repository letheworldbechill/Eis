// Page Loader
const app = document.getElementById("app");

document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => loadPage(btn.dataset.page));
});

function loadPage(page) {
  fetch(page + ".txt")
    .then(r => r.text())
    .then(t => { app.textContent = t; })
    .catch(()=>{ app.textContent = "Fehler beim Laden."; });
}
