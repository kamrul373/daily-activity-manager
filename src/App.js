import './App.css';
import Activities from './Components/Activities/Activities';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <div className="grid">
        <div className="left-area">
          <Header></Header>
          <Activities></Activities>
        </div>
        <div className='right-area'>

        </div>
      </div>
    </div>
  );
}

export default App;
