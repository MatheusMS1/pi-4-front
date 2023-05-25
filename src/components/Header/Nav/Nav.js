import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/config'}>Configurações</NavLink>
      <NavLink to={'/teste'}>Teste</NavLink>
    </nav>
  )
}

export default Nav
