import { createSlice } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { clearAllUsers } from "../actions";

const adminSlice = createSlice({
  name: "adminList",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      console.log("ADDING NEW USER ADMIN", action);

      if (action.payload) state.push(action.payload);
    },
    deleteUser: (state, action) => {
      console.log("DELETING THE USER ADMIN", action);
      state.splice(action.payload, 1);
    },
    deleteAll: (state, action) => {
      console.log("DELETING ALL USERS ADMIN", action);

      return [];
    },
  },
  // Here builder object is used to handle those action cases which is not defined in above reducers
  extraReducers: (builder) => {
    // Here addCase() is used to handle a case in which we pass action of other reducer which we want to handle nad 2nd is callback function to execute code when that case hits

    builder
      .addCase(userSlice.actions.deleteAll, (state, action) => {
        console.log("EXTRA REDUCER FROM ADMIN", action);
        return []; // Here we are modifying state of adminList slice not of userList slice
      })
     // Handling case of custom global action not defined in any reducer  
      .addCase(clearAllUsers, (state, action) => {
        console.log("EXTRA REDUCER FROM ADMIN WITH CUSTOM ACTION", action);
        return []; // Here we are modifying state of adminList slice not of userList slice
      });

      // Here to add multiple case we do chanining of addCase()
  },
});

export default adminSlice.reducer;
