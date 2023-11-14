import React, { useEffect, useState } from 'react';
import '../CSS/Service.css'
import {MdKeyboardArrowDown} from 'react-icons/md';
import {MdApps} from 'react-icons/md';

import {GoDotFill} from 'react-icons/go';
import image1 from '../Images/home_slider3.1.jpg';
import image2 from '../Images/home_slider3.2.jpg';
import image3 from '../Images/home_slider3.3.jpg';
import image4 from '../Images/home_slider3.6.jpg';
import image5 from '../Images/home_slider3.5.jpg';
import image6 from '../Images/home_slider3.4.jpg';
import image7 from '../Images/home_slider1.jpg';
import image8 from '../Images/about_home.jpg';
import image9 from '../Images/destination_9.jpg';



let Services=()=>{
   
      let [value,Setvalue]=useState("Sort By")
    
                const [data,setData] = useState([
                  {id:1,image:image1,Name:"Bali",amount:679,},
                {id:2,image:image2,Name:"Indonesia",amount:579},
                {id:3,image:image3,Name:"San Francisco",amount:399},
                {id:4,image:image4,Name:"Paris",amount:639},
                {id:5,image:image5,Name:"Phi Phi Island",amount:929},
                {id:6,image:image6,Name:"Mykonos",amount:719},
                {id:7,image:image7,Name:"Paris",amount:515},
                {id:8,image:image8,Name:"Phi Phi Island",amount:879},
                {id:9,image:image9,Name:"Mykonos",amount:679}])
    useEffect(()=>{
      
    })
    let updateHandler=(val)=>{
      if("Show All"==val){
        Setvalue(val)
      }
      if("Name"==val){
        Setvalue(val)
        setData((prev)=>prev.sort((a,b)=>a.Name.localeCompare(b.Name)));
      }
      if("Price"==val){
        Setvalue(val)
        setData((prev)=>prev.sort((a,b)=>a.amount-b.amount));
      }
    }



  return <>
  <div className='Service_container w-[100%] h-[530px]'>
    
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
    <div className='Service_container_box1'>
      <h2>SIMPLY AMAZING PLACES</h2>
      <h1 className='mt-[1%]'>Popular Destinations</h1>
      <div className='flex justify-between  mt-[10%]'>
          <div className='Serivce_Ul_container_LeftSide'>
              <div className='Serivce_Ul_container_leftSide_leftSide' >
                  <p className='bg-gray-100'>{value}<MdKeyboardArrowDown className='mt-[-3px] text-[24px]'/></p>
                  <ul>
                    <li className='border-b-2' onClick={()=>{updateHandler("Show All")}}>Show All</li>
                    <li className='border-b-2' onClick={()=>{updateHandler("Name")}}>Name</li>
                    <li onClick={()=>{updateHandler("Price")}}>Price</li>
                  </ul>
              </div>
              <div className='Serivce_Ul_container_leftSide_leftSide'>
                  <p>{"Categories"}<MdKeyboardArrowDown className='mt-[-3px] text-[24px]'/></p>
                    <ul>
                      <li>Categories</li>
                      <li>Categories</li>
                      <li>Categories</li>
                    </ul>   
              </div>
          </div>
          <div><MdApps/></div>
      </div>
      
      <div className='mt-[5%] grid grid-flow-row grid-cols-1 gap-8  w-[100%] md:grid-rows-1 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3  '>
        {
          data.map((item)=>{


            return <div className='w-[100%] h-[510px]'>
                      <div className='w-[100%] h-[45%]'>
                        <img src={item.image} className='w-[100%] h-[100%]'/>
                      </div>
                      <div className='mt-[2%]'>
                        <h5 className='text-[30px] font-medium'>{item.Name}</h5>
                        <p className='text-[14px] text-gray-400'>Nulla pretium tincidunt felis, nec.</p>
                        <h4 className='text-[16px] font-bold'>From  ${item.amount}</h4>
                        <div className='mt-[8%]'>
                          <div className='flex'><GoDotFill className='mt-[1%]'/><h className="ml-[7%] text-[17px] mt-[-1%] text-gray-500 font-medium">5 Stars Hotel</h></div>
                          <div className='flex mt-[3%]'><GoDotFill className='mt-[1%]'/><h className="ml-[7%] text-[17px] mt-[-1%] text-gray-500 font-medium">All Inclusive</h></div>
                          <div className='flex mt-[3%]'><GoDotFill className='mt-[1%]'/><h className="ml-[7%] text-[17px] mt-[-1%] text-gray-500 font-medium">Flight tickets included</h></div>
                          <div className='flex mt-[3%]'><GoDotFill className='mt-[1%]'/><h className="ml-[7%] text-[17px] mt-[-1%] text-gray-500 font-medium">Guided visits</h></div>
                        </div>  
                      </div>
                    </div>
               })
                 
        }
      </div>
     
    </div>

  

  </>
}


export default Services;
