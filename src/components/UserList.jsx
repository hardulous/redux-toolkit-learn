import React, { useState } from "react";
import DeleteUser from "./DeleteAllUser";
import AddUser from "./AddUser";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../services/slices/userSlice";

const UserList = () => {
 
  const dispatch = useDispatch()
  const [addUser, setaddUser] = useState(false);
  const userList = useSelector((state) => state.usersList); // Similar to redux one used to access global state

  const handleDelete = (id)=>{
    dispatch(deleteUser(id))
  }

  return (
    <div>
      <h2>List Of Users</h2>
      <button onClick={() => setaddUser(true)}>Add New User</button>
      <AddUser open={addUser} close={() => setaddUser(false)} />
      <hr />
      <ul>
        {userList?.map((item, i) => {
          return <div>
            <span>{i}.  </span>
            <span>{item}  </span>
            <button onClick={()=>handleDelete(i)}>Delete</button>
          </div>;
        })}
      </ul>
      <hr />
      <DeleteUser />
    </div>
  );
};

export default UserList;
