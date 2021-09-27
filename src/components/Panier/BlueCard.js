import React, { useState } from 'react';
import './styleBlueCard.scss';
import { CardNumberTest, DateTest, YearTest, CgvTest } from '../../utils/cardNumberTest';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

const BlueCard = ({openPayment, numeroCde, ordering, totalAmount, panier, userInfo, orderList}) => {
  let history = useHistory();
  const [ turnCard, setTurnCard ] = useState(false);
  const inputInfo = (e) => {
    CardNumberTest(e.target.value);
  }
  const dateVerifyMonth = (e) => {
    DateTest(e.target.value);
  }
  const dateVerifyYear = (e) => {
    YearTest(e.target.value);
  }
  const verifyCgv = (e) => {
    CgvTest(e.target.value);
  }
  const paiementConfirmation = (e) => {
    e.preventDefault();
    if(e.target.form.cardNumber.value !== '' & e.target.form.month.value !== '' & e.target.form.year.value!== '' & e.target.form.select.value !== '' & e.target.form.surname.value !== '' & e.target.form.name.value !== '' & e.target.form.cgv.value !== '' ) {
      // paiement stripe
      console.log(e.target.form.cardNumber.value,e.target.form.month.value,e.target.form.year.value,e.target.form.select.value,e.target.form.surname.value,e.target.form.name.value ,e.target.form.cgv.value)
      const newOrder = numeroCde + 1;
      let elementId = 0;
      const orderBasket = []
      panier.forEach(element => { 
        orderBasket.push({
          'id': elementId = elementId+ 1,
          'article_id': element.id,
          'quantity': element.quantity,
          'amount': element.amount
        });
      });
      const newDate = Date.now();
      const today = new Date(newDate).toLocaleDateString();
      let deliveryEstimate = new Date(newDate);
      deliveryEstimate.setDate(deliveryEstimate.getDate() + 20);
      const deliveyDate = new Date(deliveryEstimate).toLocaleDateString();
      ordering(newOrder, orderBasket, today, userInfo.id, 'Enregistrée', deliveyDate, totalAmount);
      let path = `/facture/${newOrder}`; 
      history.push(path);
    }
  }
  return (
    <form className={classNames("card", {"card--open":openPayment})} type="submit">
    <div className="blueCard">
    <div className="blueCard-face">
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
      <div className="triangle"></div>
      <div className="triangle-inside" onClick={()=> setTurnCard(!turnCard)}></div>
      <input id="inputCard" className="cardNumber-input" type="tel" maxLength="19" name="cardNumber" onChange={inputInfo} placeholder="xxxxxxxxxxxxxxxx"></input>
      <label className="text-cardDate">Expired</label>
      <input id="inputDate--month" className="cardDate-input--month" type="text" name="month" maxLength="2" onChange={dateVerifyMonth} placeholder="mm"></input>
      <span className="cardDate-input--span">/</span>
      <input id="inputDate--year" className="cardDate-input--year" type="text" name="year" maxLength="2" onChange={dateVerifyYear} placeholder="aa"></input>
      <select className="optionCivil" name="select">
        <option value="">Civil.</option>
        <option value="Monsieur">M.</option>
        <option value="Madame">Mme</option>
      </select>
      <input id="inputSurname" className="inputName--surname" type="text" placeholder="Prénom" name="surname" ></input>
      <input id="inputName" className="inputName--name" type="text"  placeholder="Nom" name="name"></input>
    </div>
    <div className={classNames("blueCard-back", {"blueCard-back--turn":turnCard})}>
      <div className="blueCard-back--rectangle"></div>
      <label className="blueCard-back--label">CGV</label>
      <input id="cgv" className="blueCard-back--cgv" name="cgv" type="text" maxLength="3" placeholder="xxx" onChange={verifyCgv}></input>
    </div>
    </div>
    <button className={classNames("paiement-button", {"paiement-button--turn":turnCard})} onClick={paiementConfirmation}>Confirmer le paiement</button>
    </form>
  )
}

export default BlueCard;