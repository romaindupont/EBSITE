import React from 'react';
import { Link } from 'react-router-dom';

const ListFacture = ({orderList, userInfo, orderNumberSelect}) => {
  const ListCommande = orderList.filter((order) => order.user_id === userInfo.id);
  return (
    <>
    <div className="panier facture">
      <Link to='/moncompte' className="panier-retour">Revenir dans mon compte</Link>
      <h2 className="panier-titre">Mes Commandes :</h2>
        <ul>
          {ListCommande.map((cde, i) => (
            <li key={i}> <Link to={`/facture/${cde.numeroCde}`} onClick={()=>{orderNumberSelect(cde.numeroCde)}}>Commande N°{cde.numeroCde}<br/>Montant: {cde.totalAmount.toFixed(2)} €<br/>Informations : {cde.infoCde}<br/>Date de Liraison : {cde.dateLivraison} </Link></li>
            ))}
        </ul>
    </div>
  </>
  )
}

export default ListFacture;