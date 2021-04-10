import React from 'react';
import Cart from '../../assets/img/cart.svg';
import Jouet from '../../assets/img/jouet.png';
import BackArrow from '../../assets/img/back-arrow.svg';
import Footer from '../Articles/footer';
import { useHistory } from 'react-router-dom';
import './styleOneArticle.scss';

const OneArticle = ({setCount, count}) => {
  const clickPanier = (e) => {
    e.preventDefault();
    console.log(e.target.id)
    const newCount = count+1;
    setCount(newCount)

  };
  let history = useHistory();
  const routeChange =()=> {
    history.goBack();
  };
  return (
    <>
    <form type="submit" className="articles-detail">
      <div className="articles-back">
        <img onClick={routeChange} src={BackArrow} alt=""/>
      </div>
      <div className="articles-detail-image">
      <div className="articles-detail-circle"></div>
        <img className="articles-detail-image--img" src={Jouet} alt=""/>
      </div>
      <div className="articles-detail-photos">
        <span className="articles-detail-photos-1">1</span>
        <span className="articles-detail-photos-2">2</span>
        <span className="articles-detail-photos-3">3</span>
      </div>
      <div className="articles-detail-infos">
        <h2 className="articles-detail-infos-title">titre 1</h2>
        <p className="articles-detail-infos-small">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad cum fuga recusandae.</p>
        <p className="articles-detail-infos-price">30.90€</p>
        <img className="articles-detail-infos-addCart" src={Cart} onClick={clickPanier} alt="panier" id="1"/>
      </div>
    </form>
    <Footer />
    </>
      
  )
}

export default OneArticle;