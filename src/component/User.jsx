// User.js
import React, { useState } from 'react';    
import { useSelector, useDispatch } from 'react-redux';
import { changeUser } from '../Store';

const User = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleUserUpdate = () => {
    dispatch(changeUser({ name, email }));
  };

  return (
    <div>
      <h2>User Information</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleUserUpdate}>Update User</button>
      </div>
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default User;
