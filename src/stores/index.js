const redux = require('redux');
const reducers = require('../reducers');
import {navigateToHome, navigateToGrid} from '../actions/const';

module.exports = function(initialState) {
  const store = redux.createStore(reducers, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
};
store.dispatch(navigateToHome());
store.dispatch(navigateToGrid({id : "11",
            activityName : "3-12 Top Holding IV pm SLB1",
            activityDate : "19/06/16",
          }));
