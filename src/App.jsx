import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';


// rsf + tab to create a functional component if you are using react snipset
function App() {
  return (
    <div>
      <Navbar/>
      <div className="app-body">
      <Sidebar/>
      </div>
    </div>
  );
}


export default App;
