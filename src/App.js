import { useState } from 'react';
import './App.css';
import Activities from './Components/Activities/Activities';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {

  return (
    <div>
      <div className="grid">
        <div className="left-area">
          <Header></Header>
          <Activities></Activities>
        </div>
        <div className='right-area'>
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
