import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Navbar = ({open}) => {

  return (
    <>
      <div className={classNames("menu-modal", {'menu-modal--open':open})}></div>
        <nav className={classNames("menu-nav", {'menu-nav--open':open})}>
          <Link className="menu-nav--link" to="/">Accueil</Link>
          <Link className="menu-nav--link" to="/a_propos">A propos</Link>
          <Link className="menu-nav--link" to="/eshop">e-shop</Link>
          <Link className="menu-nav--link" to="/moncompte">Mon compte</Link>
          <Link className="menu-nav--link" to="/categories">Catégories</Link>
          <Link className="menu-nav--link" to="/contact">Contact</Link>
          
        </nav>
    </>
  )
}

export default Navbar;