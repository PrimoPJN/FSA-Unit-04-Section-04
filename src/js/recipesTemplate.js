const errorMessage = '<p>You do not have any recipes yet.</p>';

function applyTemplate(recipe) {
  return `<article>
            <a href="${recipe.link}"><img src="${recipe.image}" alt="${recipe.name}" /></a>
            <div>
                <h4><a href="recipe_detail.html?id=${recipe.id}">${recipe.name}</a></h4>
                <p>${recipe.description}</p>
            </div>
          </article>`
}

export function recipesTemplate (recipes) {
  if (recipes < 1) return errorMessage;

  return '' + recipes.map(applyTemplate).join('') + '';
};