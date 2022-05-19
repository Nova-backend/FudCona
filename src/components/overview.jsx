import React from 'react'
import Sidebar from './sidebar'
import { FaBell, FaSearch, FaPlusCircle,FaArrowAltCircleRight} from 'react-icons/fa'
import image from '../Images/image.jpg'
function Overview() {
  return (
    <div className='flex'>
        <Sidebar />
        
        <div className='h-[100vh] w-[82.6vw] bg-white absolute right-0 ml-auto mr-auto'>
        <div className='flex  mt-10 content-center' style={{justifyContent:"center"}}>
            <div className='h-10 w-10 bg-[#989A38] rounded-full '></div>
            <div className='h-10 w-10 bg-[#989A38] rounded-full ml-6'></div>
            <div className='h-10 w-10 bg-[#989A38] rounded-full ml-6'></div>
             <i className='text-gray-300 text-4xl absolute right-[13em] pt-2'><FaBell /></i>
             <i className='text-gray-300 text-4xl absolute right-[11em] pt-2'><FaSearch /></i>
             <div className='h-16 w-[2px] bg-[#989A38]  absolute right-[23em]'></div>
             <p className='absolute right-56 pt-4 text-lg'>Ingabire Divine</p>
              <img src={image} alt="" className='absolute h-20 w-20 rounded-full right-24' />
            </div>
            
            <div className='h-[183vh] w-[73vw] bg-[#FAFAF5] border-[1px] border-solid border-[#989A38] absolute right-24 top-36 flex' id='shadow'>
                <div className='block'>
                <div className='flex'>
                <div className='text-xl pl-8 pt-4 '>
                <p>M</p>
                <p>E</p>
                <p>N</p>
                <p>U</p>
                <p>S</p>
                </div>
                <div className='ml-24 mt-14'>
                <button  className='h-14 w-40 bg-white border-[1px] border-[#989A38] text-[#989A38] rounded-lg '>Appetizer</button>
                <button  className='h-14 w-40 bg-white border-[1px] border-[#989A38] text-[#989A38] rounded-lg ml-2'>Appetizer</button>
                <button  className='h-14 w-40 bg-white border-[1px] border-[#989A38] text-[#989A38] rounded-lg ml-2'>Appetizer</button>
               </div>
               </div>
               
               <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24 pt-4 pl-5 mt-2 flex'>
                <img src={image} alt="" className='h-24 w-24 rounded-lg ' />
                <div className='pl-8 pt-3'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
             
               </div>
              
               <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24 pt-4 pl-5 mt-6 flex'>
                <img src={image} alt="" className='h-24 w-24 rounded-lg ' />
                <div className='pl-8 pt-3'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
             
               </div>
               <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24 pt-4 pl-5 mt-6 flex'>
                <img src={image} alt="" className='h-24 w-24 rounded-lg ' />
                <div className='pl-8 pt-3'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
             
               </div>
               <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24 pt-4 pl-5 mt-6 flex'>
                <img src={image} alt="" className='h-24 w-24 rounded-lg ' />
                <div className='pl-8 pt-3'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
             
               </div>
               <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24 pt-4 pl-5 mt-6 flex'>
                <img src={image} alt="" className='h-24 w-24 rounded-lg ' />
                <div className='pl-8 pt-3'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
             
               </div>
               <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24 pt-4 pl-5 mt-6 flex'>
                <img src={image} alt="" className='h-24 w-24 rounded-lg ' />
                <div className='pl-8 pt-3'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
             
               </div>
               <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24 pt-4 pl-5 mt-6 flex'>
                <img src={image} alt="" className='h-24 w-24 rounded-lg ' />
                <div className='pl-8 pt-3'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
             
               </div>
               <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24 pt-4 pl-5 mt-6 flex'>
                <img src={image} alt="" className='h-24 w-24 rounded-lg ' />
                <div className='pl-8 pt-3'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
             
               </div>
               <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24 pt-4 pl-5 mt-6 flex'>
                <img src={image} alt="" className='h-24 w-24 rounded-lg ' />
                <div className='pl-8 pt-3'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
             
               </div>
               <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24 pt-4 pl-5 mt-6 flex'>
                <img src={image} alt="" className='h-24 w-24 rounded-lg ' />
                <div className='pl-8 pt-3'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
                
               </div>
               <div className='flex ml-[25em]'>
               <h1 className='text-4xl text-[#989A38] text-center pt-6'>More</h1>
               <i className='text-4xl text-[#989A38] pt-8 pl-8'><FaArrowAltCircleRight /></i>
               </div>
              </div>
              <div className='block'>
              <div className='mt-60 fixed' >
               <h1 className='flex text-[#989A38] text-3xl pl-52'>Add Item</h1>
               <div className='flex'>
               <h1 className='text-xl pt-10 pl-40'>Create new Item</h1>
               <i className='pt-8 pl-24 text-4xl text-gray-300'><FaPlusCircle /></i>
               </div>
               <div>
                   <div>
                    <div className='h-20 w-72 ml-40 bg-gray-200 border-[1px] mt-6 border-[#989A38] flex text-xl text-center pt-4'>
                        <input type="radio" className='h-10 w-10 ml-4 mx-6' />Dessert
                    </div>
                    <div className='h-20 w-72 ml-40 bg-gray-200 border-[1px]  border-[#989A38] flex text-xl text-center pt-4'>
                        <input type="radio" className='h-10 w-10  ml-4 pt-4 pl-6 mx-6 m'/>Main
                    </div>
                    <div className='h-20 w-72 ml-40 bg-gray-200 border-[1px]  border-[#989A38] flex text-xl text-center pt-4'>
                        <input type="radio" className='h-10 w-10 ml-4  pt-4 mx-6' />Drink
                    </div>
                    <div className='h-20 w-72 ml-40 bg-gray-200 border-[1px] border-[#989A38] flex text-xl text-center  pt-4'>
                        <input type="radio" className='h-10 w-10 ml-4  pt-4 mx-6'/>Appetizer
                    </div>
                    <div className='h-20 w-72 ml-40 bg-gray-200 border-[1px]  border-[#989A38] flex text-xl text-center  pt-4'>
                        <input type="radio" className='h-10 w-10 ml-4  pt-4 mx-6'/>Starter
                    </div>
                   </div>
               </div>
               </div>
               </div>
              
          
               </div>
               <div className='mt-[115em]'>
               <div className='flex content-center' style={{justifyContent:"center"}}>
               <div className='h-10 w-10 bg-[#989A38] rounded-full '></div>
              <div className='h-10 w-10 bg-[#989A38] rounded-full ml-6'></div>
               <div className='h-10 w-10 bg-[#989A38] rounded-full ml-6'></div>
               </div>
               </div>
               </div>
             
        </div>
   
  )
}

export default Overview;