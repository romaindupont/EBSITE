import React from 'react';
import SearchBar from '../SearchBar';
import Card from './Card';
import Cart from '../../assets/img/cart.svg';
import classNames from 'classnames';


import './style.scss';

const Articles = () => {

  return (
    <div className={classNames("articles", {"articles--open":false})}>
    <img className="caddy" src={Cart} alt=""/>
      <SearchBar />
      <Card />
    </div>
  )
}

export default Articles;