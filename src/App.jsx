// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pageg/Home/home.jsx'
import Nav from './components/nabebar/nav.jsx'
import NavMain from './components/nabebar/navmain.jsx'
// import Footer from './components/Footer/footer.jsx'
import Men from './pageg/Men/men.jsx/'
import Women from './pageg/women/women.jsx/'

function App() {

  return (
    <>
    <Router>
    <Nav/>  
    <NavMain/>
    {/* <Footer/> */}
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
      </Routes>
    </Router>
    
    </>
  ) 
}

export default App
