import React from 'react'
import styles from './GlobalInput.module.css'

const Input = ({ name, type, ...props }) => {
  return (
    <div className={styles.container}>
      <input 
        id={name} 
        name={name} 
        className={styles.input} {...props}
        type={type}
        min={type === 'number' ? 0 : null}
      />
      <label htmlFor={name} className={styles.label}>{ name }</label>
    </div>
  )
}

export default Input
