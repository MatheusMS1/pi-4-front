import React, { Children, useState } from 'react'
import styles from './GlobalInput.module.css'

const Select = ({ name, children, ...props }) => {
  const [ valid, setValid ] = useState(false)

  return (
    <div className={styles.container}>
      <select 
        id={name} 
        name={name} 
        onChange={() => setValid(true)}
        className={`${styles.input} ${styles.select} ${!valid ? styles.invalid : ''}`} 
      >
        <option disabled selected>Selecione</option>
        {children}
      </select>
      <label for={name} className={styles.label}>{ name }</label>
    </div>
  )
}

export default Select
