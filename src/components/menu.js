import React from 'react'
import Link from 'gatsby-link'


const Menu = () => (
  <div
    class="menu"
    style={{
      background: '#f4f4f4',
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
        <Link to="/">About Me</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/profiles">Profiles</Link>
      </li>
    </ul>
  </div>
)

export default Menu