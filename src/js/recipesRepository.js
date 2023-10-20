const recipesURL = 'data/recipes.json';

let recipesList = [];

function getRecipes(){
  return new Promise(function(resolve, reject){
    var oReq = new XMLHttpRequest();
    oReq.onload = function (e) {
      recipesList = e.target.response;
      resolve(recipesList);
    };
    oReq.open('GET', recipesURL, true);
    oReq.responseType = 'json';
    oReq.send();
  })
}

function getRecipeById(id){
  return new Promise(function(resolve, reject){
    var oReq = new XMLHttpRequest();
    oReq.onload = function (e) {
      recipesList = e.target.response;
      let recipe = {};
      recipesList.forEach(function (item, indice, array) {
        if (item.id == id)
          recipe = item;
      });
        
      resolve(recipe);
    };
    oReq.open('GET', recipesURL, true);
    oReq.responseType = 'json';
    oReq.send();
  })
}

export {getRecipes as default, recipesURL, getRecipeById};
export {recipesTemplate} from './recipesTemplate.js'
export {recipeDetailTemplate} from './recipeDetailTemplate.js'
