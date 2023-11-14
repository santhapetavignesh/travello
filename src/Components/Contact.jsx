import React from 'react';
import '../CSS/Contact.css';
import { useState } from 'react';


let Contact=()=>{

  let [Alertbox,SetAlertbox]=useState(false);



  return <>
  <div className='Contact_container w-[100%] h-[530px]'>
   
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

  <div className='Contact_section_block1'>
    <div className='Contact_section_block1_box1'>
      <h1 className='text-[24px] font-medium'>Get in touch with us</h1>
      <p className='text-[14px] mt-[6%] text-gray-400'>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet. Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.</p>
      <div className='mt-[10%]'>
        <button className='bg-black w-[24%] h-[35px] rounded-[10px] text-white font-medium'>ADDRESS:</button>
        <p className='mt-[3%] ml-[6%] text-gray-400'>1481 Creekside Lane Avila Beach, CA 931</p>
      </div>
      <div className='mt-[5%]'>
        <button className='bg-black w-[24%] h-[35px] rounded-[10px] text-white font-medium'>PHONE:</button>
        <p className='mt-[3%] ml-[6%] text-gray-400'>+53 345 7953 32453</p>
      </div>
      <div className='mt-[5%]'>
        <button className='bg-black w-[24%] h-[35px] rounded-[10px] text-white font-medium'>EMAIL:</button>
        <p className='mt-[3%] ml-[6%] text-gray-400'>yourmail@gmail.com</p>
      </div>
    </div>
    <div className='Contact_section_block1_box2'>
      <form>
        <div className='w-[100%] h-[50px] bg-gray-200 mt-[10%] Contact_section_block1_box2_bottom'>
          <input type='text' placeholder="Your Name" className='my-[2.7%] ml-[5%] w-[95%] text-[16px] bg-gray-200 text-black outline-none' required/>
        </div>
        <div className='Contact_section_block1_box2_input'>
            <div className='w-[100%] h-[50px] bg-gray-200 mt-[10%] Contact_section_block1_box2_bottom'>
              <input type='text' placeholder="Your E-mail" className='my-[4%] ml-[5%] w-[95%] text-[16px] bg-gray-200 text-black outline-none' required/>
            </div>
            <div className='w-[100%] h-[50px] bg-gray-200 mt-[10%] Contact_section_block1_box2_bottom'>
              <input type='text' placeholder="Subject" className='my-[4%] ml-[5%] w-[95%] text-[16px] bg-gray-200 text-black outline-none' required/>
            </div>
        </div>
        <div>
        <textarea placeholder="Message" rows="6" cols="50" className='bg-gray-200 mt-[5%] w-[100%]' required/>
        </div>
        <button className='bg-black w-[30%] h-[50px] mt-[7%] rounded-[10px] text-white font-medium'>SEND</button>
      </form>
    </div>
  </div>
  <div className='w-[100%] h-[600px] bg-slate-400  text-[40px] text-center z-100'>
   {
    Alertbox?<></>:<> <div className='w-[30%] h-[130px]  bg-white Alert_container p-[2%]'>
    <p className='text-[18px] text-left font-medium text-gray-500'>Google</p>
    <h6 className='text-[13px] text-left mt-[2%]'>This page can't load Google Maps correctly.</h6>
    <div className='flex justify-between mt-[4%]'><h5 className='text-[13px]'>Do you own this website?</h5><button className='bg-white text-blue-400 border w-[19%] h-[30px] border-gray-400 rounded-[10px]' onClick={()=>{SetAlertbox(true)}}>ok</button></div>
  </div></>
   }
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.599055665489!2d77.6994166!3d12.9942387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0d3f52ee8c2b%3A0xba7d1cb4d983403a!2sDiginnovators%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1699533997127!5m2!1sen!2sin" className='w-[100%] h-[600px]  ' ></iframe>
  </div>  
  </>
   
}
export default Contact;