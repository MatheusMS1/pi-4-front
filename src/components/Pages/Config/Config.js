import TiposForm from "./Tipo/TiposForm"
import ZonaForm from "./Zona/ZonaForm"
import styles from './Config.module.css'
import TipoTable from "./Tipo/TipoTable"
import ZonaTable from "./Zona/ZonaTable"
import { useEffect, useState } from "react"

const Config = () => {
  const [ zonas, setZonas ] = useState([])
  const [ tipos, setTipos ] = useState([])
  const [ loadingZonas, setLoadingZonas ] = useState(false)
  const [ loadingTipos, setLoadingTipos ] = useState(false)

  const fetchZonas = () => {
    setLoadingZonas(true)
    fetch('https://api-pi-2on3.onrender.com/zonas')
    .then(res => res.json())
    .then(json => {setZonas(json); setLoadingZonas(false)})
  }

  const fetchTipos = () => {
    setLoadingTipos(true)
    fetch('https://api-pi-2on3.onrender.com/tipos')
   .then(res => res.json())
   .then(json => {setTipos(json); setLoadingTipos(false)})
  }

  useEffect(() => {
    fetchZonas()
    fetchTipos()
  }, [])

  return (
    <>
      <div className={styles.leftContainer}>
        <TiposForm fetchTipos={fetchTipos}/>
        <TipoTable 
          tipos={tipos} 
          loading={loadingTipos}
          fetchTipos={fetchTipos}
        />
      </div>
      <div className={styles.rightContainer}>
        <ZonaForm fetchZonas={fetchZonas}/>
        <ZonaTable 
          zonas={zonas} 
          loading={loadingZonas}
          fetchZonas={fetchZonas}
        />
      </div>
    </>
  )
}

export default Config
