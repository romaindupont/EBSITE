import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const CategoryList = ({slug, picture, category}) => {
  const clickOnCategory =(e) => {
    console.log(e.target.value)
  }
  return (
    <Link to={`categorieS/${slug}`} className="category-type" onClick={clickOnCategory}>
      <div  className="category-type-round">
        <img className="category-type-image" src={picture} alt=""/>
      </div>
      <h4 className="category-type-titre">{category}</h4>
    </Link>  
  )
}

export default CategoryList;