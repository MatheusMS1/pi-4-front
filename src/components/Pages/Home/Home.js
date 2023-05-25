import styles from './Home.module.css'
import Title from '../../Title/Title'
import { NavLink } from 'react-router-dom'
import TableHead from '../../Table/TableHead/TableHead'

const Home = () => {
  return (
    <section className={styles.home}>
      <header className={styles.header}>
        <Title>Equipamentos</Title>
        <NavLink to={'/equipamentos/new'} className={`button-default`}><i className='pi pi-plus'></i></NavLink>
      </header>
      <table className={styles.equipTable}>
        <TableHead>
          <th>ID</th>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Descrição</th>
          <th>Status</th>
        </TableHead>
      </table>
    </section>
  )
}

export default Home
