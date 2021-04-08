import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import Card from './Card';
import Footer from './footer';
import classNames from 'classnames';
import articleData from '../../data/articleData';

import './style.scss';

const Articles = ({open}) => {
  const [count, setCount] = useState(0);

  return (
    <div className={classNames("articles", {"articles--open":open})}>

      <SearchBar />
      <div className="section">
      {articleData.map((article)=>
        <Card count={count} setCount={setCount} {...article}/>
      )}
      </div>
      <Footer count={count}/>
    </div>
  )
}

export default Articles;