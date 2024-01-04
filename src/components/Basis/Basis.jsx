import React from 'react' ;
import s from './Basis.module.css' ;
import AddProduct from '../Admin/AddProduct/AddProduct';
import Proccess from '../Admin/Proccess/Proccess';

const Basis = () => {
  return (
    <div className={s.basis}>
      <h1 className={s.basisH1}>What we offer to you</h1>
      {/* <AddProduct /> */}
      <Proccess />
    </div>
  )
}

export default Basis ;
