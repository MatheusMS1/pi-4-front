import React, { useEffect, useState } from 'react'
import '../Table.css'
import styles from './ZonaTable.module.css'
import Loading from '../../Helper/Loading'
import ActionContainer from '../ActionContainer'

const ZonaTable = ({ zonas, loading, fetchZonas }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {zonas.map( zona => (
          <tr key={zona.id_zona}>
            <th>{zona.id_zona}</th>
            <td>{zona.nome}</td>
            <td>{zona.descricao}</td>
            <ActionContainer
              targetTable={'zonas'} 
              target_id={zona?.id_zona}
              fetchFunction={fetchZonas}
            />
          </tr>
        ))}

        {loading ? (
          <tr>
            <th><Loading/></th>
            <td><Loading/></td>
            <td><Loading/></td>
            <td><Loading/></td>
          </tr>
        ) : null }
      </tbody>
    </table>
  )
}

export default ZonaTable
