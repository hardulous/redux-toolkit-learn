import UserList from "./components/UserList";
import "./App.css"

function App() {
  return (
    <div className="App">
      
      <h1>REDUX TOOLKIT</h1>

      <UserList/>

    </div>
  );
}

export default App;


// ###################### REDUX TOOLKIT #############################

/*

Redux toolkit is the official , opinionated , batteries-included toolset for efficient modern redux development. It is also intended to be the standard way to write redux login in your application. 

Redux is great , but it does have a few shortcomings ::

1. Configuring redux in an app seems complicated

2. In addition to redux , a lot of other packages like thunk , immer , redux-devtools have to be installed to get redux to do something useful 

3. Redux requires to much boilerplate code like action , action object , action creator , swith statement in reducer and then repeating this whole task for every new state transition is very much pain. 

Redux toolkit serves as an abstraction over redux that is it hides the difficult parts ensuring you have a good developer experience.

Redux itself is a independent library like react so it does not dependent on react or can be used with other ui library like vue.js, angular etc , But in order to use redux with react app we have to use react-redux library as well which provides bindings to use react and redux (toolkit) in an app.

To install redux tookit command is "npm install @reduxjs/toolkit" and to work it with react install react-redux package as well

1. ########### Slice 

A slice is a function that accepts slice name , an initial state , and object of reducer functions and it automatically generates action creators and action types that correspond to that reducer and state , After creating a slice, we can use the generated action creators in our components directly to dispatch actions to update the state. A slice can be created by createSlice() of redux toolkit.

2. ########### Extra Reducer

ExtraReducers is used to add additional reducer logic for actions that are not defined within the reducers field. This is useful when you need to handle actions from other slices or actions that are dispatched globally in your Redux store. Example in userSlice we have deleteAll action but now we need this same action to be performed in some other slice let say adminSlice so in this case instead of repeating the reducer and logic code again we will just to extraReducer field of slice to handle this case as actions once dispatched it one by one go to all slices or reducers. 

If action is supposed to be handled by one reducer then use reducers but if action is supposed to be handled by multiple reducers then use extraReducers and to trigger or dispatch that action from other slice reducer "slice.actions.action()"

But note if in a slice we have handled a action case in both reducer and extra reducer then priority will be given to reducer and extra redcuer will be ignored 

One problem with extra reducer is that if we have defined extraReducer for deleteAll action in adminSlice present in userSlice then it will work fine but if reducer or action of deleteAll has been removed from userSlice so in this case handling the case of deleteAll action in adminSlice will generate error as this action no longer exist so to solve the case of action which are not defined in any slice or those which are generated globally we use "createAction()" method

*/