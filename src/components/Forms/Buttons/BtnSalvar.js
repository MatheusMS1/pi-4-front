import React from 'react'
import styles from './Button.module.css'

const BtnSalvar = ({...props}) => {
  return (
    <button className={styles.button} type='submit'>
      <span>Salvar</span>
      <i className='pi pi-save'></i>
    </button>
  )
}

export default BtnSalvar
