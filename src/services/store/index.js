import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";

const store = configureStore({
  // Here this reducer property can be both single reducer function if root reducer is provided and object of slices reducers which under the hood converted to root reducer function by reduxToolkit by combineReducers() utility
  reducer: {
    usersList: userSlice,
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

// Here When ever we dispatch an action the flow of redux first come to this store and then based on action type the store will decide which slice reducer does this action type belongs to and then the flow will go to that slice reducer to update the state
