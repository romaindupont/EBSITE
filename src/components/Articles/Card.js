import React from 'react';
import Cart from '../../assets/img/cart.svg';
import { Link, useHistory } from 'react-router-dom';

import './style.scss';

const Card = ({
  id,
  category,
  picture,
  title,
  description,
  descriptionPlus,
  dimension,
  prix,
  sendArticleToBasket
}) => {
  const history = useHistory();
  const clickPanier = (e) => {
    e.preventDefault();
    sendArticleToBasket(parseInt(e.target.id), 1);
    let path = `/panier`; 
    history.push(path);

  }
  return (
    <form type="submit" className="articles-section-all">
      <div className="articles-section-image">
        <Link to={`articles/${id}`}><img className="articles-section-image--img" src={picture} alt=""/></Link>
      </div>
      <Link to={`articles/${id}`}><div className="articles-section-infos">
        <h2 className="articles-section-infos-title">{title}</h2>
        <p className="articles-section-infos-small">{description}</p>
        <p className="articles-section-infos-price">{prix.toFixed(2)}€</p>
        <img className="articles-section-infos-addCart" src={Cart} onClick={clickPanier} alt="panier" id={id}/>
      </div></Link>
    </form>
  )
}

export default Card;