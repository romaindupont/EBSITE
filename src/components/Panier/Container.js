import React, { useState } from 'react';
import ImageTest from '../../assets/img/jouet.png';
import './style.scss';
import classNames from 'classnames';
import Dust from '../../assets/img/dustbin.svg';


const Container = () => {
  const [priceView, setPriceView] = useState(false);
  const [quantity, SetQuantity]= useState(1);
  const quantityClick = () => {
    setPriceView(!priceView) 
  }
  const minusClick = () => {
    SetQuantity(quantity-1)
  }
  const plusClick = () => {
    SetQuantity(quantity+1)
  }
  const Montant = 50*quantity;
  return (
      <div className="panier-container">
        <img className="panier-container-img" src={ImageTest} alt=""/>
        <div className="panier-container-infos">
          <h3 className="panier-container-reference">Titre</h3>
          <h4 className="panier-container-category">Category</h4>
        </div>
        <p className="panier-container-quantity" onClick={quantityClick}>x{quantity}</p>
        <p className="panier-container-montant">{Montant}€</p>
        <div className={classNames("panier-container-add", {"panier-container-add--view":priceView})}>
          <div className="panier-container-add--minus" onClick={minusClick}>-</div>
          <p className="panier-container-add--quantity">{quantity}</p>
          <div className="panier-container-add--plus" onClick={plusClick}>+</div>
        </div>
        <div className="panier-container--supp">
          <img className="panier-container--supp-img" src={Dust} alt="poubelle"/>
        </div>
      </div>
  )
}

export default Container;