import React, { useEffect, useState } from "react";
import {
  useAddAuthorMutation,
  useGetAuthorsQuery,
} from "../services/Rtk Query Slices/authorSlice";

const Authors = () => {
  const [name, setname] = useState("");

  const { isLoading, isSuccess, isError, data, error, refetch } = useGetAuthorsQuery("");
  console.log(isLoading, isSuccess, isError, data, error);

  const [addAuthor] = useAddAuthorMutation();

  const handleSubmit = () => {
    addAuthor({
      firstName: name,
      lastName: "ww",
      id: 1000,
      idBook: 1000,
    });
  };

  useEffect(()=>{
    refetch()   // To trigger call to end point again 
  },[name])

  return (
    <div>
      <h3>Add User</h3>
      <label htmlFor="user-name">Fisrt-Name</label>
      <input
        id="user-name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button onClick={handleSubmit}>Add User</button>
      {data?.map((item, i) => {
        return (
          <div key={i}>
            <span>{item.firstName}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Authors;
