import React, { useState, useEffect } from 'react';

const UserModal = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState({ ...user });

  useEffect(() => {
    setFormData({ ...user });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className='text-lg py-5 font-bold'>Edit User Data</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="Fname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Lastname:
            <input
              type="text"
              name="Lname"
              value={formData.secondname}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            phone :
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password :
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit" className='text-white bg-green-600 p-2 px-6 mt-6 rounded-lg'>Save</button>
          <button type="button" className='text-white bg-red-500 p-2 px-6 mt-6 rounded-lg ml-6' onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
