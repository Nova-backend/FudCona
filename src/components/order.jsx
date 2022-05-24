// import React from 'react'
import Sidebar from './sidebar'
import { FaBell, FaSearch, FaPlusCircle } from 'react-icons/fa'
import image from '../Images/image.jpg'
// import { Link} from 'react-router-dom'


function Order(props) {
     
    const { orders, services } = props;

    return (
        <div>
        <div className='flex bg-[#FAFAF5] w-full h-28 Order  overflow-x-hidden '>
            <Sidebar/>
            <h1 className='text-xl pt-12 pl-8 bolder'>Orders</h1>
            <div className='flex  content-center' style={{ justifyContent: "center" }}>

                <i className='text-gray-500 text-2xl absolute right-[15em] pt-8'><FaBell /></i>
                <i className='text-gray-500 text-2xl absolute right-[12em] pt-8'><FaSearch /></i>

                <div className='h-16 w-[2px] bg-[#989A38] mt-4  absolute right-[16em]'></div>
                <p className='absolute right-28 pt-10 text-sm font-quickSand font-bold'>Ingabire Divine</p>
                <img src={image} alt="" className='absolute h-16 w-16 rounded-full mt-4 right-8' />
            </div>
            </div>
            <div className='h-[90vh] w-[78vw] bg-white rounded-2xl absolute right-12 '>
                <div className='flex'>
                    <div className='block pt-6 pl-8'>
                        
                        <h1 className='text-xl font-quickSand'>Orders</h1>
                        <p>os of 25 May 2022, 09:41 PM</p>
                    </div>
                    <div className='flex mt-10 ml-14 gap-2'>
                        <button className='h-12 w-28 hover:bg-yellow hover:text-white bg-white border-[1px] border-[#989A38] text-[#989A38] rounded-3xl'>New</button>
                        <button className='h-12 w-28 hover:bg-yellow hover:text-white bg-white border-[1px] border-[#989A38] text-[#989A38] rounded-3xl'>Delivered</button>
                        <button className='h-12 w-28 hover:bg-yellow hover:text-white bg-white border-[1px] border-[#989A38] text-[#989A38] rounded-3xl'>Rejected</button>
                        <button className='h-12 w-28 hover:bg-yellow hover:text-white bg-white border-[1px] border-[#989A38] text-[#989A38] rounded-3xl '>All</button>
                    </div>

                </div>



                <div className='flex'>
                <div className='block  overflow-x-hidden h-[70vh] w-5/6 overflow-y-scroll  scroll-m-2 scrollbar-thin scrollbar-thumb-custom scrollbar-track-custom-light '>
                    {orders.map(order => (
                        <div className='h-32 w-full bg-[#FAFAF5]  shadow-md shadow-slate-300 rounded-3xl flex mt-8 ml-8'>

                            <div className='flex'>
                                
                                <h1 className='text-xl text-[#989A38] pt-14 pl-12' >{order.createdBy}</h1> 
                                <div className='h-12 w-[2px] bg-[#989A38] ml-3 mt-12'></div> 
                            </div>
                            <div className='pt-6 pl-12'>

                                <p >{order.orderDetails.map((item)=>{
                                    return item.item.description
                                })}</p>
                                <p>{order.numberOfProducts}</p>
                                <div className='flex'>
                                    <div className='h-[1px] w-12 bg-[#989A38] ml-2 mt-6'></div>
                                    <p className='pt-2 pl-2'>{order.orderType}</p>
                                    <div className='h-[1px] w-12 bg-[#989A38] ml-2 mt-6'></div>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <h1 className='text-2xl text-[#989A38] pl-52'>{order.orderDetails.map((item)=>{
                                    return item.item.unitPrice
                                })}</h1>
                                <div className='flex ml-20'>
                                    <div className='h-[1px] w-8 bg-[#989A38] ml-16 mt-6'></div>
                                    <p className='pt-2 pl-2'>{order.status}</p>
                                    <div className='h-[1px] w-8 bg-[#989A38] pl-4 ml-2 mt-6'></div>
                                </div>
                                <p className='pl-48'>{order.customer.lastName}</p>
                            </div>

                        </div>))}

                      </div>

                   
                   <div className='block ml-24'>
                   {orders.map(order => (
                <div className='h-12 w-60 border-b-2 border-gray-400 '>
                    <h1 className='text-gray-400 text-xl text-center pt-4 '>{order.serviceProvider.name}</h1>
                    <h1 className='text-3xl text-center'>{order.numberService}</h1>
                </div>))}
                
                </div>
                 
                  <div className=''>
                   <div className='absolute right-0 top-[72vh]'>
                       <div className='h-32 w-72 rounded-t-2xl border-2 border-solid border-slate-200 absolute right-0'>
                           <div>
                               <h1 className='pl-6 pt-6'>Add Order</h1>
                               <p className='pl-6 text-gray-400'>Manually</p>
                           </div>
                       <div className='flex'>
                         <h1 className='text-lg pl-2 pt-4 '>Create new Item</h1>
                        <i className='pt-2 pl-24 text-4xl text-gray-300'><FaPlusCircle /></i>
                     </div>

                       </div>
                    <div className='h-12 w-72 ml-40 bg-white border-[1px] mt-32 border-slate-200 flex text-sm text-center pt-2'>
                        <input type="radio" className='h-4 w-10 ml-4 mx-6 ' />Dessert
                        <button className='h-8 ml-8 w-20 bg-[#989A38] text-white rounded-lg'>NEW</button>
                    </div>
                    <div className='h-12 w-72 ml-40 bg-white border-[1px]  border-slate-200 flex text-sm text-center pt-2'>
                        <input type="radio" className='h-4 w-10  ml-4 pl-6 mx-6  '/>Main
                        <button className='h-8 ml-14 w-20 bg-[#989A38] text-white rounded-lg'>NEW</button>
                    </div>
                    <div className='h-12 w-72 ml-40 bg-white border-[1px]  border-slate-200 flex text-sm text-center pt-2'>
                        <input type="radio" className='h-4 w-10 ml-4 mx-6 ' />Drink
                        <button className='h-8 ml-14 w-20 bg-[#989A38] text-white rounded-lg'>NEW</button>
                    </div>
                    <div className='h-12 w-72 ml-40 bg-white border-[1px] border-slate-200 flex text-sm text-center  pt-2'>
                        <input type="radio" className='h-4 w-10 ml-4 mx-6 '/>Appetizer
                        <button className='h-8 ml-6 w-20 bg-[#989A38] text-white rounded-lg'>NEW</button>
                    </div>
                    <div className='h-12 w-72 ml-40 bg-white border-[1px]  border-slate-200 flex text-sm text-center  rounded-b-3xl pt-2'>
                        <input type="radio" className='h-4 w-10 ml-4 mx-6 '/>Starter
                        <button className='h-8 ml-10 w-20 bg-[#989A38] text-white rounded-lg'>NEW</button>
                    </div>
                   </div>
               </div>
                </div>
                
                </div>
            </div>
        

    )
}

export default Order;