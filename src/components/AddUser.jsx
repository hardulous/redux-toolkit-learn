import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../services/slices/userSlice";

const AddUser = ({ open, close }) => {

  const dispatch = useDispatch();   // Similar to redux one used to dispatch an action to change redux state
  const [newUser, setnewUser] = useState("");

  const handleAdd = () => {

    dispatch(addUser(newUser));  // Here now no need to define custom action creator and then use it like we do in simple redux , in rtk just used the one exported by userList slice 
    close();

  };

  return (
    <div className={`add-user-modal ${open ? "show" : "hide"}`}>
      <div className="add-user-form">
        <h4>Add New User</h4>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={newUser}
          onChange={(e) => setnewUser(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default AddUser;


// Here unlike in redux where we define our own action creators in rtk the action creator are automatically generated which accept only one parameter which correspond to .payload property of action , So to pass multiple parameters to an action creator in rtk pass an object as the payload and include multiple properties within that object. EX : actionCreator({ param1, param2, param3, ...etc }) and in reducer just destructure them 