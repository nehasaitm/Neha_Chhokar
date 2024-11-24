import React from 'react'

export default function Navbar(props) {
  return (
    <>
    <nav class="navbar">
        <div class="navbar-brand">Pro Text Editor <span style={{fontSize:12}}>By Neha</span></div>
        <ul class="navbar-nav">
            <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">About</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
        </ul>
    </nav>
    </>
  )

}

