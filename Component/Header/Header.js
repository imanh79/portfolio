import Link from "next/link";
import React from "react";

const Header = () => {
  const themehandler = () => {
    document.documentElement.classList.toggle("dark-theme");
    document.querySelector(".ri-moon-line").classList.toggle("ri-sun-line");
  };
  const menuhandler = () => {
    document.querySelector(".nav__menu").classList.toggle("nav__menu--open");
    console.log(document.querySelector(".ri-menu-4-line"));

    // document.querySelector("#nav-toggle").classList.add("ri-menu-4-line");
    // document.querySelector(".ri-menu-4-line").classList.toggle("ri-close-line");
    document.querySelector("#nav-toggle").classList.toggle("ri-menu-4-line");
    document.querySelector("#nav-toggle").classList.toggle("ri-close-line");
  };
  return (
    <header id='header' className='header'>
      <nav className='nav container'>
        <Link href='/Home' className='nav__brand'>
          Natasha.
        </Link>
        <div className='nav__menu' id='nav-menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link href='/Home' className='nav__link'>
                <i className='ri-home-line nav__icon'></i>
                Home
              </Link>
            </li>
            <li className='nav__item'>
              <Link href='/About' className='nav__link'>
                <i className='ri-user-line nav__icon'></i>
                About
              </Link>
            </li>
            <li className='nav__item'>
              <Link href='/Skills' className='nav__link'>
                <i className='ri-medal-line nav__icon'></i>
                Skills
              </Link>
            </li>
            <li className='nav__item'>
              <Link href='/Services' className='nav__link'>
                <i className='ri-briefcase-line nav__icon'></i>
                Services
              </Link>
            </li>
            <li className='nav__item'>
              <Link href='/Portfolio' className='nav__link'>
                <i className='ri-folders-line nav__icon'></i>
                Portfolio
              </Link>
            </li>
            <li className='nav__item'>
              <Link href='/Blog' className='nav__link'>
                <i className='ri-message-line nav__icon'></i>
                Blog
              </Link>
            </li>
            <li className='nav__item'>
              <Link href='/Contact' className='nav__link'>
                <i className='ri-phone-line nav__icon'></i>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='nav__buttons'>
          <span className='theme__toggle'>
            <i id='theme-toggle' className='ri-moon-line' onClick={themehandler}></i>
          </span>
          <span className='nav__toggle'>
            <i id='nav-toggle' className='ri-menu-4-line' onClick={menuhandler}></i>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
