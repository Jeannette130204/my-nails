import './App.css';
import NavBar from '../src/components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import Nails from '../src/pages/Nails'
import Materials from '../src/pages/Materials'
import { nails } from '../src/data'

function App() {
  return (
    <div className="App">
      <>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/nails" element={ <Nails nails={ nails } />  } />
        <Route path="/materials" element={ <Materials nails={ nails }/> } />
      </Routes>
      </>

    </div>
  );
}

export default App;
