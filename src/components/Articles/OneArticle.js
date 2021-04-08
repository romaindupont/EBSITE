import React from 'react';
import Cart from '../../assets/img/cart.svg';
import Jouet from '../../assets/img/jouet.png';

import './styleOneArticle.scss';

const OneArticle = ({setCount, count}) => {
  const clickPanier = (e) => {
    e.preventDefault();
    console.log(e.target.id)
    const newCount = count+1;
    setCount(newCount)

  }
  return (
    <form type="submit" className="articles-detail">
          <div className="articles-detail-image">
            <img className="articles-detail-image--img" src={Jouet} alt=""/>
          </div>
          <div className="articles-detail-infos">
            <h2 className="articles-detail-infos-title">titre 1</h2>
            <p className="articles-detail-infos-small">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad cum fuga recusandae.</p>
            <p className="articles-detail-infos-price">30.90€</p>
            <img className="articles-detail-infos-addCart" src={Cart} onClick={clickPanier} alt="panier" id="1"/>
          </div>
    </form>
      
  )
}

export default OneArticle;