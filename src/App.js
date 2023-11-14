import React from 'react';
import Navbar from './Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import News from './Components/News';
import Services from './Components/Services';
import Footer from './Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


let App=()=>{
  return <div className='App_main_container'>
   
     <Router>
        <div className=' fixed w-[100%] z-10'><Navbar /></div>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="Services" element={<Services/>}/>
                <Route path="News" element={<News/>}/>
                <Route path="Contact" element={<Contact/>}/>
                <Route path="Home" element={<Home/>}/>
              </Routes>
        <div className='w-[100%] z-10 mt-[2%]'><Footer /></div>    
      </Router>
      
  
  </div>
}
export default App