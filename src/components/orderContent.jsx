// import React from 'react'
import Order from './order'

function OrderContent() {
  const orders = [{
    OrderDesc: "Order 1",
    numberContent: "Tomy Yummy | x 2",
    describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
    tableContent: "Table 1",
    moneyContent: "Frw 5,000",
    roleContent:"Guest",
    telContent: "0786877835"
},{
    OrderDesc: "order2",
    describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
    numberContent: "Tomy Yummy | x 2",
    tableContent: "Table 1",
    moneyContent: "Frw 5,000",
    roleContent:"Guest",
    telContent: "0786877835"
},{
    OrderDesc: "Order 1",
    numberContent: "Tomy Yummy | x 2",
    describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
    tableContent: "Table 1",
    moneyContent: "Frw 5,000",
    roleContent:"Guest",
    telContent: "0786877835"
},
{
    OrderDesc: "Order 1",
    numberContent: "Tomy Yummy | x 2",
    describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
    tableContent: "Table 1",
    moneyContent: "Frw 5,000",
    roleContent:"Guest",
    telContent: "0786877835"
},
{
  OrderDesc: "Order 1",
  numberContent: "Tomy Yummy | x 2",
  describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
  tableContent: "Table 1",
  moneyContent: "Frw 5,000",
  roleContent:"Guest",
  telContent: "0786877835"
},
{
  OrderDesc: "Order 1",
  numberContent: "Tomy Yummy | x 2",
  describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
  tableContent: "Table 1",
  moneyContent: "Frw 5,000",
  roleContent:"Guest",
  telContent: "0786877835"
},
{
  OrderDesc: "Order 1",
  numberContent: "Tomy Yummy | x 2",
  describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
  tableContent: "Table 1",
  moneyContent: "Frw 5,000",
  roleContent:"Guest",
  telContent: "0786877835"
},
{
  OrderDesc: "Order 1",
  numberContent: "Tomy Yummy | x 2",
  describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
  tableContent: "Table 1",
  moneyContent: "Frw 5,000",
  roleContent:"Guest",
  telContent: "0786877835"
},
{
  OrderDesc: "Order 1",
  numberContent: "Tomy Yummy | x 2",
  describeContent:"Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
  tableContent: "Table 1",
  moneyContent: "Frw 5,000",
  roleContent:"Guest",
  telContent: "0786877835"
}

]

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