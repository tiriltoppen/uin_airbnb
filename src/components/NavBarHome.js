import { NavLink } from 'react-router-dom';

const NavbarHome = () => {
  <nav>
    <div className="logo" />
    <div>
      <NavLink to="/" activeClassName="active">
        Steder å bo
      </NavLink>
      <NavLink to="/">Opplevelser</NavLink>
      <NavLink to="/">Opplevelser på nett</NavLink>
      <NavLink to="artikkelside">Artikkelside</NavLink>
    </div>
    <form>
      <label>Steder a bo...</label>
      <input type="text" />
    </form>
    <div>
      <p>Ikoner</p>
      <p>Dropdown</p>
    </div>
  </nav>;
};

export default NavbarHome;