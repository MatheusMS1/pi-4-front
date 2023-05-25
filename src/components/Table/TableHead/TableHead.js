import React from 'react'
import styles from './TableHead.module.css'

const TableHead = ({children}) => {
  return (
    <div className={styles.tableHead}>{children}</div>
  )
}

export default TableHead
