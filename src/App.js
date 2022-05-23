// import React from 'react';
import Form from "./components/Form";
import Welcome from "./components/Welcome"
import Profile from './components/restoProfile';
import Profile2 from './components/restoProfile2';
import SignupPage from './components/signupPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import OrderContent from './components/orderContent';
import Client from './components/client';
import RestoInfo from './components/RestoInfo';
import Clients from './components/clients';
import Overview from './components/menu';
import Body from './components/body';
import Menu from "./components/menu";
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
          <Route path='/clients' exact element={<Client/>}/>
          <Route path='/feed' exact element={< Clients/>}/>
          <Route path='/overview' exact element={<Overview/>}/>
          <Route path='/body' exact element  = {<Body/>}/>
          <Route path='/menu' exact element={<Menu/>}/>

        </Routes>
      </Router>
      </div>
  );
}

export default App;
