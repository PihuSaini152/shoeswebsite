// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pageg/Home/home.jsx'
import Nav from './components/nabebar/nav.jsx'
import NavMain from './components/nabebar/navmain.jsx'
// import Footer from './components/Footer/footer.jsx'
function App() {
  return (
    <>
    <Router>
    <Nav/>  
    <NavMain/>
    <Nav3/>
    {/* <Footer/> */}
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
