// import React from 'react'
import{FaListUl,FaUser,FaUsers} from 'react-icons/fa'
function Left() {
  return (
   <div className="bg-black h-[100vh] lg:w-[200px] w-[100px] ">
    <div className=" h-[100vh] lg:w-[180px] ml-4     xl:border-yellow-500 xl:border-l-[1px] ">
     <div className=" lg:ml-4 ml-2 pt-3">
         <span className="text-white text-[22px] font-semibold ">Fud</span>
         <span className="text-[#989A38] text-[22px] font-semibold ">Cona</span>
     </div>
     {/* ___________navpart___ */}
     <div className="text-white lg:ml-5 ml-1 flex mt-[30%] ">
    <FaListUl className=" text-[18px] "/>
    <p className="xl:ml-8 ml-2 opacity-70 -mt-1" >overview</p>
     </div>
     <div className="text-white lg:ml-5  sm:ml-1 flex mt-[30%] ">
    <FaUser className=" text-[18px] "/>
    <p className="xl:ml-8 ml-2 opacity-70 -mt-1" >Tables</p>
     </div>
     <div className="text-white lg:ml-5 sm:ml-1 md: flex mt-[30%] ">
    <FaUsers className=" text-[18px] "/>
    <p className="xl:ml-8 opacity-70 -mt-1" >Orders</p>
     </div>
     <div className="text-white lg:ml-5 ml-1 flex mt-[30%] ">
    <FaListUl className=" text-[18px] "/>
    <p className="xl:ml-8 -mt-1" >Menu</p>
     </div>
     <div className=" lg:h-[50px] h-[30px] w-[3px] -ml-[2px]  bg-white -mt-[27px]  "></div>
     {/* ______downsets____ */}

     <div className="bg-[#989A38] lg:h-[20%] h-[19.9%]  md:h-[47%] lg:mt-[61%] xl:mt-[137%] mt-[195%] w-[auto]">
     <div className="text-white lg:ml-5 ml-1 flex  lg:pt-[30px] pt-[50px] ">
    <FaListUl className=" text-[18px] "/>
    <p className="ml-8 opacity-70 -mt-1" >overview</p>
     </div>

     <div className="text-white lg:ml-5 ml-1 flex relative lg:top-[40px] top-[40px] ">
    <FaListUl className=" text-[18px] "/>
    <p className="ml-8 opacity-70 -mt-1" >overview</p>
     </div>
     
     </div>
    </div>
   </div>
  )
}

export default Left;