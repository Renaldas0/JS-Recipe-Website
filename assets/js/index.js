import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import ResultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// if (module.hot) {
//     module.hot.accept();
// }


// https://forkify-api.herokuapp.com/v2
// f5b6c833-b839-4f07-a521-e6fffdbc68d5

///////////////////////////////////////

async function showRecipe() {
    try {
        const id = window.location.hash.slice(1);

        if (!id) return;
        recipeView.renderSpinner();

        //1) Loading recipe
        await model.loadRecipe(id);

        //2) Rendering recipe
        recipeView.render(model.state.recipe);
    } catch (error) {
        recipeView.renderError()
    };

};

async function controlSearchResults() {
    try {
        ResultsView.renderSpinner();
        // 1) Get search query
        const query = searchView.getQuery();
        if (!query) return;


        // 2) Load search results
        await model.loadSearchResults(query);

        // 3) Render Results
        // ResultsView.render(model.state.search.results);
        ResultsView.render(model.getSearchResultsPage(1));

        // 4) Render pagination views
        paginationView.render(model.state.search)

    } catch (error) {
        console.log(error);
    };
};

function controlPagination(goToPage) {
    // 1) Render New Results
    ResultsView.render(model.getSearchResultsPage(goToPage));

    // 2) Render New pagination buttons
    paginationView.render(model.state.search)
}

function controlServings(newServings) {
    // Update the recipe servings (in state)
    model.updateServings(newServings);

    // Update the recipe View
    recipeView.render(model.state.recipe);
}

function init() {
    recipeView.addHandlerRender(showRecipe);
    recipeView.addHandlerUpdateServings(controlServings);
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerClick(controlPagination);
};
init();