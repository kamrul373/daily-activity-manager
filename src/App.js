import { useState } from 'react';
import './App.css';
// Importing Components
import Activities from './Components/Activities/Activities';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  // defining state of exerciseTime
  const [exerciseTime, setExcerciseTime] = useState(0);
  // Add to list button handler
  const handleExerciseTime = (duration) => {
    // calculation of total exerciseTime
    const totalExerciseTime = exerciseTime + duration;
    setExcerciseTime(totalExerciseTime);
  }
  return (
    <div>
      <div className="grid">
        {/* Activities area */}
        <div className="left-area">
          <Header></Header>
          <Activities exerciseTime={handleExerciseTime} ></Activities>
        </div>
        {/* sidebar area */}
        <div className='right-area'>
          <Sidebar exerciseTime={exerciseTime} ></Sidebar>
        </div>
      </div>
      {/* Blogs area */}
      <div className="blogs-container">
        <Blogs></Blogs>
      </div>
    </div>
  );
}

export default App;
