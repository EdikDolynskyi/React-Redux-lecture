import React from 'react';
import UserForm from './components/UserFormScalable';
import ErrorBoundary from './error/ErrorBoundary';
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
      <ErrorBoundary>
          <UserForm data={ data } />
      </ErrorBoundary>
    </div>
  );
}

export default App;
