import React from 'react';
import Container from '../../containers/Panier/Container';
import Payment from './Payment';
import './style.scss';
import { Link } from 'react-router-dom';


const Panier = ({panier, saveArticleId, dustArticle}) => {
  return (
    <div className="panier">
      <Link to='/categories' className="panier-retour" >Continuer mes achats</Link>
      <h2 className="panier-titre">Mon Panier</h2>
      <div className="container-panier">
        {panier.map((article) => <Container key={article.id} {...article} saveArticleId={saveArticleId} corbeille={dustArticle} />)}
      </div>
      <Payment />

    </div>
  )
}

export default Panier;