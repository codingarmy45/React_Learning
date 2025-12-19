import React, { useEffect, useState } from 'react';

const LocalStorage = () => {
  const [name, setName] = useState('');
  const [userObj, setUserObj] = useState(null);
  const [list, setList] = useState([]);

  const clickHandler = () => {
    // 1. Saving a simple String
    localStorage.setItem('name', 'Yash');

    // 2. Saving an Object (Must stringify)
    const person = { id: 2, role: 'Admin' };
    localStorage.setItem('user', JSON.stringify(person));

    // 3. Saving an Array (Must stringify)
    const numbers = [10, 20, 30, 40];
    localStorage.setItem('numbers', JSON.stringify(numbers));

    // IMPORTANT: After saving to storage, update the state so the UI changes immediately
    syncWithStorage();
  };

  const syncWithStorage = () => {
    // Get String
    setName(localStorage.getItem('name') || '');

    // Get Object (Must parse)
    const savedUser = localStorage.getItem('user');
    setUserObj(savedUser ? JSON.parse(savedUser) : null);

    // Get Array (Must parse)
    const savedList = localStorage.getItem('numbers');
    setList(savedList ? JSON.parse(savedList) : []);
  };

  // Run once when page loads
  useEffect(() => {
    syncWithStorage();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={clickHandler}>Save Data to Storage</button>

      <h3>1. String Data:</h3>
      <p>{name || "No name found"}</p>

      <h3>2. Object Data:</h3>
      {userObj ? <p>ID: {userObj.id} - Role: {userObj.role}</p> : <p>No object found</p>}

      <h3>3. Array Data:</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <button onClick={() => { localStorage.clear(); syncWithStorage(); }}>
        Clear Everything
      </button>
    </div>
  );
};

export default LocalStorage;