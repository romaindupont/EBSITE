import React, { useState } from 'react';
import ImageTest from '../../assets/img/jouet.png';
import './style.scss';
import classNames from 'classnames';
import Dust from '../../assets/img/dustbin.svg';


const Container = () => {
  const [priceView, setPriceView] = useState(false);
  const [dust, setDust] = useState(false);
  const [quantity, setQuantity]= useState(1);
  const quantityClick = () => {
    setPriceView(!priceView) 
  }
  const minusClick = () => {
    setQuantity(quantity-1)
  }
  const plusClick = () => {
    setQuantity(quantity+1)
  };
  const handleSupp = () => {
    setDust(!dust);
  }
  const Montant = 50*quantity;
  return (
      <div className={classNames("panier-container", {"panier-container--move":dust})}>
        <img className="panier-container-img" src={ImageTest} alt="" onMouseEnter={handleSupp}/>
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
        <div className={classNames("panier-container--supp", {"panier-container--supp--move":dust})}>
          <img className="panier-container--supp-img" src={Dust} alt="poubelle"/>
        </div>
      </div>
  )
}

export default Container;