import React, { useEffect, useState } from 'react'
import '../Table.css'
import styles from './TipoTable.module.css'
import Loading from '../../Helper/Loading'

const TipoTable = ({tipos, loading}) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        { tipos.map( tipo => (
          <tr key={tipo.id_tipo}>
            <th>{tipo.id_tipo}</th>
            <td>{tipo.nome}</td>
          </tr>
        ))}

        { loading ? (
          <tr>
            <th><Loading/></th>
            <td><Loading/></td>
          </tr>
        ) : null}
      </tbody>
    </table>
  )
}

export default TipoTable
