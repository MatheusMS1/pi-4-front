import React, { useState } from 'react'
import Title from '../../Title/Title'
import BtnToggle from '../Buttons/BtnToggle'
import styles from './ToggleForm.module.css'

const ToggleForm = ({ children, title, propActive }) => {
  const [ active, setActive ] = useState(propActive)

  return (
    <div className={`${active ? styles.active : ''}`}>
      <header className={styles.header}>
        <Title>{title}</Title>        
        <BtnToggle onClick={() => setActive(!active)} active={active}/>
      </header>

      <div className={`${styles.formBody}`}>
        {children}
      </div>
    </div>
  )
}

export default ToggleForm
