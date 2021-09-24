import React from 'react';
import { Link } from 'react-router-dom';

const Facture = ({orderList, numeroCde}) => {
  const Invoice = orderList.find((order) => order.numeroCde === numeroCde);
  console.log(numeroCde)
  console.log(Invoice)
  return (
    <>
    <div className="panier">
      <Link to='/categories' className="panier-retour" >Continuer mes achats</Link>
      <h2 className="panier-titre">Ma Facture</h2>
        <p>{Invoice.nuemroCde}</p>
    </div>
  </>
  )
}

export default Facture;