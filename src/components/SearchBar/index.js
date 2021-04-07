import React, {useState} from 'react';
import SearchLogo from '../../assets/img/search.svg';
import classNames from 'classnames';
import './style.scss';
const SearchBar = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const clickOnSearch = () => {
    setOpenSearch(!openSearch);
    
  }
  return (
   <div className="searchBar">
     <form className="searchBar-form" type="submit">
       <input className={classNames("searchBar-form-input", {"searchBar-form-input-open":openSearch})} type="text" placeholder="recherche"/>
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