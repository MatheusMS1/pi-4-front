import React from 'react'
import styles from './Modal.module.css'
import Title from '../Title/Title'

const Modal = ({children, title, active}) => {

  if (active) return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <Title>{title}</Title>
        {children}
      </div>
    </div>
  )

  else return null
}

export default Modal
