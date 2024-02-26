import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const[click,setClick]=useState(false);
    const handleClick =()=>setClick(!click);
  return (
    <div className="navbar">
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/broker"}>Broker</Link>
        </li>
        <li>
            <Link to={"/dispatcher"}>Dispatcher</Link>
        </li>
        <li>
            <Link to={"/driver"}>Driver</Link>
        </li>
        <li>
            <Link to={"/login"}>Login</Link>
        </li>
      </ul>
      <div onClick={handleClick}>
      </div>
    </div>
  )
}

export default Navbar;