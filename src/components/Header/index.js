import React from 'react';
import Logo from '../../assets/img/logo2.png';
import Menu from '../Menu';
import './style.scss';

const Header = ({ open, setOpen}) => {
  return (
    <header>
      <img className="accueil-logo" src={Logo} alt=""/>
      <Menu open={open} setOpen={setOpen}/>
    </header>
  )
}

export default Header;