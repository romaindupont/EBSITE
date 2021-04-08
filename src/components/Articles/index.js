import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import Card from './Card';
import Footer from './footer';
import classNames from 'classnames';


import './style.scss';

const Articles = ({open}) => {
  const [count, setCount] = useState(0);

  return (
    <div className={classNames("articles", {"articles--open":open})}>

      <SearchBar />
      <div className="section">
        <Card count={count} setCount={setCount}/>
        <Card count={count} setCount={setCount}/>
        <Card count={count} setCount={setCount}/>
      </div>
      <Footer count={count}/>
    </div>
  )
}

export default Articles;