import TiposForm from "./TiposForm"
import ZonaForm from "./ZonaForm"
import styles from './Config.module.css'
import TipoTable from "../../Table/TipoTable/TipoTable"
import ZonaTable from "../../Table/ZonaTable/ZonaTable"

const Config = () => {
  return (
    <>
      <div className={styles.leftContainer}>
        <TiposForm/>
        <TipoTable/>
      </div>
      <div className={styles.rightContainer}>
        <ZonaForm/>
        <ZonaTable/>
      </div>
    </>
  )
}

export default Config
