import React from 'react';
import Container from './Container';
import './style.scss';


const Panier = () => {
  return (
    <div className="panier">
      <h2 className="panier-titre">Mon Panier</h2>
      <Container />
      <Container />
    </div>
  )
}

export default Panier;