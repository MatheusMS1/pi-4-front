import React from 'react'
import styles from './TableRow.module.css'

const TableRow = ({ children }) => {
  return (
    <tr className={styles.tableRow}>{ children }</tr>
  )
}

export default TableRow
