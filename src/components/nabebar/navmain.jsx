import React, { useState } from 'react';
import './NavMain.css';
import { FiSearch } from 'react-icons/fi';
import { FaRegUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import { MdOutlineHelpOutline } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NavMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navmain">
      <div className="nav-left">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose size={24} /> : <FaBars size={20} />}
        </div>
        <ul className="nav-links left">
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Socks</a></li>
          <li><a href="#">New Arrivals</a></li>
        </ul>
      </div>

      <div className="nav-logo">
        <Link to="/home">Allbirds</Link>
      </div>

      <div className="nav-right">
        <ul className="nav-links right">
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">ReRun</a></li>
          <li><a href="#">Stores</a></li>
        </ul>
        <div className="nav-icons">
          <FiSearch />
          <FaRegUser />
          <MdOutlineHelpOutline />
          <FaShoppingCart />
        </div>
      </div>

      {/* MOBILE MENU */}
      <ul className={`nav-links mobile ${menuOpen ? 'active' : ''}`}>
        <li>
          <a href="#">Men</a>
          <span className="arrow"><FaChevronRight size={14} /></span>
        </li>
        <li>
          <a href="#">Women</a>
          <span className="arrow"><FaChevronRight size={14} /></span>
        </li>
        <li><a href="#">Socks</a></li>
        <li><a href="#">New Arrivals</a></li>
        <li>
          <a href="#">Sustainability</a>
          <span className="arrow"><FaChevronRight size={14} /></span>
        </li>
        <li><a href="#">ReRun</a></li>
        <li><a href="#">Stores</a></li>
        <li><a href="#">Account</a></li>
        <li><a href="#">Help</a></li>
      </ul>
    </nav>
   
  );
};

export default NavMain;
