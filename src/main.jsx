import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/nabebar/nav.jsx'
import NavMain from './components/nabebar/navmain.jsx'
import Nav3 from './pageg/navbar3/nav3.jsx'
// import Footer from './components/Footer/footer.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Nav/>
    <NavMain/>
    <Nav3/>
    {/* <Footer/> */}
  </StrictMode>,
)
