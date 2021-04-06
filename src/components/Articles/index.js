import React from 'react';
import SearchBar from '../SearchBar';
import classNames from 'classnames';
import Jouet from '../../assets/img/jouet.png';
import Cart from '../../assets/img/cart.svg';

import './style.scss';

const Articles = () => {

  return (
    <div className={classNames("articles", {"articles--open":false})}>
      <SearchBar />
      <div className="articles-section">
        <div className="articles-section-all">
          <div className="articles-section-image">
            <img className="articles-section-image--img" src={Jouet} alt=""/>
          </div>
          <div className="articles-section-infos">
            <h2 className="articles-section-infos-title">titre 1</h2>
            <p className="articles-section-infos-small">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad cum fuga recusandae.</p>
            <p className="articles-section-infos-price">30.90€</p>
            <img className="articles-section-infos-addCart" src={Cart} alt=""/>
          </div>
        </div>
      </div>
      


    </div>
  )
}

export default Articles;