import { Outlet  } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar';


function App() {
  return (
    <div className="App">
      <TopBar />
      
      <Outlet />
    </div>
  );
}

export default App;
