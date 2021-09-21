import React from 'react';
import './style.scss';


const BlueCard = () => {
  return (
    <div className="blueCard">
      <div className="blueCard-puce">
        <div className="cartePuce">
          <span className="cartePuce-line1"></span>
          <span className="cartePuce-line2"></span>
          <span className="cartePuce-demiRond1"></span>
          <span className="cartePuce-line3"></span>
          <span className="cartePuce-line4"></span>
          <span className="cartePuce-demiRond2"></span>
        </div>
        <div className="cartePuce-connect">
          <span className="point"></span>
          <span className="arcCercle"></span>
          <span className="arcCercle"></span>
          <span className="arcCercle"></span>
        </div>
      </div>
      <img src="" alt="banque"></img>
      <img src="" alt="cb"></img>
      <div className="triangle"></div>
      <label className="text-cardNumber">
        <input type="tel" maxlength="19" pattern="[0-9\s]{13,19}" placeholder="xxxx xxxx xxxx xxxx"></input>
      </label>
      <label className="text-cardDate">
        <input type="date"></input>
      </label>
    </div>
  )
}

export default BlueCard;