import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const MonCompte = () => {
  return (
    <div className="monCompte">
      <h2>Mon Compte</h2>
      <ul className="monCompte-lien">
        <li><Link className="monCompte-link" to="/passwordChange">Modifier mon mot de passe</Link></li>
        <li><Link className="monCompte-link" to="/informations">Changer mes informations personnelles</Link></li>
        <li><Link className="monCompte-link" to="/mesCommandes">Mes commandes</Link></li>
      </ul>
    </div>
  )
}

export default MonCompte;