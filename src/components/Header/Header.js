import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/img/logo.png'
import Nav from './Nav/Nav'

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <img src={logo} alt='logo'/>
      <Nav/>
    </header>
  )
}

export default Header
