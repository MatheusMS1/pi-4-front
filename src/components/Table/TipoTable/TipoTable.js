import React, { useEffect, useState } from 'react'
import '../Table.css'
import styles from './TipoTable.module.css'

const TipoTable = () => {
  const [ tipos, setTipos ] = useState([])

  useEffect(() => {
    fetch('https://api-pi-2on3.onrender.com/tipos')
    .then(res => res.json())
    .then(json => setTipos(json))
  }, [])

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        {tipos.map( tipo => (
          <tr key={tipo.id_tipo}>
            <th>{tipo.id_tipo}</th>
            <td>{tipo.nome}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TipoTable
