import React from 'react';
import '../CSS/About.css';
import section1 from '../Images/About_section_1.png';
import section2 from '../Images/About_section_1_svg1.svg'
import section3 from '../Images/About_section_1_svg2.svg'
import section4 from '../Images/About_section_1_svg3.svg'
import section5 from '../Images/About_section_1_svg4.svg'
import secction6 from '../Images/About_section_2_svg1.svg'
import secction7 from '../Images/About_section_2_svg2.svg'
import secction8 from '../Images/About_section_2_svg3.svg'
import section9 from '../Images/About_section_3_1.png';
import section10 from '../Images/About_section_3_2.png'
import section11 from '../Images/About_section_3_3.png'
import section12 from '../Images/About_section_3_4.png'
import { useEffect } from 'react';
import CountUp from 'react-countup';
import { useState } from 'react';



let About=()=>{

    let [value,setvalue]=useState(false)
    useEffect(()=>{
      window.addEventListener("scroll", scrollHandler)

    },[])

    let scrollHandler=()=>{

        if(window.scrollY>800){
          setvalue(true)
        }
    }
   



  return <>
  <div className='about_container w-[100%] h-[530px]'>
  </div>
  <div className='Search_bar_main'>
    <div className='Search_bar_h1_contant font-medium'>Search for your trip</div>
    <form className='Search_form_container pl-[5%] pt-[1%]'>
      <input type='text' placeholder='City' className='bg-gray-200 w-[25%] h-[40px] pl-[2%] outline-none' required/>
      <input type='text' placeholder='Departure' className='bg-gray-200 w-[15%] h-[40px] pl-[2%] outline-none' required/>
      <input type='text' placeholder='Arrival' className='bg-gray-200 w-[15%] h-[40px] pl-[2%] outline-none' required/>
      <input type='text' placeholder='Budget' className='bg-gray-200 w-[20%] h-[40px] pl-[2%] outline-none' required/>
      <input type='submit' value="Search" className=' w-[13%] h-[45px] rounded-[20px] bg-black text-white' required/>
    </form>
    <div className='w-[80%] h-[2px] m-auto  mt-[5%] bg-gray-300 Search_bar_hr' ></div>
  </div>

  <div className='w-[100%] h-[800px] About_section_1'>
    <h3>SIMPLY AMAZING PLACES</h3>
    <h1>A few words about us</h1>
    <div className='About_section_1_section1 w-[90%] h-[540px] gap-3'>
      <div className='About_section_1_section1_child1'>
        <h>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h>
        <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu laoreet ante, sollicitudin volutpat quam. Vestibulum posuere malesuada ultrices. In pulvinar rhoncus lacus at aliquet. Nunc vitae lacus varius, auctor nisi sit amet, consectetur mauris. Curabitur sodales semper est, vel faucibus urna laoreet vel. Ut justo diam, sodales non pulvinar at, vulputate quis neque. Etiam aliquam purus vel ultricies consequat.</p>
      <div className='About_section_1_section1_child1_button'><button> READ MORE</button></div>
      </div>
      <div>
        <img src={section1} className='w-[100%] h-[100%]'/>
      </div>
    </div>
  </div>
  <div className='About_section_2 w-[80%] h-[280px] m-auto'>
    <div className='card_1_section_2 about_section_top'>
      <div className='card_head_section_2 w-[100%] h-[50%] p-[18%]'>
      <img src={section2} className='w-[100%] h-[100%]'/> 
      </div>
      <div className='card_body_section_2'>
        <h1 className='w-[100%] h-[100px] text-[60px]  text-center font-semibold'>{(value)?<><CountUp start={0} end={17} duration={3} delay={0}/></>:<>0</>}</h1>
        <p className='w-[100%] h-[50px] text-center text-[16px] font-bold text-gray-500'>Online Courses</p>
      </div>
    </div>
    <div className='card_2_section_2'>
      <div className='card_head_section_2 w-[100%] h-[50%] p-[18%]'>
      <img src={section3} className='w-[100%] h-[100%]'/> 
      </div>
      <div className='card_body_section_2'>
        <h1 className='w-[100%] h-[100px] text-[60px]  text-center font-semibold'>{(value)?<><CountUp start={0} end={213} duration={3} delay={0}/></>:<>0</>}</h1>
        <p className='w-[100%] h-[50px] text-center text-[16px] font-bold text-gray-500'>Students</p>
      </div>
    </div>
    <div className='card_3_section_2'>
      <div className='card_head_section_2 w-[100%] h-[50%] p-[18%]'>
      <img src={section4} className='w-[100%] h-[100%]'/> 
      </div>
      <div className='card_body_section_2'>
        <h1 className='w-[100%] h-[100px] text-[60px]  text-center font-semibold'>{(value)?<><CountUp start={0} end={11923} duration={3} delay={0}/></>:<>0</>}</h1>
        <p className='w-[100%] h-[50px] text-center text-[16px] font-bold text-gray-500'>Teachers</p>
      </div>
    </div>
    <div className='card_4_section_2'>
      <div className='card_head_section_2 w-[100%] h-[50%] p-[18%]'>
      <img src={section5} className='w-[100%] h-[100%]'/> 
      </div>
      <div className='card_body_section_2'>
        <h1 className='w-[100%] h-[100px] text-[60px]  text-center font-semibold'>{(value)?<><CountUp start={0} end={15} duration={3} delay={0}/></>:<>0</>}</h1>
        <p className='w-[100%] h-[50px] text-center text-[16px] font-bold text-gray-500'>Countries</p>
      </div>
    </div>

  </div>
  <div className='w-[100%] h-[750px] mt-[7%] About_section_3'>
    <h4>SIMPLY AMAZING PLACES</h4>
    <h1>Why choose us?</h1>
    <div className='About_section_3_box'>
      <div className='About_section_3_box_1'>
        <div className='w-[100%] h-[50%] About_section_3_box_Child1'>
          <div className='About_section_3_box_Child1_box w-[70px] h-[70px] rounded-full bg-slate-50'>
            <img src={secction6} className='w-[100%] h-[100%] p-[12%]'/>
          </div>
        </div>
        <div className='w-[100%] h-[50%] bg-slate-100 About_section_3_box_Child2 p-[8%]'>
          <h1>Fast Services</h1>
          <p className='text-center mt-[2%] text-gray-500'>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.</p>
        </div>
      </div>

      <div className='About_section_3_box_2'>
      <div className='w-[100%] h-[50%] About_section_3_box_Child12'>
          <div className='About_section_3_box_Child1_box w-[70px] h-[70px] rounded-full bg-slate-50'>
            <img src={secction7} className='w-[100%] h-[100%] p-[12%]'/>
          </div>
        </div>
        <div className='w-[100%] h-[50%] bg-slate-100 About_section_3_box_Child2 p-[8%]'>
          <h1>Great Team</h1>
          <p className='text-center mt-[2%] text-gray-500'>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.</p>
        </div>
      </div>

      <div className='About_section_3_box_3'>
      <div className='w-[100%] h-[50%] About_section_3_box_Child13'>
          <div className='About_section_3_box_Child1_box w-[70px] h-[70px] rounded-full bg-slate-50'>
            <img src={secction8} className='w-[100%] h-[100%] p-[12%]'/>
          </div>
        </div>
        <div className='w-[100%] h-[50%] bg-slate-100 About_section_3_box_Child2 p-[8%]'>
          <h1>Best Deals</h1>
          <p className='text-center mt-[2%] text-gray-500'>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.</p>
        </div>
      </div>
      

    </div>

  </div>
  <div className='w-[100%] h-[670px] mt-[7%] About_section_4'> 
    <h4>SIMPLY AMAZING PLACES</h4>
    <h1>Meet the Team</h1>

    <div className='About_section_4_box'>

      <div className='About_section_4_box_1'>
        <div className='About_section_4_box_1_child1 w-[100%] h-[50%] p-[7%]'>
            <div className='w-[80%] h-[80%] bg-yellow-200 rounded-full '>
            <img src={section9} alt='' className='w-[100%] h-[100%] rounded-full'/>
            </div> 
        </div>
        <div className='About_section_4_box_1_child2 w-[100%] h-[50%]'>
          <h1>Margaret Smith</h1>
          <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.</p>
        </div>
      </div>
      <div className='About_section_4_box_2'>
        <div className='About_section_4_box_1_child1 w-[100%] h-[50%]  p-[7%] About_section_4_box_1_childtop2'>
            <div className='w-[80%] h-[80%] bg-yellow-200 rounded-full '>
            <img src={section10} alt='' className='w-[100%] h-[100%] rounded-full'/>
            </div> 
        </div>
        <div className='About_section_4_box_1_child2 w-[100%] h-[50%] '>
          <h1>James Williams</h1>
          <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.</p>
        </div>
      </div>
      <div className='About_section_4_box_3'>
        <div className='About_section_4_box_1_child1 w-[100%] h-[50%] p-[7%]  About_section_4_box_1_childtop'>
            <div className='w-[80%] h-[80%] bg-yellow-200 rounded-full '>
            <img src={section11} alt='' className='w-[100%] h-[100%] rounded-full'/>
            </div> 
        </div>
        <div className='About_section_4_box_1_child2 w-[100%] h-[50%] '>
          <h1>Michael James</h1>
          <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.</p>
        </div>
      </div>
      <div className='About_section_4_box_4'>
        <div className='About_section_4_box_1_child1 w-[100%] h-[50%]  p-[7%]  About_section_4_box_1_childtop About_section_4_box_1_childtop3'>
            <div className='w-[80%] h-[80%] bg-yellow-200 rounded-full '>
            <img src={section12} alt='' className='w-[100%] h-[100%] rounded-full'/>
            </div> 
        </div>
        <div className='About_section_4_box_1_child2 w-[100%] h-[50%] '>
          <h1>Noah Smith</h1>
          <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.</p>
        </div>
      </div>



    </div>

  </div>

  </>
}


export default About;
