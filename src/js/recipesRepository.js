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

export {getRecipes as default, recipesURL};
export {recipesTemplate} from './recipesTemplate.js'
