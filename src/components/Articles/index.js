import React from 'react';
import SearchBar from '../SearchBar';
import Card from './Card';
import classNames from 'classnames';
import { useParams,useHistory } from 'react-router-dom';
import BackArrow from '../../assets/img/back-arrow.svg';
import './style.scss';

const Articles = ({count, open, setCount,articleData,changeArticlesField,listArticles, panier, sendArticleToBasket}) => {
  const { slug } = useParams();
  let history = useHistory();
  const routeChange =()=> {
    history.goBack();
  };
  console.log(panier)
  let list= [];
  if(listArticles.length===0){
    list = articleData;
  }
  else {
    list = listArticles;
  }
  const currentCate = articleData.find((article) => article.category.toLowerCase() === slug);
  return (
    <div className={classNames("articles", {"articles--open":open})}>

      <SearchBar name="articlesSearch" changeField={changeArticlesField}/>
      <div className="articles-back">
        <img onClick={routeChange} src={BackArrow} alt=""/>
      </div>      
      <div className="section">
      {slug==="all" ? (list.map((article)=>
        <Card key={article.id} count={count} setCount={setCount} {...article} sendArticleToBasket={sendArticleToBasket}/>)):(
          <Card key={currentCate.id} count={count} setCount={setCount} {...currentCate} sendArticleToBasket={sendArticleToBasket}/>
      )}
      </div>
      
    </div>
  )
}

export default Articles;