import React from 'react'
import './Header.css'
/* import 'bootstrap/dist/css/bootstrap.min.css' */

const Header = () => {
  return (
    <header>
    <nav className='navbar fixed-top navbar-dark bg-dark' style={{marginBottom: '10px',color: "white" }}> 
    <div id = "header">
      <div className="container-fluid">
       
     <a class ="navbar-brand">MADARAKA EXPRESS </a>
     <a style={{marginLeft: "300px"}}>CHOOSE A DESTINATION</a> 
       </div>
       </div>
       </nav>
       </header>
  )
}

export default Header