import React from 'react';
import './styleBlueCard.scss';
import { CardNumberTest } from '../../utils/cardNumberTest';

const BlueCard = () => {
  const inputInfo = (e) => {
    CardNumberTest(e.target.value);
  }
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
          <span className="arcCercle--1"></span>
          <span className="arcCercle--2"></span>
          <span className="arcCercle--3"></span>
        </div>
      </div>
      <div className="imageBanque"></div>
      <div className="imageCb"></div>
{/*       <img src="" alt="banque"></img>
      <img src="" alt="cb"></img> */}
      <div className="triangle"></div>
      <div className="triangle-inside"></div>
      <input id="inputCard" className="cardNumber-input" type="tel" maxlength="19" name="cardNumber" onChange={inputInfo} placeholder="xxxxxxxxxxxxxxxx"></input>
      <label className="text-cardDate">Expired
        <input type="date"></input>
      </label>
    </div>
  )
}

export default BlueCard;