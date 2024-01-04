import React, { useEffect, useState } from 'react';
import axios from 'axios';
import basket from '../../assets/basket.svg';
import { Link  } from 'react-router-dom';
import s from './Product.module.css';
import Pagination from '../Pagination';

const Product = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [numBasket, setNumBasket] = useState(0);
  const [postsPerPage] = useState(4);
  const [allCategories, setAllCategories] = useState([]);
  const [childrenProd, setChildrenProd] = useState([]);
  const [childrenCompareRoditel, setChildrenCompareRoditel] = useState(0);
  const [dataHtml, setDataHtml] = useState("");

  const takeChildrenCategories = (childrenProduct, id) => {
    if(childrenProduct.length > 0){
      setChildrenCompareRoditel(id);
      setChildrenProd(childrenProduct);
    }
  }

  const basketWork = (id, name, price, img) => {
  axios.post(`http://localhost:3001/product/basket`, { id, name, price, img }, {
  headers:{
  Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywicm9sZUlkIjoxLCJpYXQiOjE3MDM0ODU5OTgsImV4cCI6MTcwMzc0NTE5OH0.W82C_ghkynhV1LxCpOwdhd_-voq9SBoAUieAoc_H4I4"
  }
  })
  .then(ahaa =>{
  if(Number(ahaa.data) !== 1){
  return alert("Add product in basket can do only users");
  } 
  setNumBasket(numBasket + 1);
  });
  }

  useEffect( () => {
  const text = async () => {
  const takeHtml = await axios.get("http://localhost:3001/product/text");
  console.log(takeHtml.data);
  // setDataHtml(takeHtml.data);
  setDataHtml(<>
  <h1>hkjbjdcjk</h1>
  <p>jdfbd</p>
  <h1>kjbdsc</h1>
  <p>onlkdsc</p>
  </>)
  }
  const fetchPost = async () => {
  setLoading(true);
  const res = await axios.get("http://localhost:3001/users/get_image");
  setPosts(res.data.data);
  setLoading(false);
  }
  const categor = async () => {
  const rabotayemCategor  = await axios.get("http://localhost:3001/categories");
  setAllCategories(rabotayemCategor.data.data);
  }
  const hmm = async () => {
  const fj = await axios.get(`http://localhost:3001/product/get`, {
  headers:{
  Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywicm9sZUlkIjoxLCJpYXQiOjE3MDM0ODU5OTgsImV4cCI6MTcwMzc0NTE5OH0.W82C_ghkynhV1LxCpOwdhd_-voq9SBoAUieAoc_H4I4"
  }
  });
  if(!fj.data){
  return 
  }
  const {
  currentCount
  } = fj.data ;
  setNumBasket(currentCount);
  }
  text();
  hmm();
  fetchPost();
  categor();
  }, []);

  if(loading && posts.length === 0) {
  return <h2>Loading...</h2>
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage ;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages  = Math.ceil(posts.length/postsPerPage);
  console.log("allCategories", allCategories);
  console.log("children_product", childrenProd);
  const justArr = [];
  justArr.push(dataHtml);
  return (
    <div style={{paddingBottom:"100px" , width:"100%",height:"1000px", backgroundColor:"khaki"}}>
    <div className={s.vpeeered}>
    <h1>What we offer to you</h1>
    <div  className={s.veyenede}>
    <Link className={s.davay} to={ numBasket > 0 ? `/basket` : ''}>
    <img src={basket} style={{width:"30px"}}/>
    <h5 style={{color:"black"}}>{numBasket}</h5>
    </Link>
    </div>
    </div>
    <div style={{width:"100%", display: "flex"}}>
    <div style={{width:"15%", background:"#fff"}}>
    <div style={{paddingLeft:"5px", background:"green"}}>
    {allCategories.map((el, index) => {
    return (
    <div key={index} className="collapsible" onClick={() => {takeChildrenCategories(el.children, el.id)}}>
    <p style={{cursor:"pointer"}}>{el.name}</p>
    <div style={{marginLeft:"10px"}}>
    {childrenProd.length > 0 &&  childrenCompareRoditel === el.id &&
    childrenProd.map((el, index) => {
    return(
    <div key={index}>
    <p className='collapsible_child'>{el.name}</p> 
    </div> 
    )
    }) 
    }
    </div>
    </div>
    )
    })}
    </div>
    </div>
    <div>{justArr.map((el) => {
      return el 
    })}</div>
    <div style={{ width:"70%" , 
    display: "flex", 
    justifyContent: "center" , 
    flexWrap: "wrap" }}>
    { posts === null ? "" :
    currentPosts.map((data, index) => {
    return <div key={index}  style={{ margin:"20px", padding:"20px", width:"350px", height:"350px",
    backgroundColor:"#bbb",  borderRadius: "10px" }} > 
    <img
    height="250px"
    width="280px"
    src={require(`../../images/${data.imgUrl}`)} 
    />
    <div style={{height:"20px" , display:"flex", justifyContent:"space-around"}}>
    <div>
    <p>{data.name}</p> 
    <p>{`${data.price == null ? '0' : data.price} $`}</p>
    </div>
    <button className={s.link} onClick={() =>  basketWork(data.id, data.name, data.price, data.imgUrl)}>Put in basket</button>
    </div>
    </div>
    }) 
    }
    </div>
    </div>
    <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default Product;
