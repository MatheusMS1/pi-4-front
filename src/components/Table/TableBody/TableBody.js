import React from 'react'
import styles from './TableBody.module.css'

const TableBody = ({children}) => {
  return (
    <div className={styles.tableBody}>{children}</div>
  )
}

export default TableBody
