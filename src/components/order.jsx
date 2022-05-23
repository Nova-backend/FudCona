import React from 'react'
import Sidebar from './sidebar'
import { FaBell, FaSearch, FaPlusCircle } from 'react-icons/fa'
import image from '../Images/image.jpg'
// import { Link} from 'react-router-dom'


function Order(props) {
     
    const { orders,services } = props;

    return (
        <div className='flex bg-[#FAFAF5] w-[100vw] h-auto Order overflow-x-hidden'>
            <Sidebar />
            <h1 className='text-3xl pt-12 pl-8 bolder'>Orders</h1>
            <div className='flex  mt-10 content-center' style={{ justifyContent: "center" }}>

                <i className='text-gray-300 text-4xl absolute right-[13em] pt-2'><FaBell /></i>
                <i className='text-gray-300 text-4xl absolute right-[11em] pt-2'><FaSearch /></i>
                <div className='h-16 w-[2px] bg-[#989A38]  absolute right-[23em]'></div>
                <p className='absolute right-56 pt-4 text-lg font-quickSand font-bold'>Ingabire Divine</p>
                <img src={image} alt="" className='absolute h-20 w-20 rounded-full right-24' />
            </div>
            <div className='h-[180vh] w-[78vw] bg-white rounded-2xl top-48 absolute bottom-10 right-12 '>
                <div className='flex'>
                    <div className='block pt-6 pl-8'>
                        <h1 className='text-3xl font-quickSand'>Orders</h1>
                        <p>os of 25 May 2022, 09:41 PM</p>
                    </div>
                    <div className='flex mt-10 ml-14'>
                        <button className='h-14 w-32 bg-white border-[1px] border-[#989A38] text-[#989A38] rounded-3xl '>New</button>
                        <button className='h-14 w-32 bg-white border-[1px] border-[#989A38] text-[#989A38] rounded-3xl ml-2'>Delivered</button>
                        <button className='h-14 w-32 bg-white border-[1px] border-[#989A38] text-[#989A38] rounded-3xl ml-2'>Rejected</button>
                        <button className='h-14 w-32 bg-white border-[1px] border-[#989A38] text-[#989A38] rounded-3xl ml-2 '>All</button>
                    </div>

                </div>



                <div className='flex'>
                <div className='block'>
                    {orders.map(order => (
                        <div className='h-36 w-[52vw] bg-[#FAFAF5] shadow-md shadow-slate-300 rounded-3xl flex mt-8 ml-8'>

                            <div className='flex'>
                                
                                <h1 className='text-2xl text-[#989A38] pt-14 pl-12' >{order.OrderDesc}</h1> 
                                <div className='h-12 w-[2px] bg-[#989A38] ml-3 mt-12'></div> 
                            </div>
                            <div className='pt-6 pl-12'>

                                <p>{order.describeContent}</p>
                                <p>{order.numberContent}</p>
                                <div className='flex'>
                                    <div className='h-[1px] w-12 bg-[#989A38] ml-2 mt-6'></div>
                                    <p className='pt-2 pl-2'>{order.tableContent}</p>
                                    <div className='h-[1px] w-12 bg-[#989A38] ml-2 mt-6'></div>
                                </div>
                            </div>
                            <div className='mt-6  ml-80'>
                                <h1 className='text-2xl text-[#989A38] pl-4'>{order.moneyContent}</h1>
                                <div className='flex'>
                                    <div className='h-[1px] w-8 bg-[#989A38] ml-2 mt-6'></div>
                                    <p className='pt-2 pl-2'>{order.roleContent}</p>
                                    <div className='h-[1px] w-8 bg-[#989A38] pl-4 ml-2 mt-6'></div>
                                </div>
                                <p className='pl-6'>{order.telContent}</p>
                            </div>

                        </div>))}

                      </div>

                   
                   <div className='block ml-24'>
                   {services.map(service => (
                <div className='h-40 w-60  border-b-2 border-gray-400 '>
                    <h1 className='text-gray-400 text-2xl text-center pt-4 '>{service.serviceGiven}</h1>
                    <h1 className='text-3xl text-center pt-8'>{service.numberService}</h1>
                </div>))}
                
                </div>
                 
                  <div className=''>
                   <div className='absolute right-20 top-[65em]'>
                       <div className='h-32 w-72 rounded-t-2xl border-2 border-solid border-gray-300 absolute right-0'>
                           <div>
                               <h1 className='pl-6 pt-6'>Add Order</h1>
                               <p className='pl-6 text-gray-400'>Manually</p>
                           </div>
                       <div className='flex'>
                         <h1 className='text-lg pl-2 pt-4 '>Create new Item</h1>
                        <i className='pt-2 pl-24 text-4xl text-gray-300'><FaPlusCircle /></i>
                     </div>

                       </div>
                    <div className='h-20 w-72 ml-40 bg-white border-[1px] mt-32 border-gray-300 flex text-xl text-center pt-4'>
                        <input type="radio" className='h-10 w-10 ml-4 mx-6' />Dessert
                        <button className='h-10 ml-8 w-20 bg-[#989A38] text-white rounded-lg'>NEW</button>
                    </div>
                    <div className='h-20 w-72 ml-40 bg-white border-[1px]  border-gray-300 flex text-xl text-center pt-4'>
                        <input type="radio" className='h-10 w-10  ml-4 pt-4 pl-6 mx-6 m'/>Main
                        <button className='h-10 ml-14 w-20 bg-[#989A38] text-white rounded-lg'>NEW</button>
                    </div>
                    <div className='h-20 w-72 ml-40 bg-white border-[1px]  border-gray-300 flex text-xl text-center pt-4'>
                        <input type="radio" className='h-10 w-10 ml-4  pt-4 mx-6' />Drink
                        <button className='h-10 ml-14 w-20 bg-[#989A38] text-white rounded-lg'>NEW</button>
                    </div>
                    <div className='h-20 w-72 ml-40 bg-white border-[1px] border-gray-300 flex text-xl text-center  pt-4'>
                        <input type="radio" className='h-10 w-10 ml-4  pt-4 mx-6'/>Appetizer
                        <button className='h-10 ml-4 w-20 bg-[#989A38] text-white rounded-lg'>NEW</button>
                    </div>
                    <div className='h-20 w-72 ml-40 bg-white border-[1px]  border-gray-300 flex text-xl text-center  rounded-b-3xl pt-4'>
                        <input type="radio" className='h-10 w-10 ml-4  pt-4 mx-6'/>Starter
                        <button className='h-10 ml-10 w-20 bg-[#989A38] text-white rounded-lg'>NEW</button>
                    </div>
                   </div>
               </div>
                </div>
                

            </div>
        </div>

    )
}

export default Order