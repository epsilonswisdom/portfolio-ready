import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink
        to='/'
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