import React from "react"
import "../Styles/styles.js"
import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom"
import Logo from "./Logo.js"

function NavBar() {
  return (
    <div className="navBar">

    <Link to = "/" style ={{textDecoration:"none"}}><Logo></Logo></Link>
        
      <ul className ="nav-links">
        <li><NavLink to = "/" className ="nav-item" activeClassName = "active" exact>Головна</NavLink></li>
        <li><NavLink to = "/About" className ="nav-item" activeClassName = "active" exact>Про нас</NavLink></li>
        <li><NavLink to = "/Menu" className ="nav-item" activeClassName = "active" exact >Меню</NavLink></li>
        <li><NavLink to = "/Contact" className ="nav-item" activeClassName = "active" exact>Контакти</NavLink></li>
        <li>
          <div className = "nav-options">
          <Link to = "/Menu"><button className = "nav-button">Замовити</button></Link>
          <Link to = "/Menu"><button className = "nav-cart"></button></Link>
          </div>
        </li>
      </ul>

    </div>
  );
}

export default NavBar;