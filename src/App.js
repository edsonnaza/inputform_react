import React, { useState } from 'react';
import AddUser from './components/AddUser';
import Header from './components/Header';
import userIcon from './images/user.png';
import UserList from './components/UserList';



function App() {
  const [usersList,setUsersList]=useState([]);

  const addUserHandler = (uName,uAge) => {
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{key:uAge,name:uName, age:uAge, id:Math.random().toString()}];
    });
  };


  return (
    <div>
         <Header image={userIcon} />
        <AddUser onAddUser={addUserHandler} />
       { usersList.length>0 && <UserList  users={usersList} />}
    </div>
  );
}

export default App;
