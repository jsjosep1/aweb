
import './App.css';
import Navbar from './navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Paccar from './Pages/projects/paccar/paccar';
import Feb from './Pages/projects/feb/feb';
import Decor from './Pages/projects/decor/decor';
import Miata from './Pages/projects/miata/miata';
import Engraving from './Pages/projects/engraving/engraving';
import Personal from './Pages/projects/pc/personalcad';
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <>
    <Analytics/>
    <Router>
    <Navbar/>
    <div className="Container">
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/paccar' element={<Paccar/>}/>
        <Route path='/feb' element={<Feb/>}/>
        <Route path='/decor' element={<Decor/>}/>
        <Route path='/miata' element={<Miata/>}/>
        <Route path='/engraving' element={<Engraving/>}/>
        <Route path='/personalproj' element={<Personal/>}/>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
