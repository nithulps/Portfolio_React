import './App.css'
import Abt from './components/Abt.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Resume from './components/Resume.jsx'
import Sec from './components/Sec.jsx'
import Works from './components/Works.jsx'
import Home from './pages/Home.jsx'

function App() {

  return (
    <>
     <Header/>
     <Home/>
     <Abt/>    
     <Sec/>
     <Works/>
     <Resume/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
