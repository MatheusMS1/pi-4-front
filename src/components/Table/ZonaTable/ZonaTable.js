import React, { useEffect, useState } from 'react'
import '../Table.css'
import styles from './ZonaTable.module.css'
import Loading from '../../Helper/Loading'

const ZonaTable = ({ zonas, loading }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        {zonas.map( zona => (
          <tr key={zona.id_zona}>
            <th>{zona.id_zona}</th>
            <td>{zona.nome}</td>
            <td>{zona.descricao}</td>
          </tr>
        ))}

        {loading ? (
          <tr>
            <th><Loading/></th>
            <td><Loading/></td>
            <td><Loading/></td>
          </tr>
        ) : null }
      </tbody>
    </table>
  )
}

export default ZonaTable
