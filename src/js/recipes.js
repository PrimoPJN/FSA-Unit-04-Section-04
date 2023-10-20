import getRecipe, * as recipesRepository from './recipesRepository.js';

var data = { listItems: [] };

function render() {
  var list = document.querySelector('#recipesList');
  if (!list) return;
  list.innerHTML = recipesRepository.recipesTemplate(data.listItems);
};

getRecipe().then((recipes) => {
  data.listItems = recipes;
  render();
});
