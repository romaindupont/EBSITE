import React from 'react';
import Cart from '../../assets/img/cart.svg';
import Jouet from '../../assets/img/jouet.png';
import './style.scss';

const Card = () => {

  return (
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
      
  )
}

export default Card;