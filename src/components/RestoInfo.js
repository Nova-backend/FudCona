import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './RestoInfo.css';

function RestoInfo() {
  return (
    <>
      <div className="RestoInfo">
        <div className="RestoInfoContainer">
          <nav className="Navbar">
            <Link to="/" className="RestoInfo-logo">
              FudCona
            </Link>
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
            
          </div>
        </div>
      </div>
    </>
  )
}

export default RestoInfo