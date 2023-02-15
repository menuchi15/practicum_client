import logo from './logo.svg';
import './App.css';
import DetailsContext from './DetailsContext';
import MiniRouter from './components/MiniRouter';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate=useNavigate()
  return (
    <div className="App div-location">
      <DetailsContext>
        <nav className="navbar shadow sm bg-body-tertiary fixed-top">
          <div className="container-fluid justify-content-end">
            <label className="navbar-brand">להנחיות</label>
            <button className="navbar-toggler" onClick={()=>{navigate('/instruction')}}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>    
        <MiniRouter/>
      </DetailsContext>
    </div>
  );
}

export default App;
