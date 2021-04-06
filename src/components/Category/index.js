import React from 'react';
import SearchBar from '../SearchBar';
import classNames from 'classnames';
import './style.scss';
const Category = ({open}) => {
  
  return (
    <div className={classNames("category", {"category--open":open})}>
      <SearchBar />


    </div>
  )
}

export default Category;