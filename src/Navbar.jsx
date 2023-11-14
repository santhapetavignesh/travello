import React, { useState,useEffect } from 'react';
import './CSS/Navbar.css';
import {HiMenu} from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import {FaPinterest} from 'react-icons/fa';
import {RxCross2} from 'react-icons/rx';
import {BiLogoFacebook} from 'react-icons/bi';
import {AiOutlineTwitter} from 'react-icons/ai';
import {TfiBasketball} from 'react-icons/tfi';
import {BiLogoLinkedin} from 'react-icons/bi';
import {SiMicrosoftbing} from 'react-icons/si'

let Navbar=()=>{

   let [scroll,setscroll]=useState(true)
   let[menuvalue,setmenuvalue]=useState(false)
   let Navbars={
       "padding-top":(scroll)?"70px":"45px",
       "transition": "all 0.2s ease-out",
   }
   let Child_4={
    "margin-top":(scroll)?"60px":"40px",
    "transition": "all 0.2s ease-out",
}
   let Backgrounds={
       "background":(scroll)?"":"rgb(68, 66, 66,0.8)",
       "height":(scroll)?"140px":"100px",
   }
   useEffect(() => {
       changevalues()
       window.addEventListener("scroll",changevalues)
     })
   const changevalues = () => {
       if (window.scrollY >= 120) {
           setscroll(false)
       } else {
           setscroll(true)
       }
     }

     let[menubar,setmenubar]=useState(true);
     let Closinghandler=()=>{
      setmenubar(false)
      setTimeout(()=>{
        setmenuvalue(false)
        setmenubar(true)
      },700)
     }
     

  return <>
              
        
        {(menuvalue)?<>
          <nav className={`bg-gray-100 flex flex-col text-left w-[100%]  p-[10%] ;
           ${menubar?'navbar_menu':"navbar_menu_bar"}`}>
           <Link  to="/Home"> <div className='flex justify-between text-[40px] cursor-pointer '><a onClick={()=>{setmenuvalue(false)}}>Travello</a><RxCross2 className='text-[40px] ' onClick={Closinghandler}/></div></Link>
             <ul className='mt-[10%] text-[60px] font-sans leading-[110px]'>
                    <Link  to="/" ><li className='hover:text-gray-400' onClick={()=>{setmenuvalue(false)}}>Home</li></Link>
                    <Link  to="/About" ><li className='hover:text-gray-400'  onClick={()=>{setmenuvalue(false)}}>About us</li></Link>
                    <Link  to="/Services"><li className='hover:text-gray-400'  onClick={()=>{setmenuvalue(false)}}>Services</li></Link>
                    <Link  to="/News" ><li className='hover:text-gray-400'   onClick={()=>{setmenuvalue(false)}}>News</li></Link>
                    <Link  to="/Contact"><li className='hover:text-gray-400'  onClick={()=>{setmenuvalue(false)}}>Contact</li></Link>
            </ul>
            <div className='text-[45px] mt-[10%] text-gray-500 '>Call us: 00-56 445 678 33</div>
            <div className='mt-[5%] flex text-[45px] gap-[10%] text-gray-500' ><FaPinterest className='hover:text-black'/> <BiLogoFacebook className='hover:text-black'/> <AiOutlineTwitter className='hover:text-black'/><TfiBasketball className='hover:text-black'/><BiLogoLinkedin className='hover:text-black'/><SiMicrosoftbing className='hover:text-black'/></div>
        </nav>
        
        </>:<>
        <nav className='text-white text-[18px]' style={Backgrounds}>
                  {menuvalue?<><div className='Nav_child1 text-[22px]' style={Navbars} ><a className='cursor-pointer'>Travello</a></div></>:<><div className='Nav_child1 text-[22px]' style={Navbars} ><a className='cursor-pointer'>Travello</a></div></>}
                  <ul className='Nav_child2 grid grid-flow-row grid-flow-col' >
                    <NavLink  to="/" ><li style={Navbars} className='Nav_child2_ul_li'>Home</li></NavLink>
                    <NavLink  to="/About" ><li style={Navbars} className='Nav_child2_ul_li'>About us</li></NavLink>
                    <NavLink  to="/Services"><li style={Navbars} className='Nav_child2_ul_li'>Services</li></NavLink>
                    <NavLink  to="/News" ><li style={Navbars} className='Nav_child2_ul_li'>News</li></NavLink>
                    <NavLink  to="/Contact"><li style={Navbars} className='Nav_child2_ul_li'>Contact</li></NavLink>
                  </ul>
              {menuvalue?<><div className='Nav_child3' style={Navbars}>Call us: 00-56 445 678 33</div></>:<><div className='Nav_child3' style={Navbars}>Call us: 00-56 445 678 33</div></>}    
                  <HiMenu className='Nav_child4 text-[40px]' style={Child_4} onClick={()=>{setmenuvalue(true)}}/>
              </nav> 
          
        </>}
        


  </>}

export default Navbar