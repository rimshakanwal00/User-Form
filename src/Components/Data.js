import React, { useContext ,useState } from 'react';
import { UserContext } from './Contextform';
import { Link } from 'react-router-dom';
import UserModal from './UserModal';


function Data() {
  const { users,updateUser,deleteUser } = useContext(UserContext);

//   const deleteUser = (index) => {
//     const updatedUsers = [...users]; 
//     updatedUsers.splice(index, 1); 
//     setUsers(updatedUsers); 

// };
const [isModalOpen, setModalOpen] = useState(false);
const [selectedUser, setSelectedUser] = useState(null);

const handleUpdateClick = (user) => {
  setSelectedUser(user);
  setModalOpen(true);
};

const handleCloseModal = () => {
  setModalOpen(false);
  setSelectedUser(null);
};
const handleSaveUser = (updatedUser) => {
    updateUser(updatedUser);
    handleCloseModal();
  };

  
  return (
    <div className="container mx-auto">
    <div className='flex'>
            <h1 className="text-2xl font-bold mb-4 mt-10">Users Data</h1>
            <button type="submit" className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg  ml-[60rem] px-5 mb-3 mt-7 ">
            <Link  to="/">Add new Data</Link></button>
    </div>
            <table className="table-auto w-full mt-7">
                <thead>
                    <tr>
                        <th className="px-4 py-2">User ID</th>
                        <th className="px-4 py-2">First Name</th>
                        <th className="px-4 py-2">Last Name</th>
                        <th className="px-3 py-2">Email</th>
                        <th className='px-4 py-2'>Phone</th>
                        <th className='px-4 py-2'>Password</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) => (
                        <tr key={user.userid}>
                            <td className="border px-4 py-2">{user.userid}</td>
                            <td className="border px-4 py-2">{user.firstname}</td>
                            <td className="border px-4 py-2">{user.secondname}</td>
                            <td className="border px-4 py-2">{user.email}</td>
                            <td className="border px-4 py-2">{user.phone}</td>
                            <td className="border px-4 py-2">{user.password}</td>
                            <td className='px-4 py-2 cursor-pointer text-red-600'  onClick={() => deleteUser(user.userid)}>Delete</td>
                            <td className='px-4 py-2 cursor-pointer text-green-500' onClick={() => handleUpdateClick(user,index)}>Update</td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
            {isModalOpen && (
        <UserModal
          user={selectedUser}
          onClose={handleCloseModal}
          onSave={handleSaveUser}
        />
      )}
            
        </div>
  );
}

export default Data;
