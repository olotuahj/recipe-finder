const urlParams = new URLSearchParams(window.location.search);

    const selectedRecipe = urlParams.get("recipe");

    if (selectedRecipe) {
        const recipeTitle = document.getElementById(selectedRecipe);

        if (recipeTitle) {
            recipeTitle.style.color = "red";
        }
    }