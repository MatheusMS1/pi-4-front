import React, { useEffect, useState } from 'react'
import '../Table.css'
import styles from './ZonaTable.module.css'
import Loading from '../../Helper/Loading'

const ZonaTable = () => {
  const [ zonas, setZonas ] = useState([])
  const [ loading, setLoading ] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch('https://api-pi-2on3.onrender.com/zonas')
    .then(res => res.json())
    .then(json => {setZonas(json); setLoading(false)})
  }, [])

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
        {loading ? (
          <tr>
            <th><Loading/></th>
            <td><Loading/></td>
            <td><Loading/></td>
          </tr>
        ) : zonas.map( zona => (
          <tr key={zona.id_zona}>
            <th>{zona.id_zona}</th>
            <td>{zona.nome}</td>
            <td>{zona.descricao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ZonaTable
