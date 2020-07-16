import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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

const App: React.SFC<IAppProps> = () => {
  return (
    // <Provider store={store} name="Cook Book">
    <Router>
      <Switch>
        <Route exact path="/" component={Recipes} />
        <Route exact path="/recipe/:recipeName/ingredients" component={Ingredients} />
      </Switch>
    </Router>
    // </Provider>
  );
};

interface IAppProps {}

// interface IAppState {

// }

export default App;
