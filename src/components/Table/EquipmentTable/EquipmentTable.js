import React from 'react'
import styles from './EquipmentTable.module.css'

const EquipmentTable = () => {
  return (
      <table className={`${styles.equipTable}`}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Descrição</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>123</th>
            <td>Tecrado</td>
            <td>ala</td>
            <td>ala</td>
            <td>ala</td>
          </tr>
          <tr>
            <th>123</th>
            <td>Tecrado</td>
            <td>ala</td>
            <td>ala</td>
            <td>ala</td>
          </tr>
        </tbody>
      </table>
  )
}

export default EquipmentTable
