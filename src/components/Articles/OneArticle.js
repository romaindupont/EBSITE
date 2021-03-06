/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import BackArrow from '../../assets/img/back-arrow.svg';
import { useHistory, useParams } from 'react-router-dom';
import './styleOneArticle.scss';
import articleData from '../../data/articleData';
import classNames from 'classnames';

const OneArticle = ({sendArticleToBasket, open}) => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const currentObject = articleData.find((article) => article.id == id);
  let history = useHistory();
  const routeChange =()=> {
    history.goBack();
  };
  const clickPanier = (e) => {
    e.preventDefault();
    sendArticleToBasket( currentObject.id, quantity);
    let path = `/panier`; 
    history.push(path);
  };
  const minusClick = () => {
    let minus = quantity-1;
    if(minus <0) {
      minus = 0;
    }
    setQuantity(minus);
  }
  const plusClick = () => {
    let plus = quantity+1;
    setQuantity(plus)
  };
  
  const redClick = () => {
    document.querySelector('.articles-detail-image--img').style.display = "block"
    document.querySelector('.articles-detail-image--img--1').style.display = "none"
    document.querySelector('.articles-detail-image--img--2').style.display = "none"
    document.querySelector('.articles-detail-circle').style.background = "#ef726b"
    document.querySelector('.articles-detail-photos-1').style.transform = "scale(0.5)"
    document.querySelector('.articles-detail-photos-2').style.transform = "scale(1)"
    document.querySelector('.articles-detail-photos-3').style.transform = "scale(1)"
  }
  const greenClick = () => {
    document.querySelector('.articles-detail-image--img--1').style.display = "block"
    document.querySelector('.articles-detail-image--img').style.display = "none"
    document.querySelector('.articles-detail-image--img--2').style.display = "none"
    document.querySelector('.articles-detail-circle').style.background = "#6dd9ff"
    document.querySelector('.articles-detail-photos-2').style.transform = "scale(0.5)"
    document.querySelector('.articles-detail-photos-1').style.transform = "scale(1)"
    document.querySelector('.articles-detail-photos-3').style.transform = "scale(1)"
  }
  const blueClick = () => {
    document.querySelector('.articles-detail-image--img--2').style.display = "block"
    document.querySelector('.articles-detail-image--img').style.display = "none"
    document.querySelector('.articles-detail-image--img--1').style.display = "none"
    document.querySelector('.articles-detail-circle').style.background = "#75cfb8"
    document.querySelector('.articles-detail-photos-3').style.transform = "scale(0.5)"
    document.querySelector('.articles-detail-photos-1').style.transform = "scale(1)"
    document.querySelector('.articles-detail-photos-2').style.transform = "scale(1)"
  }
  
  return (
    <>
    <form type="submit" className={classNames("articles-detail", {"articles-detail--openMenu":open})}>
      <div className="articles-back">
        <img onClick={routeChange} src={BackArrow} alt=""/>
      </div>
      <div className="articles-detail-image">
      <div className="articles-detail-circle"></div>
        <img className="articles-detail-image--img" src={currentObject.picture} alt=""/>
        <img className="articles-detail-image--img--1" src={currentObject.picture1} alt=""/>
        <img className="articles-detail-image--img--2" src={currentObject.picture2} alt=""/>
        {/* <p className="articles-detail-image--img--2">Dimension : {currentObject.dimension}</p> */}
      </div>
      <div className="articles-detail-photos">
        <span onClick={redClick} className="articles-detail-photos-1"></span>
        <span onClick={greenClick} className="articles-detail-photos-2"></span>
        <span onClick={blueClick} className="articles-detail-photos-3"></span>
      </div>
      <div className="articles-detail-infos">
        <h2 className="articles-detail-infos-title">{currentObject.title}</h2>
        <h5 className="articles-detail-infos-subtitle">{currentObject.category}</h5>
        <h4 className="articles-detail-infos-title-qty">Quantit??</h4>
        <div className="articles-quantity">
        <div className="articles-detail--minus" onClick={minusClick}>-</div>
        <p className="articles-detail--qty">{quantity}</p>
        <div className="articles-detail--plus" onClick={plusClick}>+</div>
        </div>
        <h4 className="articles-detail-infos-title-desc">Description</h4>
        <p className="articles-detail-infos-small">{currentObject.descriptionPlus}</p>
        <h4 className="articles-detail-infos-title-desc">Dimension</h4>
        <p className="articles-detail-infos-small">{currentObject.dimension}</p>
        <div className="articles-detail-infos-panier">
        <p className="articles-detail-infos-panier--button" onClick={clickPanier}>Ajouter au panier</p>
        <p className="articles-detail-infos-panier--price">{currentObject.prix.toFixed(2)}???</p>
        </div>
      </div>
    </form>

    </>
      
  )
}

export default OneArticle;