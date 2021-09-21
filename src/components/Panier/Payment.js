import React, { useState } from 'react';
import './style.scss';
import classNames from 'classnames';
import BlueCard from './BlueCard';

const Payment = () => {
  const [openPayment, setOpenPaiment] = useState(false);
  return (
    <div className={classNames("payment", {"payment--open":openPayment})}>
      <div className="checkout" onClick={()=> setOpenPaiment(!openPayment)}></div>
      <BlueCard />
      
    </div>
  )
}

export default Payment;