import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userList",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
    
      // Here another advantage of reduxToolkit over redux is using immer library out of the box that is Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't actually mutate the state because it uses the Immer library, which detects changes to a "draft state" and produces a brand new immutable state based off those changes

      console.log("ADDING NEW USER" , action) // Here this action will consist of payload property which contain whatever parameter we passed to action creator when dispatching an action

      if(action.payload) state.push(action.payload)  // Here eventhough we are directly mutating the state but immer library under the hood will deal with it and update it immutabliy 

    },
    deleteUser: (state, action) => {
        console.log("DELETING THE USER" , action)
        state.splice(action.payload,1)
    },
    deleteAll: (state, action) => {

        console.log("DELETING ALL USERS", action)

        // return state = [];  // Here in delete we should not assign state to some empty array instead just delete the existing array so we should do :

        return [];   // Here returning empty array so now my state becomes empty

    },
  },
});

console.log(userSlice); // Here it consist of action creators which we can in dispatch and reducers which is used to configure store

export default userSlice.reducer; // Have to export the created slice reducer in order to be used in configuring store

export const { addUser , deleteUser , deleteAll } = userSlice.actions  // exporting action creators to be used by our app
export {userSlice}

/*

1. name: Specifies the name of the slice, which is used to generate action type strings. It's also useful for debugging.

2. initialState: Specifies the initial state of the slice.

3. reducers: An object where each key-value pair represents an action type and its corresponding reducer function.

After creating a slice, we can use the generated action creators (addUser, deleteUser, deleteAll) to dispatch actions specific to the userSlice state.

This way, each slice manages a specific portion of your Redux state, and the code related to that portion is more modular and easier to maintain.

*/
