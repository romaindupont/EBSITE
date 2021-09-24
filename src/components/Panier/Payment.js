import React, { useState } from 'react';
import './style.scss';
import classNames from 'classnames';
import BlueCard from '../../containers/Panier/BlueCard';
import Connexion from '../../containers/Connexion';

const Payment = ({isConnected, totalAmount}) => {
  const [openPayment, setOpenPaiment] = useState(false);
  return (
    <div className={classNames("payment", {"payment--open":openPayment})}>
      <div className="checkout" onClick={()=> setOpenPaiment(!openPayment)}></div>
      {isConnected && (<BlueCard openPayment={openPayment} totalAmount={totalAmount} />)}
      {!isConnected && (<Connexion openPayment={openPayment} />)}
    </div>
  )
}

export default Payment;