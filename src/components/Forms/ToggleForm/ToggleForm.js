import React, { useState } from 'react'
import FormTitle from '../Titles/FormTitle'
import BtnToggle from '../Buttons/BtnToggle'
import styles from './ToggleForm.module.css'

const ToggleForm = ({ children, title }) => {
  const [ active, setActive ] = useState()

  return (
    <div className={`${active ? styles.active : ''}`}>
      <header className={styles.header}>
        <FormTitle>{title}</FormTitle>        
        <BtnToggle onClick={() => setActive(!active)} active={active}/>
      </header>

      <div className={`${styles.formBody}`}>
        {children}
      </div>
    </div>
  )
}

export default ToggleForm
