import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Facture = ({orderList, numeroCde, articlesList}) => {
  const Invoice = orderList.find((order) => order.numeroCde === numeroCde);
  let basket = Invoice.order.map((cde) => articlesList.find((article)=> cde.article_id === article.id))
  const basketArticle = []
  for(let i = 0; i < basket.length; i++) {
    basketArticle.push({'titre': basket[i].title, 'quantite':Invoice.order[i].quantity} )
  }
  return (
    <>
    <div className="panier facture">
      <Link to='/mesCommandes' className="panier-retour" >Revenir à la liste</Link>
      <h2 className="panier-titre">Ma Facture</h2>
      <div className="factureList">
        <p>Commande numéro : {Invoice.numeroCde}</p>
        <p>Date de commande : {Invoice.dateCommande}</p>
        <p>Montant Payé : {Invoice.totalAmount.toFixed(2)} €</p>
        <p>Information Commande : {Invoice.infoCde}</p>
        <p>Date Livraison estimée : {Invoice.dateLivraison}</p>
        <ul> Mon Panier :
          {basketArticle.map((cde, i) => (
            <li key={i}>{cde.titre} x {cde.quantite}</li>
            ))}
        </ul>
      </div>
    </div>
  </>
  )
}

export default Facture;