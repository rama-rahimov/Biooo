import React, { useState, useEffect } from 'react';
import s from './Basket.module.css';
import del from '../../assets/eraser-solid.svg';
import plus from '../../assets/plus-solid.svg';
import minus from '../../assets/minus-solid.svg';
import axios from 'axios';

const Basket = () => {
const [xmarkaNum, setXmarkaNum] = useState(0);
const [allArr, setAllArr] =  useState([]);
const [productCount, setProductCount] = useState(0);


const plusFunc = async (product_id, count) => {
const plusProduct = await axios.get(`http://localhost:3001/product/update_count/${product_id}/${count}/${1}`, {
headers:{
Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZUlkIjoxLCJpYXQiOjE3MDQ4Njk4MzgsImV4cCI6MTcwNTEyOTAzOH0.bG8Ws6FBD6drD6rpxWt4uIVzrxDBVHANptEdcmAq5z0"
}
});
console.log(plusProduct.data + productCount);
setProductCount(plusProduct.data + productCount);
}

const minusProductFunc = async (product_id, count) => {
const minusProduct = await axios.get(`http://localhost:3001/product/update_count/${product_id}/${count}/${0}`, {
headers:{
Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZUlkIjoxLCJpYXQiOjE3MDQ4Njk4MzgsImV4cCI6MTcwNTEyOTAzOH0.bG8Ws6FBD6drD6rpxWt4uIVzrxDBVHANptEdcmAq5z0"
}
});
console.log(minusProduct.data + productCount);
setProductCount(minusProduct.data + productCount);
}

async function udallyayYeqo  (product_id) {
const deleteProduct =  await axios.get(`http://localhost:3001/product/delte_product/${product_id}`, {
headers:{
Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZUlkIjoxLCJpYXQiOjE3MDQ4Njk4MzgsImV4cCI6MTcwNTEyOTAzOH0.bG8Ws6FBD6drD6rpxWt4uIVzrxDBVHANptEdcmAq5z0"
}
})
setXmarkaNum(deleteProduct.data.affectedRows);
}
useEffect(() => {
const hmm = async () => {
const fj = await axios.get(`http://localhost:3001/product/inbasket`, {
headers:{
Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZUlkIjoxLCJpYXQiOjE3MDQ4Njk4MzgsImV4cCI6MTcwNTEyOTAzOH0.bG8Ws6FBD6drD6rpxWt4uIVzrxDBVHANptEdcmAq5z0"
}
});
if(!fj.data){
return 
}
setAllArr(fj.data);
}
hmm();
}, [xmarkaNum, productCount]);
return (
<div className={s.veyenede}> 
<div className={s.davay}>
<h2 style={{paddingTop:"30px"}}>Basket</h2>
<table style={{width:"60%", paddingLeft:"100px", paddingTop:"40px"}}>
  <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Count</th>
    <th>Summary</th>
    <th>Delete</th>
  </tr>
  { allArr.map((el, index) => {
    return (
        <tr key={index}>
            <td>{el.name}</td>
            <td>{el.price}</td>
            <td> <div style={{display:"flex", alignItems:"center"}}>{el.count} <ul style={{margin:"0"}}>
            <p className={s.plus} onClick={() => plusFunc(el.product_id, el.count)}><img src={plus}  /></p>
            <p className={s.minus} onClick={() => minusProductFunc(el.product_id, el.count)}><img src={minus} /></p>
            </ul></div></td>
            <td>{(el.price * el.count).toFixed(2)}</td>
            <td onClick={() => udallyayYeqo(el.product_id)}>
            <img src={del} style={{cursor:"pointer"}} />
            </td>
        </tr>
    )
  })

  }
</table>
<p>All summary : {allArr.reduce((sum, el) => sum + (el.price * el.count) , 0).toFixed(2)}</p>
</div>
</div> 
  )
}

export default Basket;
