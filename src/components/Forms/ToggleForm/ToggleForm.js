import React, { useState } from 'react'
import Title from '../../Title/Title'
import BtnToggle from '../Buttons/BtnToggle'
import styles from './ToggleForm.module.css'

const ToggleForm = ({ children, title, propActive, handleSubmit }) => {
  const [ active, setActive ] = useState(propActive)

  const handleSubmitForm = event => {
    event.preventDefault()
    handleSubmit()
    setActive(false)
  }

  return (
    <div className={`${active ? styles.active : ''}`}>
      <header className={styles.header}>
        <Title>{title}</Title>        
        <BtnToggle onClick={() => setActive(!active)} active={active}/>
      </header>

      <div className={`${styles.formBody}`}>
        <form onSubmit={handleSubmitForm}>
          {children}
        </form>
      </div>
    </div>
  )
}

export default ToggleForm
