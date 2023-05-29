import React from 'react'
import styles from './GlobalInput.module.css'

const Textarea = ({ name, ...props }) => {
  return (
    <div className={styles.container}>
      <textarea id={name} name={name} className={`${styles.input} ${styles.textarea}`} {...props}/>
      <label htmlFor={name} className={styles.label}>{ name }</label>
    </div>
  )
}

export default Textarea
