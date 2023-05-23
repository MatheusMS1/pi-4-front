import React from 'react'
import styles from './GlobalInput.module.css'

const Input = ({ name, ...props }) => {
  return (
    <div className={styles.container}>
      <input id={name} name={name} className={styles.input} {...props}/>
      <label for={name} className={styles.label}>{ name }</label>
    </div>
  )
}

export default Input
