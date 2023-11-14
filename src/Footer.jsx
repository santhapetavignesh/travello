import React from 'react';
import '../src/CSS/Footer.css';
import svg1 from '../src/Images/sign.svg';
import svg2 from '../src/Images/trekking.svg';
import svg3 from '../src/Images/around.svg'

let Footer=()=>{
 
  return <>
    <div className='Footer_main_container'>
        <h1>Subscribe to our newsletter to get the latest trends & news</h1>
        <h5>Join our database NOW!</h5>
        <form className="Footer_main_container_input">
                <div className='Footer_main_container_input_1'><input type='text' required placeholder='Name'/></div>
                <div className='Footer_main_container_input_2'><input type='email' required placeholder='Your e-mail'/></div>
                <div  className='Footer_main_container_input_3'><input type="submit" value='SUBSCRIBE' className='w-[100%] h-[100%] Footer_main_container_input_3_1 '/></div>
        </form>  

        <div className='Footer_main_svg_container'>
            <div className='card1'>
                <div className='card_head_svg'>
                    <img src={svg1} className='w-[100%] h-[100%]'/>
                </div>
                <div className='card_body'>
                    <h1>GIVE US A CALL</h1>
                    <h>Office Landline: +44 5567 32 664 567</h>
                    <h6>Mobile: +44 5567 89 3322 332</h6>
                </div>
            </div>
            <div className='card2'>
                <div className='card_head_svg'>
                    <img src={svg2} className='w-[100%] h-[100%]'/>
                </div>
                <div className='card_body'>
                    <h1>COME & DROP BY</h1>
                    <h6>4124 Barnes Street, Sanford, FL 32771</h6>
                </div>
            </div>
            <div className='card3'>
                <div className='card_head_svg'>
                    <img src={svg3} className='w-[100%] h-[100%]'/>
                </div>
                <div className='card_body'>
                    <h1>SEND US A MESSAGE</h1>
                    <h>youremail@gmail.com</h>
                    <h6>Office@yourbusinessname.com</h6>
                </div>
            </div>
        </div> 

    </div>
  
  </>
}

export default Footer
