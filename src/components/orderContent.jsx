// import React from 'react'
import Order from './order';
import {useState, useEffect} from 'react';
import moment from 'react-moment';

function OrderContent() {
  var [data, setData] = useState([])
  var [orders, setOrders] = useState([])
  const [loader, setLoader] = useState(true)

 async function getData(){ 
   const token = localStorage.getItem("token")
   console.log(token)
   if(!token) return window.location.replace("/login")
   const api = await fetch("https://backend.supamenu.rw/supapp/api/orders?page=0&size=30", {
     method: "GET",
    headers: {'Content-Type':'application/json',Authorization:"Bearer " + token}
  })
   data = await api.json()
   setOrders(...orders, data.content)
  console.log(data.content)
  console.log(orders)
}
useEffect(()=>{
  getData()
}, [])
//   const orders = [{
//     OrderDesc: "Order 1",
//     numberContent: "Tomy Yummy | x 2",
//     describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
//     tableContent: "Table 1",
//     moneyContent: "Frw 5,000",
//     roleContent:"Guest",
//     telContent: "0786877835"
// },{
//     OrderDesc: "order2",
//     describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
//     numberContent: "Tomy Yummy | x 2",
//     tableContent: "Table 1",
//     moneyContent: "Frw 5,000",
//     roleContent:"Guest",
//     telContent: "0786877835"
// },{
//     OrderDesc: "Order 1",
//     numberContent: "Tomy Yummy | x 2",
//     describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
//     tableContent: "Table 1",
//     moneyContent: "Frw 5,000",
//     roleContent:"Guest",
//     telContent: "0786877835"
// },
// {
//     OrderDesc: "Order 1",
//     numberContent: "Tomy Yummy | x 2",
//     describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
//     tableContent: "Table 1",
//     moneyContent: "Frw 5,000",
//     roleContent:"Guest",
//     telContent: "0786877835"
// },
// {
//   OrderDesc: "Order 1",
//   numberContent: "Tomy Yummy | x 2",
//   describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
//   tableContent: "Table 1",
//   moneyContent: "Frw 5,000",
//   roleContent:"Guest",
//   telContent: "0786877835"
// },
// {
//   OrderDesc: "Order 1",
//   numberContent: "Tomy Yummy | x 2",
//   describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
//   tableContent: "Table 1",
//   moneyContent: "Frw 5,000",
//   roleContent:"Guest",
//   telContent: "0786877835"
// },
// {
//   OrderDesc: "Order 1",
//   numberContent: "Tomy Yummy | x 2",
//   describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
//   tableContent: "Table 1",
//   moneyContent: "Frw 5,000",
//   roleContent:"Guest",
//   telContent: "0786877835"
// },
// {
//   OrderDesc: "Order 1",
//   numberContent: "Tomy Yummy | x 2",
//   describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
//   tableContent: "Table 1",
//   moneyContent: "Frw 5,000",
//   roleContent:"Guest",
//   telContent: "0786877835"
// },
// {
//   OrderDesc: "Order 1",
//   numberContent: "Tomy Yummy | x 2",
//   describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
//   tableContent: "Table 1",
//   moneyContent: "Frw 5,000",
//   roleContent:"Guest",
//   telContent: "0786877835"
// }

// ]

const services = [
  {
   serviceGiven: "Delivered",
   numberService: "6"
  },
  {
    serviceGiven: "Delivered",
    numberService: "6"
  },
  {
    serviceGiven: "Delivered",
    numberService: "6"
  },
  {
    serviceGiven: "Delivered",
    numberService: "6"
  },
  {
    serviceGiven: "Delivered",
    numberService: "6"
  }
]
  return (
    <div>
        <Order orders={orders} services={services}/>
        {/* <Order services={services} /> */}r
    </div>
  )
}

export default OrderContent;