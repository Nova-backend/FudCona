// import React from 'react';
import Form from "./components/Form";
import Welcome from "./components/Welcome"
import Profile from './components/restoProfile';
import Profile2 from './components/restoProfile2';
import SignupPage from './components/signupPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Body from './components/body';
import './App.css';
import Overview from './components/overview';
import OrderContent from './components/orderContent';
import Client from './components/client';
import RestoInfo from './components/RestoInfo'
function App() {
  return (
      <div className='h-screen w-full'>
      <Router>
        <Routes>
          <Route path='/' exact element={<Welcome/>}/>
          <Route path='/signup' exact element={<SignupPage/>}/>
          <Route path='/signin' exact element={<Form/>}/>
          <Route path='/clients' exact element={<Client />}/>
          <Route path='/account' exact element={<Profile />}/>
          <Route path='/profile1' exact element={<Profile2 />}/>
          <Route path='/restoinfo' exact element={<RestoInfo />}/>
          <Route path='/orders' exact element={ <OrderContent />}/>
          <Route path='/menu' exact element={ <Overview/>}/>
          
        </Routes>
      </Router>
      </div>
  );
}

export default App;
