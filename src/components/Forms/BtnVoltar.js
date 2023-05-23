import React from 'react'
import styles from './Button.module.css'
import 'primeicons/primeicons.css'

const BtnVoltar = ({ ...props }) => {
  return (
    <button className={`${styles.button}`} {...props}><i className='pi pi-arrow-left'></i><span>Voltar</span></button>
  )
}

export default BtnVoltar
