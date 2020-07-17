import React, { useState, useEffect, SFC } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
  useRouteMatch,
} from 'react-router-dom';
import { Recipe } from './types';
import mockRecipe from './mockData/recipes.json';

// import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { applyMiddleware, createStore } from 'redux';

// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './reducers/rootReducer';
// import rootSaga from './sagas/rootSaga';

import Ingredients from './components/ingredients';
import Recipes from './components/recipes';

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// sagaMiddleware.run(rootSaga);

const App: SFC<IAppProps> = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const getRecipes = async () => {
    // let r = await fetch('/api/recipe/:recipe/Recipes');
    // let Recipes = r.json();
    const recipes = mockRecipe.recipes;
    setRecipes(recipes);
  };

  useEffect(() => {
    getRecipes();
  }, []);
  console.log(recipes);
  // const match = useRouteMatch();

  // const matchRecipe = recipes.find(r => r.name === match.params.name);
  return (
    // <Provider store={store} name="Cook Book">
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Recipes recipes={recipes} />} />
        <Route
          exact
          path="/recipe/:recipeId/ingredients"
          render={({ match }) => {
            const recipe = recipes.find((r: Recipe) => r.id === match.params.recipeId);
            return recipe ? (
              <Ingredients ingredients={recipe.ingredients} />
            ) : (
              <div>Recipe is undefined</div>
            );
          }}
        />
      </Switch>
    </Router>
    // </Provider>
  );
};

interface IAppProps {}

// const test = ({match}) => (
//   <div>
//     {match.params.recipeId}
//   </div>
// )
// interface IAppState {

// }

export default App;
