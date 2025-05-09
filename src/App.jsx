import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pageg/Home/home.jsx'
import Nav from './components/nabebar/nav.jsx'
import NavMain from './components/nabebar/navmain.jsx'
import Nav3 from './pageg/navbar3/nav3.jsx'
import Footer from './components/Footer/footer.jsx'
import Rerun from './pageg/Rerun/rerun.jsx'
import Help from './pageg/Help/Help.jsx';
function App() {

  return (
    <>
    <Router>
    <Nav/>  
    <NavMain/>
    <Nav3/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/rerun' element={<Rerun/>}/>
        <Route path='/Help' element={<Help/>}/>
      </Routes>
    <Footer/>
    
    </Router>
    
    </>
  ) 
}

export default App
