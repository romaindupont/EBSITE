import React from 'react';
import Container from '../../containers/Panier/Container';
import Payment from '../../containers/Panier/Payment';
import './style.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Panier = ({panier, saveArticleId, dustArticle, open}) => {
  let totalAmount = 0;
  panier.forEach(element => {
    totalAmount += element.amount
    
  })
  return (
    <>
    <div className={classNames("panier", {"panier--openMenu":open})}>
      <div className="panier-header">
        <Link to='/categories' className="panier-retour" >Continuer mes achats</Link>
        <h2 className="panier-titre">Mon Panier</h2>
      </div>
      <div className="container-panier">
        {panier.map((article, i) => <Container key={i} {...article} saveArticleId={saveArticleId} corbeille={dustArticle} />)}
      <div className="montant">Montant à payer : {totalAmount.toFixed(2)}€</div>
      </div>
    </div>
  <Payment totalAmount={totalAmount} openPayment={open}/>
  </>
  )
}

export default Panier;