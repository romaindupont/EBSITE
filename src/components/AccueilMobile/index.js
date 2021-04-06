import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo2.png';
import Images from '../../data/imagesAccueil';
import Next from '../../assets/img/next.svg';

import './style.scss';

const AccueilMobile = () => {
  const [newImage, setNewImage] = useState(0)
  const nextClick = () => {
    if (newImage===2){
      setNewImage(0)
    }
    if (newImage===0 || newImage===1){

      setNewImage(newImage+1)
    }
  }
  const previousClick = () => {
    if (newImage===0){
      setNewImage(2)
    }
    if (newImage===2 || newImage===1){

      setNewImage(newImage-1)
    }
  }  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (newImage===2){
        setNewImage(0)
      }
      if (newImage===0 || newImage===1){
  
        setNewImage(newImage+1)
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [newImage]);
  const url ="";
  return (
    <div className="accueil">
        

        <div className="accueil-carrousel">
          <i href={url} className="accueil-carrousel--previous" onClick={previousClick} >&#8249;</i>
          {Images.map((image, index)=> (
            <img className={index===newImage ? "accueil-carrousel-image" : "inactive"} key={index} src={image.pictureAccueil} alt=""/>

          ))}
          <i href={url} className="accueil-carrousel--next" onClick={nextClick} >&#8250;</i>
        </div>
        <div className="accueil-title">
          <h1 className="accueil-title-title">E&B Fabricant de vos rêves</h1>
          <p className="accueil-title-paragraph">E&B fabrique pour vous tous vos projets. Jeux, jouets, ustensiles, meubles,...Pour tout vos projets différents contactez-nous !</p>
          
        </div>
        <div className="accueil-button">
          <Link href={url} className="accueil-button--click">Venez découvrir <img src={Next} className="accueil-button--next" alt="page-suivante"/></Link>
        </div>
    </div>
  )
}

export default AccueilMobile;