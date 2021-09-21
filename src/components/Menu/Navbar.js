import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Navbar = ({open, setOpen}) => {
  const closeMenu = () => {
    setOpen(false);
  }
  return (
    <>
      <div className={classNames("menu-modal", {'menu-modal--open':open})}></div>
        <nav className={classNames("menu-nav", {'menu-nav--open':open})}>
          <Link className="menu-nav--link" to="/" onClick={closeMenu}>Accueil</Link>
          <Link className="menu-nav--link" to="/a_propos" onClick={closeMenu}>A propos</Link>
          <Link className="menu-nav--link" to="/categories/all" onClick={closeMenu}>e-shop</Link>
          <Link className="menu-nav--link" to="/moncompte" onClick={closeMenu}>Mon compte</Link>
          <Link className="menu-nav--link" to="/categories" onClick={closeMenu}>Catégories</Link>
          <Link className="menu-nav--link" to="/contact" onClick={closeMenu}>Contact</Link>
          
        </nav>
    </>
  )
}

export default Navbar;