import React, { useState } from 'react'
import DeleteUser from './DeleteAllUser'
import AddUser from './AddUser'

const UserList = () => {

  const [addUser, setaddUser] = useState(false)  

  return (
    <div>
        <h2>List Of Users</h2>
        <button onClick={()=> setaddUser(true)}>Add New User</button>
        <AddUser open={addUser} close={()=> setaddUser(false)}/>
        <hr/>
        <DeleteUser/>
    </div>
  )
}

export default UserList