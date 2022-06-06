// import React from 'react'
import Sidebar from './sidebar'
import {FaArrowAltCircleRight} from 'react-icons/fa'
import {FaBell} from 'react-icons/fa'
import {FaSearch} from 'react-icons/fa'
import {FaPlusCircle} from 'react-icons/fa'
import image from '../Images/image.jpg'
import { useEffect, useState } from 'react'

function Menu() {
  
    let [menuItems, setMenuItems] = useState([])
    async function getMenuItems (){
        const api = await fetch('https://196.223.240.154:8099/supapp/api/menu-items', {
            method: 'GET',
        })
        const data = await api.json()
        // const menuItems = data.content   
        setMenuItems(data.content)
        console.log(menuItems);
      
    }
    useEffect(()=>{
        getMenuItems()
    }, [])
     
    
  return (
      
      <div className=' h-screen w-full'>
        <Sidebar />
        <div className='flex  mt-12 content-center ' style={{justifyContent:"center"}}>
            <div className='flex pl-8 '>
            <div className='flex gap-4 w-full'>
            <div className='h-5 w-5 bg-[#989A38] rounded-full '></div>
            <div className='h-5 w-5 bg-[#989A38] rounded-full '></div>
            <div className='h-5 w-5 bg-[#989A38] rounded-full '></div>
            </div>
            <div className='flex absolute right-24 mx-12 gap-4'>
             <i className='text-gray-300  mt-4'><FaBell /></i>
             <i className='text-gray-300  mt-4'><FaSearch /></i>
             <div className='h-16 w-[2px] bg-[#989A38] ml-4'></div>
             <p className=' pt-4 text-sm mx-4'>Ingabire Divine</p>
            </div>
              <img src={image} alt="" className='absolute h-12 w-12 rounded-full right-8' />
            </div>
            </div>
            
            <div className=' w-[73vw] border-[1px] border-solid border-[#989A38] absolute right-24 top-36 flex ' id='shadow'>
                <div className='block '>
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
               <div className='overflow-y-scroll h-[60vh] scroll-m-2 scrollbar-thin scrollbar-thumb-custom scrollbar-track-custom-light'>
                {
                    menuItems.map(item => {
                    
               return(
                <div className='bg-white h-32 rounded-2xl ml-24 pt-4 pl-5 mt-2 flex'>
                <img src={image} alt="" className='h-12 w-12 rounded-lg ' />
                <div className='pl-8'>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p className='text-[#989A38]'>{item.unitPrice}</p>
                </div>
               </div>
                
               )
            })
        }
        </div>
              
               {/* <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24  pl-5 mt- flex'>
                <img src={image} alt="" className='h-12 w-12 rounded-lg ' />
                <div className='pl-8 pt-'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
             
               </div> */}
               {/* <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24  pl-5 mt- flex'>
                <img src={image} alt="" className='h-12 w-12 rounded-lg ' />
                <div className='pl-8 pt-'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
             
               </div>
               <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24  pl-5 mt- flex'>
                <img src={image} alt="" className='h-12 w-12 rounded-lg ' />
                <div className='pl-8 pt-'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
             
               </div> */}
               {/* <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24  pl-5 mt- flex'>
                <img src={image} alt="" className='h-12 w-12 rounded-lg ' />
                <div className='pl-8 pt-'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
             
               </div> */}
               {/* <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24  pl-5 mt- flex'>
                <img src={image} alt="" className='h-12 w-12 rounded-lg ' />
                <div className='pl-8 pt-'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
             
               </div> */}
               {/* <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24  pl-5 mt- flex'>
                <img src={image} alt="" className='h-12 w-12 rounded-lg ' />
                <div className='pl-8 pt-'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
             
               </div> */}
               {/* <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24  pl-5 mt- flex'>
                <img src={image} alt="" className='h-12 w-12 rounded-lg ' />
                <div className='pl-8 pt-'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
             
               </div> */}
               {/* <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24  pl-5 mt- flex'>
                <img src={image} alt="" className='h-12 w-12 rounded-lg ' />
                <div className='pl-8 pt-'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
             
               </div> */}
               {/* <div className='bg-white h-32 w-[38vw] rounded-2xl ml-24  pl-5 mt- flex'>
                <img src={image} alt="" className='h-12 w-12 rounded-lg ' />
                <div className='pl-8 pt-'>
                <p>Kafir lime Vodka,Lemongrass,Ginger</p>
                <p>Tom Yummy-12.5</p>
                <p className='text-[#989A38]'>Frw,5000</p>
                </div>
                </div> */}
               <div className='flex ml-[25em] mb-8'>
               <h1 className='text-4xl text-[#989A38] text-center pt-6'>More</h1>
               <i className='text-4xl text-[#989A38] pt-8 pl-8'><FaArrowAltCircleRight /></i>
               </div>
              </div>
              <div className='absolute right-20 text-sm'>
              <div className='block'>
              <div className='mt-60 ' >
               <h1 className='flex text-[#989A38] text-xl ml-44'>Add Item</h1>
               <div className='flex'>
               <h1 className=' mt-10 ml-40 text-lg'>Create new Item</h1>
               <i className='pt-12 pl-24 text-gray-300'><FaPlusCircle /></i>
               </div>
               <div>
                   <div>
                    <div className='h-12 w-64 ml-40 bg-gray-200 border-[1px] mt-6 border-[#989A38] flex text-center pt-4'>
                        <input type="radio" className='h-1/3 w-10 ml-4 mx-6' />Dessert
                    </div>
                    <div className='h-12 w-64 ml-40 bg-gray-200 border-[1px]  border-[#989A38] flex  text-center pt-4'>
                        <input type="radio" className='h-1/3 w-10  ml-4 pt-4 pl-6 mx-6 m'/>Main
                    </div>
                    <div className='h-12 w-64 ml-40 bg-gray-200 border-[1px]  border-[#989A38] flex text-center pt-4'>
                        <input type="radio" className='h-1/3 w-10 ml-4  pt-4 mx-6' />Drink
                    </div>
                    <div className='h-12 w-64 ml-40 bg-gray-200 border-[1px] border-[#989A38] flex text-center  pt-4'>
                        <input type="radio" className='h-1/3 w-10 ml-4  pt-4 mx-6'/>Appetizer
                    </div>
                    <div className='h-12 w-64 ml-40 bg-gray-200 border-[1px]  border-[#989A38] flex text-center  pt-4'>
                        <input type="radio" className='h-1/3 w-10 ml-4  pt-4 mx-6'/>Starter
                    </div>
                   </div>
               </div>
               </div>
               </div>
               </div>
              
          
               </div>
               <div className='mt-[58em] mb-4'>
               <div className='flex content-center' style={{justifyContent:"center"}}>
               <div className='h-6 w-6 bg-[#989A38] rounded-full '></div>
              <div className='h-6 w-6 bg-[#989A38] rounded-full ml-6'></div>
               <div className='h-6   w-6 bg-[#989A38] rounded-full ml-6'></div>
               </div>
               </div>

             
        </div>

   
  )
}

export default Menu;