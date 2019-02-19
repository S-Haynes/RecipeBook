class UI {
  static searchRecipes(e) {
    e.preventDefault();

    const searchTerm = document.querySelector("#search-term").value;

    axios
      .get(
        `https://api.edamam.com/search?q=${searchTerm}&app_id=dbf86cd5&app_key=86999e439416cc6d0f9a9a3b54a21f4d`
      )
      .then(res => {
        UI.displaySearchedRecipes(res.data.hits);
      })
      .catch(err => console.log(err));
  }

  static displaySearchedRecipes(recipes) {
    const recipeList = document.querySelector("#recipe-list");
    let content = "";

    recipes.forEach(recipe => {
      content += `
      <a href="/search/${
        recipe.recipe.label
      }"><img class="col-3 mx-auto mt-4 mb-4 img-fluid" src="${
        recipe.recipe.image
      }"></img></a>
      `;
    });

    recipeList.innerHTML = content;
    console.log(recipes);
  }
}

// Event Listeners
document
  .querySelector("#search-form")
  .addEventListener("submit", UI.searchRecipes);
