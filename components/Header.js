
import Link from 'next/link'
import Logo from './Logo'
import IconDownload from './IconDownload'
import React, { useState } from 'react'
import MobileNav from './MobileNav'
 import ThemeSwitch from './ThemeSwitch'

export default function Header() {
  const [isActive, setActive] = useState('false')
  const handleToggle = () => {
    setActive(!isActive)
    document.body.classList.toggle('nav-open')
  }

  const [headerClassName, setHeaderClassName] = useState('');

  const handleScroll = (headerClassName) => {
      if (headerClassName !== 'scroll-down' && window.pageYOffset >= 100) {
          setHeaderClassName('scroll-down');
      } else if (headerClassName === 'scroll-down' && window.pageYOffset < 100) {
          setHeaderClassName('');
      }
  }

  React.useEffect(() => {
      window.onscroll = () => handleScroll(headerClassName);
  }, [headerClassName]); // IMPORTANT, This will cause react to update depending on change of this value


  return (
    <header className={headerClassName} id="header-main">
      <div className="contenedor">
        <Link href="/" aria-label="" className="logo">
          <a>  <Logo />
          </a>
            
        </Link>

        <div id="main-menu">
          <ul className="navbar-nav">
            <li className='nav-item'>
              <a href="" className='nav-link'>Proyectos</a>
            </li>
            <li className='nav-item'>
              <a href="contacto" className='nav-link'>Acerca/Contacto</a>
            </li>
            <li className='nav-item'>
              <a href="http://www.franimpo.com/cv_impollino_francisco_web.pdf" download target="_blank" className='nav-link' rel="noreferrer">CV    <IconDownload /></a>
            </li>
            <ThemeSwitch></ThemeSwitch>
          </ul>
        </div>
        
        <MobileNav />
      </div>
    </header>
  )
}
