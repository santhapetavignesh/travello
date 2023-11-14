import React from 'react';
import '../CSS/NewPage.css';
import image1 from '../Images/News_3.png';
import image2 from '../Images/News_4.png';
import image3 from '../Images/News_5.png';


let News=()=>{
  return <>
   <div className='News_container w-[100%] h-[530px]'>
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

  <div className='News_Section_main_container '>
      <div className='News_Section_main_container_box1'>
        <div className='News_Section1_main_container_box1'></div>
        <div className='News_Section1_main_container_box2 mt-3'>
        <h1 className='flex text-[40px] font-sans font-bold'>02<p className='text-[14px] mt-[4.5%] ml-[1%] text-slate-400 font-normal'>JUNE</p></h1>
        <h2 className='text-[24px] font-medium hover:text-gray-500 cursor-pointer'>Best tips to travel light</h2>
        <h3 className='text-[12px] text-gray-400'>LIFESTYLE & TRAVEL</h3>
        <h6 className='text-[17px] mt-[3%] text-left text-gray-500'>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet. Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.</h6>
        <h5 className='text-[18px] mt-[7%] font-medium hover:text-gray-500 cursor-pointer'>Read More</h5>
        </div>
        <div className='News_Section1_main_container_box3 mt-[15%]'></div>
        <div className='News_Section1_main_container_box4 mt-3'>
        <h1 className='flex text-[40px] font-sans font-bold'>02<p className='text-[14px] mt-[4.5%] ml-[1%] text-slate-400 font-normal'>JUNE</p></h1>
        <h2 className='text-[24px] font-medium hover:text-gray-500 cursor-pointer'>10 Amazing Destination for you this summer</h2>
        <h3 className='text-[12px] text-gray-400'>LIFESTYLE & TRAVEL</h3>
        <h6 className='text-[17px] mt-[3%] text-left text-gray-500'>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet. Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.</h6>
        <h5 className='text-[18px] mt-[7%] font-medium hover:text-gray-500 cursor-pointer'>Read More</h5>
        </div>
        <div className='News_Section1_main_container_box5 mt-[15%]'></div>
        <div className='News_Section1_main_container_box4 mt-3'>
        <h1 className='flex text-[40px] font-sans font-bold'>02<p className='text-[14px] mt-[4.5%] ml-[1%] text-slate-400 font-normal'>JUNE</p></h1>
        <h2 className='text-[24px] font-medium hover:text-gray-500 cursor-pointer'>Best tips to travel light</h2>
        <h3 className='text-[12px] text-gray-400'>LIFESTYLE & TRAVEL</h3>
        <h6 className='text-[17px] mt-[3%] text-left text-gray-500'>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet. Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.</h6>
        <h5 className='text-[18px] mt-[7%] font-medium hover:text-gray-500 cursor-pointer'>Read More</h5>
        </div>
        <div className='text-[18px] flex text-gray-500 font-medium mt-[15%] '><p className='text-black'>1.</p><p className='ml-1 hover:text-black'>2.</p><p className='ml-1 hover:text-black'>3.</p><p className='ml-1 hover:text-black'>4.</p><p className='ml-1 hover:text-black'>5.</p></div>
      </div>
      
      <div className='News_Section_main_container_box2'>

        <div className='News_section_child1_box2'>
          <h1>Categories</h1>
          <div className='p-[8%]  News_section_child1_inside_text'>
          <div className=' News_section_child_emty'><h className="flex justify-between ">Travels<p>(09)</p></h></div>
          <div className=' News_section_child_emty'><h className="flex justify-between">Organization<p>(12)</p></h></div>
          <div className=' News_section_child_emty'><h className="flex justify-between">Tips & Tricks<p>(16)</p></h></div>
          <div className=' News_section_child_emty'><h className="flex justify-between">Uncategorized<p>(22)</p></h></div>
          </div>
          <h2>Latest News</h2>
        </div>
        <div className='News_section_1_child2 mt-[7%]'>
          <div className='News_section_child2_box4'>
          <div className='News_section_child2_box_card'>
            <div className='News_section_child2_box_card1'>
              <img src={image1}/>
            </div>
            <div className='News_section_child2_box_card2'>
              <h1 className='flex text-[16px] font-sans font-medium'>02<p className='text-[14px] mt-[1.5%] ml-[3%] text-slate-400 font-normal'>JUNE</p></h1>
              <h2 className='text-[16.5px] font-semibold mt-[2%] hover:opacity-40'>Best tips to travel light</h2>
              <h3 className='text-[16px] text-gray-400 mt-[3%]'>Pellentesque sit amet..</h3>
            </div>
          </div>
          <div className='News_section_child2_box_card mt-[4%]'>
            <div className='News_section_child2_box_card1'>
              <img src={image2}/>
            </div>
            <div className='News_section_child2_box_card2 '>
              <h1 className='flex text-[16px] font-sans font-medium'>02<p className='text-[14px] mt-[1.5%] ml-[3%] text-slate-400 font-normal'>JUNE</p></h1>
              <h2 className='text-[16.5px] font-semibold mt-[2%]'>Best tips to travel light</h2>
              <h3 className='text-[16px] text-gray-400 mt-[3%]'>Pellentesque sit amet..</h3>
            </div>
          </div>
          <div className='News_section_child2_box_card mt-[4%]'>
            <div className='News_section_child2_box_card1'>
              <img src={image3}/>
            </div>
            <div className='News_section_child2_box_card2'>
              <h1 className='flex text-[16px] font-sans font-medium'>02<p className='text-[14px] mt-[1.5%] ml-[3%] text-slate-400 font-normal'>JUNE</p></h1>
              <h2 className='text-[16.5px] font-semibold mt-[2%]'>Best tips to travel light</h2>
              <h3 className='text-[16px] text-gray-400 mt-[3%]'>Pellentesque sit amet..</h3>
            </div>
          </div>
          </div>
       </div>

       
       <div className='SectionDiscount_Child_box2_1'>
        <div className='w-[100%] h-[53%]'></div>

        <div className='SectionDiscount_Child4_child1_box2'>
        </div>
        <div className='SectionDiscount_Child4_child2_box2'>
            <h1>Get a 20% Discount</h1>
            <h3>Buy Your Vacation Online Now</h3>
        </div>
       
      </div>

      </div>
  </div>

  

  </>
}
export default News;