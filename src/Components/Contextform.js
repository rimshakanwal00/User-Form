
import React, { createContext, useState, useEffect } from 'react';
export const UserContext = createContext();



export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  // const addUser = (user) => {
  //   const updatedUsers = [...users, user];
  //   setUsers(updatedUsers);
  //   localStorage.setItem('users', JSON.stringify(updatedUsers));
  // };

  const [lastUserId, setLastUserId] = useState(0);

  const addUser = (user) => {
    const userWithId = { ...user, userid: lastUserId + 1 };
    const updatedUsers = [...users, userWithId];
    setUsers(updatedUsers);
    setLastUserId(lastUserId + 1);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('lastUserId', lastUserId + 1);
  };

// for Update user data
const updateUser = (updatedUser) => {
  const updatedUsers = users.map((user) =>
    user.userid === updatedUser.userid? updatedUser : user
  
  );
  setUsers(updatedUsers);
  localStorage.setItem('users', JSON.stringify(updatedUsers));
};
// for delt user data

const deleteUser = (userid) => {
  const updatedUsers = users.filter((user) => user.userid !== userid);
  setUsers(updatedUsers);
  localStorage.setItem('users', JSON.stringify(updatedUsers));
};

 useEffect(() => {

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
// 
const storedLastUserId = JSON.parse(localStorage.getItem('lastUserId')) || 0;
setLastUserId(storedLastUserId);
// 


  }, []);

  
  console.log(users);
//   localStorage.clear();

  return (
    <UserContext.Provider value={{ users, addUser,setUsers,updateUser,deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
