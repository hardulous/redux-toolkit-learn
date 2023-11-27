import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import adminSlice from "../slices/adminSlice";
import reduxLogger from "redux-logger";
import postSlice from "../slices/PostSlice";
import { authorApi } from "../Rtk Query Slices/authorSlice";

let logger = reduxLogger;

// Similar to redux ensure that your custom middleware follows the middleware function signature of (store) => (next) => (action) => {}. This signature allows middleware to intercept and modify actions before they reach the reducer.
const customMiddleware = (store) => (next) => (action) => {
  console.log("Custom middleware triggered:", action);
  return next(action); // This call is important next(action) call is what allows the middleware chain to proceed. If you omit or forget to call next(action), the middleware chain will be interrupted, and the action won't continue to the next middleware or the reducer.
};

const store = configureStore({
  // Here this reducer property can be both single reducer function if root reducer is provided and object of slices reducers which under the hood converted to root reducer function by reduxToolkit by combineReducers() utility
  reducer: {
    usersList: userSlice,
    adminList: adminSlice,
    postList: postSlice,
    [authorApi.reducerPath]:authorApi.reducer     // When adding api slice must add reducer of that api slice , Here meaning of this [authorApi.reducerPath] whatever the name present in reducerPath proeprty when creating api by createApi method instead of hard coding the name
  },

  // This middleware property is a function that accept getDefaultMiddleware() as an argument which return the list of default middleware provided by redux toolkit and to add your own middleware just concat them with middlewares return by this getDefaultMiddleware()
  middleware: (getDefaultMiddleware) => {
    let defMiddlewares = getDefaultMiddleware();
    console.log(defMiddlewares);

    // return defMiddlewares.concat(logger, customMiddleware); // Remember that the order of middleware in the array matters. Middleware runs in the order they appear in the array. The getDefaultMiddleware() function provides a set of default middleware that should generally come before your custom middleware.

    // When using rtk query also need to add middleware of query
    return defMiddlewares.concat(authorApi.middleware)

  },
});

console.log(store.getState()); // Here similar to redux this will also show reducer property with corresponding state passed to configureStore()

export default store;

/* configureStore() parameter ::

1. reducer: This is where you provide the root reducer for your application. It's typically a combination of reducers created using combineReducers.

2. middleware: This is an optional parameter that allows you to customize the middleware applied to the store. By default, it includes redux-thunk for handling asynchronous actions.

3. devTools: This option determines whether the Redux DevTools extension should be enabled. It's usually enabled in development and disabled in production.

Once the store is configured, we can use it in your application to manage the global state by using the Provider component from react-redux to make the store available to your React components:

*/

// Here When ever we dispatch an action the flow of redux first come to this store and from there it will go to all reducers mentioned in combineReducers() , but each reducer decides whether to respond to a particular action based on the action type. When using the createSlice function from Redux Toolkit, the generated reducer only responds to the actions defined within that slice.
