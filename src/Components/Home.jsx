import React, { useState } from 'react';
import '../CSS/Home.css';
import {AiOutlineExclamation} from 'react-icons/ai';
import homesilde2 from '../Images/home_slider2.jpg';
import svg1 from '../Images/beach.svg'
import svg2 from '../Images/walletsvg.svg'
import svg3 from '../Images/suitcase.svg';
import destionation1 from '../Images/home_slider3.1.jpg';
import destionation2 from '../Images/home_slider3.2.jpg'
import destionation3 from '../Images/home_slider3.3.jpg'
import destionation4 from '../Images/home_slider3.6.jpg'
import destionation5 from '../Images/home_slider3.5.jpg'
import destionation6 from '../Images/home_slider3.4.jpg'
import discount1 from '../Images/home_slider4.1.jpg';
import discount2 from '../Images/home_slider4.2.jpg';
import discount3 from '../Images/home_slider4.3.jpg';


let Home=()=>{

  return <>
  <div className='div1_container w-[100%] h-[750px]'>
    <h1 className='absolute mt-[20%] text-[78px]  font-semibold text-white ml-[17%] div1_container_h1'>Let us take you away</h1>
    <div className='w-[15%] h-[200px] absolute mt-[29%] ml-[82%] z-10 div1_container_ul_bar '>
      <div className='h-[50px] sildemain1 sildemain'> 
        <h className="flex text-[20px] ml-[24%] p-3 sidetextbar">Offers<p className='ml-[20%]'>01</p></h>
      </div>
      <div className='w-[100%] h-[50px]  mt-[20px] sildemain2 sildemain'> 
        <h className="flex text-[20px] ml-[-6px] p-3 sidetextbar">Testimonials<p className='ml-[10%]'>02</p></h>
      </div>
      <div className='w-[100%] h-[50px] mt-[20px] sildemain3 sildemain'> 
       <h className="flex text-[20px] ml-[24%] p-3 sidetextbar">Latest<p className='ml-[22%]'>03</p></h>
      </div>
    </div>
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

  <div className='homeIntroduction'>
    <div className='w-[100%] h-[180px] absolute mt-[-5%] homeIntroduction_div1'>
    </div>
    <div className='homeIntroduction_container'>
      <div className='w-[100%] h-[100px] flex'>
        <div className='w-[35%] h-[80%]'>
        <img src={svg1} className='w-[100%] h-[100%]'/>
        </div>
        <div>
          <h3 className='mt-[14%] text-[20px] '>Top Destinations</h3>
          <p className='text-[13px]'>Nulla pretium tincidunt felis, nec.</p>
        </div>
      </div>
      <div className='w-[100%] h-[100px] flex'>
        <div className='w-[35%] h-[80%]'>
        <img src={svg2} className='w-[100%] h-[100%]'/>
        </div>
        <div>
        <h3 className='mt-[14%] text-[20px] '>The Best Prices</h3>
        <p className='text-[13px]'>Sollicitudin mauris lobortis in.</p>
        </div>
      </div>
      <div className='w-[100%] h-[100px] flex'>
        <div className='w-[35%] h-[80%]'>
        <img src={svg3} className='w-[100%] h-[100%]'/>
        </div>
        <div>
        <h3 className='mt-[14%] text-[20px] '>Amazing Services</h3>
        <p className='text-[13px]'>Nulla pretium tincidunt felis, nec.</p>
        </div>
      </div>  
    </div>
    <div className='w-[80%] h-[2px] m-auto  mt-[5%] bg-gray-300'></div>
  </div>
   
  <div className='Destinations_main'>
      <h3>SIMPLY AMAZING PLACES</h3>
      <h1>Popular Destinations</h1>
      <div className='Destinations_main_sub_Containter'>
        <div className='card1 w-[100%] h-[100%]'>
          <div className='w-[100%] h-[65%]'>
            <img src={destionation1} alt="" className='w-[100%] h-[100%]' />
            <button className='absolute w-[10%] h-[40px] bg-black text-white mt-[-16%] ml-[1%] font-medium Card1_button'>Special Offer</button>
          </div>
          <div className='w-[100%] h-[30%]'>
            <h2 className='text-[30px] mt-[2%]'>Bali</h2>
            <p className='mt-[-2%] text-gray-400'>Nulla pretium tincidunt felis, nec.</p>
            <h4 className='text-[20px] font-bold  mt-[5%]'>From $679</h4>
          </div>
        </div>
        <div className='card2 w-[100%] h-[100%]'>
        <div className='w-[100%] h-[65%]'>
            <img src={destionation2} alt="" className='w-[100%] h-[100%]' />
          </div>
          <div className='w-[100%] h-[30%]'>
            <h2 className='text-[30px] mt-[2%]'>Indonesia</h2>
            <p className='mt-[-2%] text-gray-400'>Nulla pretium tincidunt felis, nec.</p>
            <h4 className='text-[20px] font-bold  mt-[5%]'>From $679</h4>
          </div>

        </div>
        <div className='card3 w-[100%] h-[100%]'>
        <div className='w-[100%] h-[65%]'>
            <img src={destionation3} alt="" className='w-[100%] h-[100%]' />
          </div>
          <div className='w-[100%] h-[30%]'>
            <h2 className='text-[30px] mt-[2%]'>San Francisco</h2>
            <p className='mt-[-2%] text-gray-400'>Nulla pretium tincidunt felis, nec.</p>
            <h4 className='text-[20px] font-bold  mt-[5%]'>From $679</h4>
          </div>

        </div>
        <div className='card4 w-[100%] h-[100%]'>
        <div className='w-[100%] h-[65%]'>
            <img src={destionation4} alt="" className='w-[100%] h-[100%]' />
          </div>
          <div className='w-[100%] h-[30%]'>
            <h2 className='text-[30px] mt-[2%]'>Paris</h2>
            <p className='mt-[-2%] text-gray-400'>Nulla pretium tincidunt felis, nec.</p>
            <h4 className='text-[20px] font-bold  mt-[5%]'>From $679</h4>
          </div>

        </div>
        <div className='card5 w-[100%] h-[100%]'>
        <div className='w-[100%] h-[65%]'>
            <img src={destionation5} alt="" className='w-[100%] h-[100%]' />
          </div>
          <div className='w-[100%] h-[30%]'>
            <h2 className='text-[30px] mt-[2%]'>Phi Phi Island</h2>
            <p className='mt-[-2%] text-gray-400'>Nulla pretium tincidunt felis, nec.</p>
            <h4 className='text-[20px] font-bold  mt-[5%]'>From $679</h4>
          </div>

        </div>
        <div className='card6 w-[100%] h-[100%]'>
        <div className='w-[100%] h-[65%]'>
            <img src={destionation6} alt="" className='w-[100%] h-[100%]' />
          </div>
          <div className='w-[100%] h-[30%]'>
            <h2 className='text-[30px] mt-[2%]'>Mykonos</h2>
            <p className='mt-[-2%] text-gray-400'>Nulla pretium tincidunt felis, nec.</p>
            <h4 className='text-[20px] font-bold  mt-[5%]'>From $679</h4>
          </div>

        </div>

      </div>
        
  </div>

  <div className='SectionTestimonials_container'>

    <h>SIMPLY AMAZING PLACES</h>
    <h1>Testimonials</h1>
    <h3>Lorem ipusm dolor sit amet, consectetur adipiscing elit. lobortis dolor. Cras placerat lectus a posuere aliquet. Curabitur quis vehicula odio.</h3>
    <h4> JOHN TURNER, <p>CLIENT</p></h4>
  </div>

  <div className='SectionDiscount_container'>
      <div className='SectionDiscount_Child1'>
        <div className='SectionDiscount_Child_sub1'>
          <img src={discount1} alt='' className='w-[100%] h-[100%]'/>
        </div>
        <div className='SectionDiscount_Child_sub2'>
          <h1 className='flex'>O2<h>JUNE</h></h1>
          <h2>Best tips to travel light</h2>
          <h5>LIFESTYLE & TRAVEL</h5>
          <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.</p>
        </div>
      </div>
      <div className='SectionDiscount_Child2'>
      <div className='SectionDiscount_Child_sub1'>
          <img src={discount2} alt='' className='w-[100%] h-[100%]'/>
        </div>
        <div className='SectionDiscount_Child_sub2'>
          <h1 className='flex'>O1<h>JUNE</h></h1>
          <h2>Best tips to travel light</h2>
          <h5>LIFESTYLE & TRAVEL</h5>
          <p>Tempor massa et laoreet malesuada. Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.</p>
          </div>
        
      </div>
      <div className='SectionDiscount_Child3'>

      <div className='SectionDiscount_Child_sub1'>
          <img src={discount3} alt='' className='w-[100%] h-[100%]'/>
        </div>
        <div className='SectionDiscount_Child_sub2'>
          <h1 className='flex'>29<h>MAY</h></h1>
          <h2>Best tips to travel light</h2>
          <h5>LIFESTYLE & TRAVEL</h5>
          <p>Vivamus massa.Tempor massa et laoreet malesuada. Aliquam nulla nisl, accumsan sit amet mattis.</p>
          </div>
      </div>
      <div className='SectionDiscount_Child4'>
        <div className='w-[100%] h-[300px]'>
          <div className='w-[100%] h-[310px] SectionDiscount_Sub_Child'></div>
          <div className='SectionDiscount_Child4_child1'>
          </div>
          <div className='SectionDiscount_Child4_child2 pt-[4%]'>
            <h1 className='mt-[50px] ml-[30%] SectionDiscount_h1'>Get a 20%</h1>
            <h1 className='ml-[30%] SectionDiscount_h2'>Discount</h1>
            <h3>Buy Your Vacation Online Now</h3>
          </div>
        </div>
      </div>
  </div>
  </>
}


export default Home;
