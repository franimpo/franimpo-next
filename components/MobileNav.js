import { useState } from 'react'
import Link from './Link'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div id="toggleMenu"  className='navBarHamburger hamburger hamburger--spin'> <span className='hamburger-box'>
    <span className='hamburger-inner'></span> </span>
</div>
  )
}

export default MobileNav
