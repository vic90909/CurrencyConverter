import React, { Component } from 'react'
import './App.css'
import {Link} from 'react-router-dom'

function Menu(){
    return (
        <nav>
            <ul className="nav-links">
                <Link to='/'>
                    <li>Currency</li>
                </Link>
                <Link to='/length'>
                    <li>Length</li>
                </Link>
                <Link to='/weight'>
                    <li>Weight</li>
                </Link>
                <Link to='/temperature'>
                    <li>Temperature</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Menu