// -------------------- SIMPLE SEARCH FUNCTION (YOURS) --------------------
// Select the search input
const searchInput = document.getElementById("search");

// Listen for input typing
searchInput.addEventListener("input", function () {
  const filter = searchInput.value.toLowerCase(); // convert to lowercase
  const recipeBoxes = document.querySelectorAll(".recipe-box"); // get all recipe boxes

  // Loop through all recipe boxes
  recipeBoxes.forEach(box => {
    const text = box.textContent.toLowerCase(); 
    if (text.includes(filter)) {
      box.style.display = "block"; // show if match
    } else {
      box.style.display = "none"; // hide if not match
    }
  });
});


const maxPrepSelect = document.getElementById('max-prep-time');
const maxCookSelect = document.getElementById('max-cook-time');
const recipeBoxes = document.querySelectorAll('.recipe-box');

function parseIntOrNull(val) {
  if (!val) return null;
  const n = parseInt(val, 10);
  return isNaN(n)? null: n;
} 

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const maxPrep = parseIntOrNull(maxPrepSelect.value);
  const maxCook = parseIntOrNull(maxCookSelect.value);
  

  recipeBoxes.forEach( box => {
    const prep = parseIntOrNull(box.dataset.prep);
    const cook = parseIntOrNull(box.dataset.cook);

     const text = box.textContent.toLowerCase();
     const matchesText = query === '' || text.includes(query);

     const matchesPrep = (maxPrep === null) || (prep !== null && prep <= maxPrep);
     const matchesCook = (maxCook === null) || (cook !== null && cook <= maxCook);

     if (matchesText && matchesPrep && matchesCook) {
      box.style.display = 'block';
     } else {
      box.style.display ='none';
     }
  });
}

searchInput.addEventListener('input', applyFilters);
maxPrepSelect.addEventListener('change', applyFilters);
maxCookSelect.addEventListener('change', applyFilters);

document.addEventListener('DOMContentLoaded', applyFilters);