import React from 'react'
import styles from './Button.module.css'

const BtnToggle = ({ active }) => {

  return (
    <button className={`${active ? styles.active : ''}`}>+</button>
  )
}

export default BtnToggle
