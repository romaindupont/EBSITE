import React from 'react';
import SearchBar from '../SearchBar';
import Card from './Card';
import classNames from 'classnames';
import articleData from '../../data/articleData';

import './style.scss';

const Articles = ({count, open, setCount}) => {
  

  return (
    <div className={classNames("articles", {"articles--open":open})}>

      <SearchBar />
      <div className="section">
      {articleData.map((article)=>
        <Card count={count} setCount={setCount} {...article}/>
      )}
      </div>
      
    </div>
  )
}

export default Articles;