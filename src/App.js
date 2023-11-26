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

2. ########## 

*/