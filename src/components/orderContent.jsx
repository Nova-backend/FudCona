// import React from 'react'
import Order from './order';
import {useState} from 'react'

function OrderContent() {
  const date = moment().format("dddd, MM, YYYY")
  const [loader, setLoader] = useState(true)
  const [orders, setOrders] = useState([{
    orderDesc: "",
    numberContent: "",
    describeContent : "",
    tableContent: "",
    moneyContent: "",
    roleContent : "",
    telContent: ""
  }])

 async function getData(){ 
   const token = localStorage.getItem("token")
   if(!token) return window.location.replace("/login")
   await fetch("url", {
     method:"GET", 
     headers :{
       "Content-Type": "application/json", 
       Authorization : "Bearer" + token
     }
  }).then((response)=>{
return response.json()
  }).then((data)=>{
    console.log(data)
    setOrders({
      orderDesc:  data.orderDesc,
      numberContent: data.numberContent,
      describeContent : data.describeContent,
      tableContent: data.tableContent,
      moneyContent: data.moneyContent,
      roleContent : data.roleContent,
      telContent: data.telContent
    })
  })
}
getData()
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
        {/* <Order services={services} /> */}
    </div>
  )
}

export default OrderContent;