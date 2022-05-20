import React from 'react'
// import Order from './order'
import OrderContent from './orderContent'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Overview from './overview'
import Client from './client'

function CombinationPages() {
  return (
      <div className='flex'>
    {/* <BasicPage /> */}
    {/* <OrderContent /> */}
    <Router>
    <Routes>
      <Route path='/' element={<OrderContent />}></Route>
      <Route path='/overview'  element={<Overview />}></Route>
      <Route path='/Account' element={<Client />}></Route>
    </Routes>
    </Router>
    </div>
  )
}

export default CombinationPages