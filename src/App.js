import React from 'react';
import Form from "./components/Form";
import Welcome from "./components/Welcome"
import Profile from './components/restoProfile';
import Profile2 from './components/restoProfile2';
import SignupPage from './components/signupPage';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Body from './components/body';
import Sidebar from './components/sidebar';
import './App.css';
import Overview from './components/overview';
import Feed from './components/feed';

function App() {
  return (

      <div className='h-screen w-full'>
        <Feed/>
      {/* <Router>
        <Routes>
          <Route path='/' exact element={<Welcome/>}/>
          <Route path='/signup' exact element={<SignupPage/>}/>
          <Route path='/signin' exact element={<Form/>}/>
          <Route path='/overview' exact element={ <Overview/>}/>
          <Route path='/body' exact element={ <Body/>}/>
          
        </Routes> */}
      {/* </Router> */}
      </div>
  );
}

export default App;
