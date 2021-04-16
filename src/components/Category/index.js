import React from 'react';
import SearchBar from '../../containers/SearchBar';
import classNames from 'classnames';
import CategoryList from './CategoryList';
/* import DataCategory from '../../data/catergoryData'; */
import './style.scss';

const Category = ({open,DataCategory,categoryNames, list, searchCategory}) => {
  console.log(list)
  /* const filtre = DataCategory.filter((truc) => truc.category=categoryNames)
  console.log(filtre) */
  return (
    <div className={classNames("category", {"category--open":open})}>
      <SearchBar name="categoryName"/>
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