import React, {useState} from 'react';
import SearchLogo from '../../assets/img/search.svg';
import classNames from 'classnames';
import './style.scss';

const SearchBar = ({changeField, categoryName, name}) => {
  const [openSearch, setOpenSearch] = useState(false);
  const clickOnSearch = () => {
    setOpenSearch(!openSearch);
    
  };
  const handleChange = (e) => {
    changeField(e.target.value, name)
  }
  return (
   <div className="searchBar">
     <form className="searchBar-form" type="submit">
       <input className={classNames("searchBar-form-input", {"searchBar-form-input-open":openSearch})} onChange={handleChange} type="text" value={categoryName} name={name} placeholder="recherche"/>
     </form>
     <img className={classNames("searchBar-image", {"searchBar-image--open":openSearch})} onClick={clickOnSearch} src={SearchLogo} alt=""/>
     <div className="searchBar-menu" onClick={clickOnSearch}>
        <div className={classNames('searchBar-menu-barre-1', { 'searchBar-menu-barre-1--open': openSearch })}></div>
        <div className={classNames('searchBar-menu-barre-3', { 'searchBar-menu-barre-3--open': openSearch })}></div>
      </div>
   </div>
  )
}

export default SearchBar;