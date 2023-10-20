function applyItemList(item) {
  return `<li>${item}</li>`
}

function applyItemImage(item) {
  return `<li><img src="${item}" />`
}

function applyTemplate(recipe) {
  return `<img src="${recipe.image}" alt="${recipe.name}" />
          <div>
            <h1>${recipe.name}</h1>
            <p>${recipe.description}</p>
            <div>
              <h3>Ingredients</h3>
              <ul>
                ${ recipe.ingredients.map(applyItemList).join('')}
              </ul>
              
              <h3>Directions</h3>
              <ol>
                ${ recipe.directions.map(applyItemList).join('')}
              </ol>
              
              <h3>Photos</h3>
              <ul class="imgs">
                ${ recipe.images.map(applyItemImage).join('')}
              </ul>
            </div>
          </div>`
}

export function recipeDetailTemplate (recipe) {
  return applyTemplate(recipe);
};