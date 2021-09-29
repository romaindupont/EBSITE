import React from 'react';
import Logo from '../../assets/img/logo2.png';
import Menu from '../Menu';
import './style.scss';
import Cart from '../../assets/img/cart.svg';
import { Link } from 'react-router-dom';

const Header = ({ open, setOpen, count}) => {
  return (
    <header>
      <img className="accueil-logo" src={Logo} alt=""/>
      <Menu open={open} setOpen={setOpen}/>
      <Link to="/panier"><img className="caddy caddyMenuPc" src={Cart} alt=""/></Link>
      <div className="caddyMenuPc--count">{count}</div>
    </header>
  )
}

export default Header;