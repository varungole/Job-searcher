import React from 'react'
import Logo from '../icons/random-logo.png'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo-searchbar'>
            <img src={Logo} alt='random-logo'></img>
            <input type='search' placeholder='Search'></input>
        </div>
        <div className='icons'>
            <label>Home</label>
            <label>My Network</label>
            <label>Jobs</label>
            <label>Messaging</label>
            <label>Notifications</label>
            <label>Me</label>

        </div>
        <div className='business-learning'></div>
    </div>
  )
}

export default Navbar