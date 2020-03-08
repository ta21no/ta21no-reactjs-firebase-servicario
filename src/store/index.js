
import { createStore, combineReducers } from "redux"
import serviceReducer from "../reducers";

const addLoggerToDispatch = store => {
  const dispatch = store.dispatch

  debugger

  return action => {
    debugger
    console.group(action.type)
    console.log('%c prev state', 'color: gray', store.getState())
    console.log('%c action', 'color: blue', action)
    const returnValue = dispatch(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}

const addPromiseToDispatch = store => {
  const dispatch = store.dispatch

  debugger

  return action => {
    debugger
    if (typeof action.then === 'function') {
      debugger
      return action.then((action) => {
        debugger
        dispatch(action)
      })
    }

    return dispatch(action);
  }


}

const initStore = () => {
debugger
  const serviceApp = combineReducers({
    service: serviceReducer
  })

  debugger
  const browserSupport = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  debugger
  const store = createStore(serviceApp, browserSupport)
  debugger
  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggerToDispatch(store);
  }
  store.dispatch = addPromiseToDispatch(store)

  return store
}

export default initStore