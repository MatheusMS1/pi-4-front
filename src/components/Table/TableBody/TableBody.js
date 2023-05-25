import React from 'react'
import styles from './TableBody.module.css'

const TableBody = ({children}) => {
  return (
    <tbody className={styles.tableBody}>{children}</tbody>
  )
}

export default TableBody
