import React from 'react'
import lojo from './logok.jpg'
import PropTypes from 'prop-types'





export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>

      <img src={lojo} className="logo" alt="logo" height="70px" width="70px"></img>


      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="toggler-icon top-bar"></span>
        <span className="toggler-icon middle-bar"></span>
        <span className="toggler-icon bottom-bar"></span>
      </button>


      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">{props.homepage}</a>
          </li>

        </ul>
        

        <div className={`d-flex form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input  " onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label " id="dmode"  htmlFor="flexSwitchCheckDefault">Enabled {props.mode === 'light' ? 'dark' : 'light'} mode</label>
      </div>
      </div>

    </nav>
  )
}
//here we fixed proptype as string
Navbar.propTypes = { homepage: PropTypes.string }

//here we give default prop if we are not given in app.js
Navbar.defaultProps = {
  homepage: 'ro'
}
