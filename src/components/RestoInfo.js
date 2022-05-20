import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './RestoInfo.css';
import search from './search.png';
import bell from './bell.png';
import person from './person.png';

function RestoInfo() {
  return (
    <>
      <div className="RestoInfo">
        <div className="RestoInfoContainer">
          <nav className="Navbar">
            <Link to="/" className="RestoInfo-logo">
                Fud<span>Cona</span>
            </Link>
              <div className='search'>
                <img src={search} alt='search icon'/>
              </div>
              <div className='bell'>
                <img src={bell} alt='notifications icon'/>
              </div>
            <div className='line'></div>
            <div className='userName'>
              <h1>Alicia Keys</h1>
            </div>
            <div className='person'>
              <img src={person} alt='user profile'/>
            </div>
          </nav>
          <div className="left-black"></div>
          <div className="createProfile">
            <h1>Create your restaurant profile</h1>
            <div className='content'>
              <div className='one' id="oneDiv">
                <p>1</p>
                <div className='right'>
                  <h2 className='title1'>Restaurant information</h2>
                  <h2 className='details1' id="details">Restaurant name, address, details, owner details.</h2>
                </div>
              </div>
              <div className='two' id="oneDiv">
                <p>2</p>
                <div className='right'>
                  <h2 className='title2'>Restaurant type & Timings</h2>
                  <h2 className='details2' id="details">Establishment & cusire type opening hours</h2>
                </div>
              </div>
              <div className='three' id="oneDiv">
                <p>3</p>
                <div className='right'>
                  <h2 className='title3'>Create your menu</h2>
                  <h2 className='details3' id="details">Menu, restaurant, food images</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="restoInformation">
            <h1>Restaurant Information</h1>
            <form className='form'>
                <div><input type="text" placeholder="Restaurant Name" id="first"></input></div>
                <div><input type="text" placeholder='Restaurant Complete Name' id="second"></input></div>
                <div className='text'><label>Contacts</label></div>
                <div>
                  <div className="tsikeni">
                    <p>+250</p>
                    <span className='line2  w '></span>
                    <div className="yvette">
                        <input type="tel" placeholder='Mobile Number'></input>
                    </div>
                  </div>
                </div>
                <div className='text'><label>Restaurant owner details</label></div>
                <div>
                <div className="tsikeni">
                    <p>+250</p>
                    <span className='line2'></span>
                    <div className="yvette">
                        <input type="tel" placeholder='Mobile Number'></input>
                    </div>
                  </div>
                </div>


                <div><input type="text" placeholder="Restaurant Name" id="fifth"></input></div>
            </form> 
          </div>
        </div>


        
      </div>
    </>
  )
}

export default RestoInfo