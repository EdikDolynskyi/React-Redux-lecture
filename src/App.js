import React from 'react';
import UserList from './users/index';
import UserPage from './userPage/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserList />
      <UserPage />
    </div>
  );
}

export default App;
