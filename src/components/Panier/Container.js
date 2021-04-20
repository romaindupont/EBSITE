import React from 'react';
import ImageTest from '../../assets/img/jouet.png';
import './style.scss';


const Container = () => {
  return (
      <div className="panier-container">
        <img className="panier-container-img" src={ImageTest} alt=""/>
        <div className="panier-container-infos">
          <h3 className="panier-container-reference">Titre</h3>
          <h4 className="panier-container-category">Category</h4>
        </div>
        <p className="panier-container-quantity">x1</p>
        <p className="panier-container-Montant">50€</p>
      </div>
  )
}

export default Container;