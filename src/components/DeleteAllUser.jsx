import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAll } from '../services/slices/userSlice'
import { clearAllUsers } from '../services/actions'

const DeleteUser = () => {

  const dispatch = useDispatch()

  const handleDeleteAll = ()=>{

    // dispatch(deleteAll())
    dispatch(clearAllUsers())  // Here not instead of any slice specific action we are now dispatching custom global action which is not defined in any reducer , so flow again first go to store from there combine reducer and extra reducer of slices and so on ...

  }

  return (
    <div>
      <button onClick={handleDeleteAll}>Delete All Users</button>
    </div>
  )
}

export default DeleteUser