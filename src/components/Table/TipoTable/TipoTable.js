import React, { useEffect, useState } from 'react'
import '../Table.css'
import styles from './TipoTable.module.css'
import Loading from '../../Helper/Loading'

const TipoTable = () => {
  const [ tipos, setTipos ] = useState([])
  const [ loading, setLoading ] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch('https://api-pi-2on3.onrender.com/tipos')
    .then(res => res.json())
    .then(json => {setTipos(json); setLoading(false)})
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
        { loading ? (
          <tr>
            <th><Loading/></th>
            <td><Loading/></td>
          </tr>
        ) : tipos.map( tipo => (
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
