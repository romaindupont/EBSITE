import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Navbar = ({open, setOpen, isConnected}) => {
  const closeMenu = () => {
    setOpen(false);
  }
  return (
    <>
      <div className={classNames("menu-modal", {'menu-modal--open':open})}></div>
        <nav className={classNames("menu-nav", {'menu-nav--open':open})}>
          <Link className="menu-nav--link" to="/" onClick={closeMenu}>Accueil</Link>
          <Link className="menu-nav--link" to="/a_propos" onClick={closeMenu}>A propos</Link>
          <Link className="menu-nav--link" to="/panier" onClick={closeMenu}>Mon Panier</Link>
          {isConnected && (<Link className="menu-nav--link" to="/moncompte" onClick={closeMenu}>Mon compte</Link>)}
          {!isConnected && (<Link className="menu-nav--link" to="/register" onClick={closeMenu}>Inscription</Link>)}
          <Link className="menu-nav--link" to="/categories" onClick={closeMenu}>e-shop</Link>
          <Link className="menu-nav--link" to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
    </>
  )
}

export default Navbar;