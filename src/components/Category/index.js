import React from 'react';
import SearchBar from '../../containers/SearchBar';
import classNames from 'classnames';
import CategoryList from './CategoryList';
/* import DataCategory from '../../data/catergoryData'; */
import './style.scss';

const Category = ({open,DataCategory,changeCategoryField, list, userInfo}) => {
  return (
    <div className={classNames("category", {"category--open":open})}>
      <SearchBar name="categoryName" changeField={changeCategoryField}/>
      <h2 className="category-title">All Category</h2>
      <div className="category-section">
      {list.length === 0 ? (
        DataCategory.map((categorie) => 
         <CategoryList key={categorie.id} {...categorie}/>
         )) : (
          list.map((categorie) => 
         <CategoryList key={categorie.id} {...categorie}/>
         ))
         }
      </div>
    </div>
  )
}

export default Category;