import React, {useState} from 'react';
//import { Switch, Route, Redirect } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import AccueilMobile from '../AccueilMobile';
import Menu from '../Menu';
import Category from '../Category';
import Articles from '../Articles';
import Logo from '../../assets/img/logo2.png';
import OneArticle from '../Articles/OneArticle';

const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <img className="accueil-logo" src={Logo} alt=""/>
      <Menu open={open} setOpen={setOpen}/>
      <Switch>
        <Route exact path="/">
          <AccueilMobile />
        </Route>
        <Route exact path="/categories">
          <Category open={open}/>
        </Route>
        <Route exact path="/articles">
          <Articles open={open}/>
        </Route>
        <Route path="/articles/:id">
          <OneArticle open={open}/>
        </Route>
      </Switch>
    </>
    
  )
}

export default App;