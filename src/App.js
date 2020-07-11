import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ComponentC from './components/useContext/ComponentC'

export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Coder1098'}>
        <ComponentC />
      </UserContext.Provider>
    </div>
  );
}

export default App;
