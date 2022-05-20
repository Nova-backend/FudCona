import React from 'react'
import { FaListUl,FaTable,FaJediOrder,FaChartPie,FaUser} from 'react-icons/fa'
import {Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className=''>
        <div className='h-[200vh] w-80 bg-black flex '>
          
            <div className='h-[200vh] w-[1px] bg-[#989A38] ml-4'></div>
            <Link to='./overview' >
            <i className='text-white text-2xl mt-32 absolute ml-8 flex '><FaListUl /><span className='text-lg font-normal pl-4'>Overview</span></i>
            </Link>
            <i className='text-white text-2xl mt-48 absolute ml-12 flex'><FaTable /><span className='text-lg font-normal pl-4'>Tables</span></i>
            {/* <Link to='./orderContent'> */}
            <i className='text-white text-2xl mt-64 absolute ml-12 flex'><FaJediOrder /><span className='text-lg font-normal pl-4'>Orders</span></i>
            {/* </Link> */}
            <i className='text-white text-2xl mt-80 absolute ml-12 flex'><FaChartPie /><span className='text-lg font-normal pl-4'>Menu</span></i>
                <h1 className='text-3xl text-white pl-6 pt-7 font-bold font-quickSand'>Fud<span className='text-3xl text-[#989A38]'>Cona</span></h1>
                
               <div className='h-64 w-[16.3vw] bg-[#989A38] absolute bottom-0 ml-2'> 
                 <Link to='./Account'>
               <i className='text-white text-2xl mt-16 absolute ml-12 flex'><FaUser /><span className='text-lg font-normal pl-4'>Account</span></i>
               </Link>
                <i className='text-white text-2xl mt-36 absolute ml-12 flex'><FaListUl /><span className='text-lg font-normal pl-4'>Overview</span></i> 
               </div>
        </div>
      
    </div>
  )
}
export default Sidebar