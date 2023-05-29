import TiposForm from "./TiposForm"
import ZonaForm from "./ZonaForm"
import styles from './Config.module.css'

const Config = () => {
  return (
    <>
      <div className={styles.leftContainer}>
        <TiposForm/>
      </div>
      <div className={styles.rightContainer}>
        <ZonaForm/>
      </div>
    </>
  )
}

export default Config
