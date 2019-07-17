import React from 'react'
import Link from 'gatsby-link'


const Menu = () => (
  <div
    class="menu"
    style={{
      background: '#ebf1fa',
      paddingTop: '10px',
    }}
  >
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
        
        
      }}
    >
      <li>
        <Link to="/">About Us</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/profiles">Contact</Link>
      </li>
    </ul>
  </div>
    
)

export default Menu