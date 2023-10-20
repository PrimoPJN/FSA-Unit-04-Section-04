import * as recipesRepository from './recipesRepository.js';

const params = new URLSearchParams(window.location.search)
let id = params.get('id');

function render(recipe) {
  var recipeDetail = document.querySelector('#recipeDetail');
  if (!recipeDetail) return;
    
  if (recipe == {}) {
    recipeDetail.innerHTML = '<p>You do not have any recipe.</p>';
  } else {
    recipeDetail.innerHTML = recipesRepository.recipeDetailTemplate(recipe);
  }
};


recipesRepository.getRecipeById(id).then((recipe) => {
  render(recipe);
});

