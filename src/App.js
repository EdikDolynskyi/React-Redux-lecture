import React from 'react';
import UserForm from './components/UserForm';
import './App.css';

function App() {
  const data = {
    checked: false,
    name: 'Edik',
    email: 'edik@gmail.com',
    password: '12345'
  };
  
  return (
    <div className="App">
      <UserForm data={ data } />
    </div>
  );
}

export default App;
