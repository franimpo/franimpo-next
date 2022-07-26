
import Link from 'next/link'
import Logo from './Logo'
import React, { useState } from 'react'
import MobileNav from './MobileNav'
// import ThemeSwitch from './ThemeSwitch'

export default function Header() {
  const [isActive, setActive] = useState('false')
  const handleToggle = () => {
    setActive(!isActive)
    document.body.classList.toggle('nav-open')
  }

  return (
    <header className="flex items-center justify-between py-4" id="header-main">
      <div className="contenedor">
        <Link href="/" aria-label="" className="logo">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
          </div>
        </Link>

        <div id="main-menu">
          <ul className="navbar-nav">
            
          </ul>
        </div>
        
        <MobileNav />
      </div>
    </header>
  )
}
