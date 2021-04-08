import React from 'react';
import SearchBar from '../SearchBar';
import classNames from 'classnames';
import CategoryList from './CategoryList';
import DataCategory from '../../data/catergoryData';
import './style.scss';

const Category = ({open}) => {

  return (
    <div className={classNames("category", {"category--open":open})}>
      <SearchBar />
      <h2 className="category-title">All Category</h2>
      <div className="category-section">
        {DataCategory.map((category) => 
         <CategoryList key={category.id} {...category}/>
         )}
      </div>
    </div>
  )
}

export default Category;