import './App.css';
import DetailsContext from './DetailsContext';
import MiniRouter from './components/MiniRouter';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function App() {
  const navigate=useNavigate()
  return (
    <div className="App">
      <DetailsContext>

        <nav className="navbar navbar-dark bg-dark fixed-top">
          <div className="container-fluid justify-content-end">
            <label className="navbar-brand">להנחיות</label>
            <button className="navbar-toggler" onClick={()=>{navigate('/instruction')}}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>   

        <MiniRouter/>

        <Button variant="text" size="medium" style={{bottom: "5%",position:"absolute",right:"3%",borderRadius:"50%"}} onClick={()=>{navigate('/instruction')}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-question-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
          </svg>
        </Button>
        
      </DetailsContext>
    </div>
  );
}

export default App;
