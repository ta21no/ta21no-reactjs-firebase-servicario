
import { createStore, combineReducers } from "redux"
import serviceReducer from "../reducers";

const addLoggerToDispatch = store => {
  return dispatch => {
    return action => {
      console.group(action.type)
      console.log('%c prev state', 'color: gray', store.getState())
      console.log('%c action', 'color: blue', action)
      const returnValue = dispatch(action)
      console.log('%c next state', 'color: green', store.getState())
      console.groupEnd(action.type)
      return returnValue
    }
  }
}

const addPromiseToDispatch = store => {
  debugger
  return dispatch => {
    return action => {
      if (typeof action.then === 'function') {
        return action.then((action) => {
          dispatch(action)
        })
      }

      return dispatch(action);
    }
  }
}

const applyMiddlewares = (store, middlewares) => {
  debugger
  middlewares.slice().reverse().forEach(middleware => {
    debugger
    store.dispatch = middleware(store)(store.dispatch);
  })
}

const initStore = () => {
  const middlewares = [addPromiseToDispatch]
  const serviceApp = combineReducers({
    service: serviceReducer
  })

  const browserSupport = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(serviceApp, browserSupport)
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(addLoggerToDispatch);
  }

  applyMiddlewares(store, middlewares)

  return store
}

export default initStore