import React, { useState } from 'react';
import './style.scss';
import classNames from 'classnames';
import Dust from '../../assets/img/dustbin.svg';


const Container = ({title, category, price, picture, saveArticleId, id, corbeille}) => {
  const [priceView, setPriceView] = useState(false);
  const [dust, setDust] = useState(false);
  const [quantity, setQuantity]= useState(1);
  const quantityClick = () => {
    setPriceView(!priceView);
  }
  const minusClick = () => {
    setQuantity(quantity-1);
    setPriceView(false) ;
  }
  const plusClick = () => {
    setQuantity(quantity+1);
    setPriceView(false) ;
  };
  const handleSupp = () => {
    saveArticleId(id);
    setDust(!dust);
  }
  const dustArticle = (e) => {
    e.preventDefault();
    corbeille(id);
  }

  const Montant = price*quantity;
  return (
      <div className={classNames("panier-container", {"panier-container--move":dust})}>
        <img className="panier-container-img" src={picture} alt="" onMouseEnter={handleSupp}/>
        <div className="panier-container-infos">
          <h3 className="panier-container-reference">{title}</h3>
          <h4 className="panier-container-category">{category}</h4>
        </div>
        <p className="panier-container-quantity" onClick={quantityClick}>x{quantity}</p>
        <p className="panier-container-montant">{Montant}€</p>
        <div className={classNames("panier-container-add", {"panier-container-add--view":priceView})}>
          <div className="panier-container-add--minus" onClick={minusClick}>-</div>
          <p className="panier-container-add--quantity">{quantity}</p>
          <div className="panier-container-add--plus" onClick={plusClick}>+</div>
        </div>
        <div className={classNames("panier-container--supp", {"panier-container--supp--move":dust})}>
          <img className="panier-container--supp-img" src={Dust} alt="poubelle" onClick={dustArticle}/>
        </div>
      </div>
  )
}

export default Container;