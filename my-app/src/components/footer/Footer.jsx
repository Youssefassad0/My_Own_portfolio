import React from 'react'
import './footer.css'
function Footer() {
  return (
    <footer className='flex' >
      <ul className='flex' >
        <li><a href=""> About </a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Uses</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <p>
&copy; All right reserved
      </p>
    </footer>
  )
}

export default Footer