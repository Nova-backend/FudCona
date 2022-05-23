// import React from 'react'
import {FaSearch,FaBell,FaPlus,FaEye} from 'react-icons/fa'
function Feed() {
  return (
    <div>
        {/* _________top________ */}
    <div>
        <p class="text-black  relative xl:top-[28px] xl:text-[18px] text-[14px]  pl-64 top-3 ">Overview</p>
        <div class="flex absolute right-10   xl:space-x-[30px] space-x-[10px] xl:mt-[1px] -mt-[6px]  ">
        <FaSearch class="  xl:text-[21px] text-[#B9B9B9] "/>
        <FaBell class="xl:visible xl:text-[21px] text-[#B9B9B9] "/>
        <div class="h-[28px] -mt-1 w-[3px] bg-[#989A38] "></div>
        <p className='xl:text-[16px]  text-[14px] '>jacques kagabo </p>
        <img src='/img1.jpg' alt='' className='xl:h-[45px] h-[30px] xl:w-[45px] w-[30px] object-cover rounded-full xl:-mt-3 -mt-[2px] '/>
        </div>
        {/* __________newclient______ */}
    </div>
    <div className='bg-[#FAFAF5] xl:h-[140px] xl:mt-24 rounded-[10px] xl:w-[768px] xl:ml-[23em] mr-auto  drop-shadow-xl shadow-black w-[210px]  h-[150px] '>
       <p className='xl:text-[20px] font-semibold ml-3 pt-4  '>New Client</p>
       <p className='text-[15px] mt-[50px] ml-3 opacity-40 '>Add new client </p>
       <p className='h-[0.8px] w-[90%] mt-3 ml-3 bg-black'></p>
       <FaPlus className='text-[19px] text-[#CCCCCC] ml-[90%] -mt-9 '/>
    </div>
    {/* _____________all clients________ */}
     <div className='xl:h-[500px] xl:w-[770px] bg-[#FAFAF5]  absolute xl:top-[42%] xl:ml-[23em] top-[25%] h-[470px]  w-[210px] ml-1 pl-16 '>
          <p className='xl:text-[20px] font-semibold ml-3 mt-2 '>All clients</p>
          <div className=' flex ml-[13px] mt-6 xl:text-[18px] xl:space-x-[70px] opacity-70 '>
            <p>client details </p>
            <p>Sales</p>
            <p className="pl-8">Detailed report</p>
            <p>Category</p>
          </div>

          <div className='flex ml-3  mt-10 mb-[7%]   '>

          <div className=''>
         <p className=' font-semibold xl:text-[17px] mb-1 '>Say Restuarant </p>
         <p className='opacity-70 text-[14px] '>Updated yesterday </p>
          </div>
          <div className='ml-[7%] '>
            <p className=' font-semibold xl:text-[17px] mb-1 '>234500 FRW</p>
            <p className='opacity-70 text-[14px] '>On 2345000</p>
          </div>
          <div className='ml-[6%] '>
            <FaEye className='xl:text-[40px] mt-2 ml-14 text-[#989A38]  '/>
          </div>
          <div className='ml-[18%] '>
            <button className='xl:h-7 xl:w-[80px] bg-[#C4C4C4] border-2 border-[#989A38]  text-[14px] font-semibold mt-1 -ml-[14px] rounded-[5px]  '>RESTO</button>
          </div>
          </div>
          
          {/* _______second_______ */}
          <div className='flex ml-3  mt-4 mb-[7%]   '>

          <div className=''>
         <p className=' font-semibold xl:text-[17px] mb-1 '>choose kigali</p>
         <p className='opacity-70 text-[14px] '>Updated yesterday </p>
          </div>
          <div className='ml-[7%] '>
            <p className=' font-semibold xl:text-[17px] mb-1 '>234500 FRW</p>
            <p className='opacity-70 text-[14px] '>On 2345000</p>
          </div>
          <div className='ml-[6%] '>
            <FaEye className='xl:text-[40px] mt-2 ml-14 text-[#989A38]  '/>
          </div>
          <div className='ml-[18%] '>
            <button className='h-7 w-[80px] bg-[#C4C4C4] border-2 border-[#989A38]  text-[14px] font-semibold mt-1 -ml-[14px] rounded-[5px]  '>RESTO</button>
          </div>
          </div>
          {/* ________third________ */}
          <div className='flex ml-3  mt-4 mb-[7%]   '>

          <div className=''>
         <p className=' font-semibold text-[17px] mb-1 '>Burger planet </p>
         <p className='opacity-70 text-[14px] '>Updated yesterday </p>
          </div>
          <div className='ml-[7%] '>
            <p className=' font-semibold text-[17px] mb-1 '>234500 FRW</p>
            <p className='opacity-70 text-[14px] '>On 2345000</p>
          </div>
          <div className='ml-[6%] '>
            <FaEye className='xl:text-[40px] mt-2 ml-14 text-[#989A38]  '/>
          </div>
          <div className='ml-[18%] '>
            <button className='h-7 w-[80px] bg-[#C4C4C4] border-2 border-[#989A38]  text-[14px] font-semibold mt-1 -ml-[14px] rounded-[5px]  '>RESTO</button>
          </div>
          </div>
          {/* _______________fourth_________ */}
          <div className='flex ml-3  mt-4 mb-[7%]   '>

          <div className=''>
         <p className=' font-semibold text-[17px] mb-1 '>M Hotel </p>
         <p className='opacity-70 text-[14px] '>Updated yesterday </p>
          </div>
          <div className='ml-[7%] '>
            <p className=' font-semibold text-[17px] mb-1 '>234500 FRW</p>
            <p className='opacity-70 text-[14px] '>On 2345000</p>
          </div>
          <div className='ml-[6%] '>
            <FaEye className='xl:text-[40px] mt-2 ml-14 text-[#989A38]  '/>
          </div>
          <div className='ml-[18%] '>
            <button className='h-7 w-[80px] bg-[#C4C4C4] border-2 border-[#989A38]  text-[14px] font-semibold mt-1 -ml-[14px] rounded-[5px]'>RESTO</button>
          </div>
          </div>
     </div>
    </div>
  )
}

export default Feed