import React from 'react';
import Container from './Container';
import Payment from './Payment';
import './style.scss';


const Panier = () => {
  return (
    <div className="panier">
      <h2 className="panier-titre">Mon Panier</h2>
      <Container />
      <Container />
      <Payment />

    </div>
  )
}

export default Panier;