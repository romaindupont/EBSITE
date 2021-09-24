import React from 'react';
import Container from '../../containers/Panier/Container';
import Payment from '../../containers/Panier/Payment';
import './style.scss';
import { Link } from 'react-router-dom';


const Panier = ({panier, saveArticleId, dustArticle}) => {
  let totalAmount = 0;
  panier.forEach(element => {
    totalAmount += element.amount
    
  })
  return (
    <>
    <div className="panier">
      <Link to='/categories' className="panier-retour" >Continuer mes achats</Link>
      <h2 className="panier-titre">Mon Panier</h2>
      <div className="container-panier">
        {panier.map((article) => <Container key={article.id} {...article} saveArticleId={saveArticleId} corbeille={dustArticle} />)}
      </div>
      <div className="montant">Montant à payer : {totalAmount.toFixed(2)}€</div>

    </div>
  <Payment totalAmount={totalAmount}/>
  </>
  )
}

export default Panier;