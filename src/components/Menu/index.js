import React from 'react';
import Navbar from '../../containers/Menu/Navbar';
import './style.scss';
import classNames from 'classnames';

const Menu = ({open, setOpen}) => {

  const openMenu = () => {
    setOpen(!open)
  }
  return (
    <>
      <div className="menu" onClick={openMenu}>
        <div className={classNames('menu-point-1', { 'menu-point-1--open': open })}></div>
        <div className={classNames('menu-point-2', { 'menu-point-2--open': open })}></div>
        <div className={classNames('menu-point-3', { 'menu-point-3--open': open })}></div>
        <div className={classNames('menu-point-4', { 'menu-point-4--open': open })}></div>
      </div>
      <Navbar open={open} setOpen={setOpen} />
    </>
  )
}

export default Menu;