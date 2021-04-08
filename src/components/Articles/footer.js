import React from 'react';
import classNames from 'classnames';
import './style.scss';
import Cart from '../../assets/img/cart.svg';
import Home from '../../assets/img/home.svg';
import Account from '../../assets/img/account.svg';

const Footer = ({count}) => {
  return (
    <div className="footer">
      <img className="home" src={Home} alt=""/>
      <img className="caddy" src={Cart} alt=""/>
      <div className="counter--count">{count}</div>
      <img className="account" src={Account} alt=""/>
    </div>
      
  )
}

export default Footer;