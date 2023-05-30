import React, { useEffect, useState } from 'react'
import '../Table.css'
import styles from './TipoTable.module.css'
import Loading from '../../Helper/Loading'
import ActionContainer from '../ActionContainer'

const TipoTable = ({tipos, loading, fetchTipos}) => {

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        { tipos.map( tipo => (
          <tr key={tipo.id_tipo}>
            <th>{tipo.id_tipo}</th>
            <td>{tipo.nome}</td>
            <ActionContainer 
              targetTable={'tipos'} 
              target_id={tipo?.id_tipo}
              fetchFunction={fetchTipos}
            />
          </tr>
        ))}

        { loading ? (
          <tr>
            <th><Loading/></th>
            <td><Loading/></td>
            <td><Loading/></td>
          </tr>
        ) : null}
      </tbody>
    </table>
  )
}

export default TipoTable
