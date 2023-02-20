import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <nav>
      <NavLink
        to='/' className={styles.home}
      >
        Emmanuel Maldonado
      </NavLink>

      <ul>
        <li>
          <NavLink
            to='/about'
          > 
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            >Contact
            </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar