import TiposForm from "./Tipo/TiposForm"
import ZonaForm from "./Zona/ZonaForm"
import styles from './Config.module.css'
import TipoTable from "./Tipo/TipoTable"
import ZonaTable from "./Zona/ZonaTable"
import { TipoStorage } from "./Tipo/TipoContext"
import { ZonaStorage } from "./Zona/ZonaContext"
import TipoModal from "./Tipo/TipoModal"
import ZonaModal from "./Zona/ZonaModal"

const Config = () => {
  return (
    <>
      <div className={styles.leftContainer}>
        <TipoStorage>
          <TiposForm/>
          <TipoTable/>
          <TipoModal/>
        </TipoStorage>
      </div>
      <div className={styles.rightContainer}>
        <ZonaStorage>
          <ZonaForm/>
          <ZonaTable/>
          <ZonaModal/>
        </ZonaStorage>
      </div>
    </>
  )
}

export default Config
