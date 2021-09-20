import React from 'react';
import Cart from '../../assets/img/cart.svg';
import { Link } from 'react-router-dom';


import './style.scss';

const Card = ({setCount,
  count,
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
  const clickPanier = (e) => {
    e.preventDefault();
    const newCount = count+1;
    setCount(newCount)
    console.log(parseInt(e.target.id), newCount)
    sendArticleToBasket(parseInt(e.target.id), newCount)

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