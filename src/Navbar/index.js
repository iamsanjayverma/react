import React from 'react'
import { Link } from "react-router-dom";


function index() {
  return (
    <>
<div style={{backgroundColor : "#000", color: "#fff"}}>
<div className='container'>
        <div className='row'>
            <div className='col-md-6'>
            <div>
                <img className='logo' src='/img/sv_logo.webp' title='Logo'/>
            </div>
            </div>
            <div className='col-md-6'>
            <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
            </div>
        </div>
        

    </div>
</div>

    </>
  )
}

export default index