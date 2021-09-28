import React from 'react';
import './style.scss';
import Cart from '../../assets/img/cart.svg';
import Home from '../../assets/img/home.svg';
import Account from '../../assets/img/account.svg';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Footer = ({count, isConnected, open}) => {
  return (
    <div className={classNames("footer", {"footer--openMenu":open})}>
      <Link to="/"><img className="home" src={Home} alt=""/></Link>
      <Link to="/panier"><img className="caddy" src={Cart} alt=""/></Link>
      <div className="counter--count">{count}</div>
      {isConnected && (<Link to="/moncompte"><img className="account" src={Account} alt=""/></Link>)}
      {!isConnected && (<Link to="/connexion"><img className="account" src={Account} alt=""/></Link>)}
    </div>
      
  )
}

export default Footer;