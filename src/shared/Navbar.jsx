import React, { useState } from "react"
import { Link } from "react-router-dom";

//Logo
import BrandLogo from '../assets/images/The_Scenery_Logo.png'

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
  return (
    <nav className="navbar navbar-expand-lg sticky-top nav-justified nav-tabs m-0" style={{backgroundColor: 'rgba(122,206,227,255)'}}>
      <div className="container">
        <Link className="navbar-brand" to="/"><img src={BrandLogo} alt="Logo" width="150px" height="150px" /> <span className="d-inline-block align-text-top">The Scenery</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarNav">
          <ul className="navbar-nav me-auto nav-underline">
            <li className="nav-item">
              <Link className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabClick('home')} to="#">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeTab === 'destination' ? 'active' : ''}`} onClick={() => handleTabClick('destination')} to="#">DESTINATIONS</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeTab === 'service' ? 'active' : ''}`} onClick={() => handleTabClick('service')} to="#">SERVICES</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeTab === 'brand' ? 'active' : ''}`} onClick={() => handleTabClick('brand')} to="#">BRANDS</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} onClick={() => handleTabClick('about')} to="#">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => handleTabClick('contact')} to="#">CONTACT</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar