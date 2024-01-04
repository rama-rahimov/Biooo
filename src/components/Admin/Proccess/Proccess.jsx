import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import s from './Proccess.module.css';

const Proccess = () => {
  const [file, setFile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [nameProduct, setNameProduct] = useState("");
  const [addPrice, setAddPrice] = useState(null);
  const [addProduct, setAddProduct] = useState(false);
  const [currentPage, setCiurrentPage] = useState(1);
  const postPerPage = 6 ;
  const pageNumbers = [];
  const paginate = (pageNumber) => setCiurrentPage(pageNumber);

  for (let i = 1; i <= Math.ceil(posts.length / postPerPage); i++) {
    pageNumbers.push(i);
  }

  
  useEffect(() => {
    const fetchPost = async () => {
    const res = await axios.get("http://localhost:3001/admin/get_image", {
      headers:{
        Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywicm9sZUlkIjoxMCwiaWF0IjoxNzAzMTU5NTc4LCJleHAiOjE3MDM0MTg3Nzh9.ZYmH8PbbXhBiTe2duXKuSZtFiMGiDVCQPcHzsBtNdC8"
      }
    });
    setPosts(res.data.data);
    console.log(res);
    }

    fetchPost();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const upload = () => {
    if(!file){
      alert("Please select file");
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('addPrice', addPrice);
    formData.append('nameProduct', nameProduct);
    console.log(formData);
    axios.post("http://localhost:3001/admin/upload", formData,  {
      headers:{
        Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywicm9sZUlkIjoxMCwiaWF0IjoxNzAzMTU5NTc4LCJleHAiOjE3MDM0MTg3Nzh9.ZYmH8PbbXhBiTe2duXKuSZtFiMGiDVCQPcHzsBtNdC8"
      }
    })
    .then(ahaa => ahaa)
    .catch(err => console.log(err));
  }

  return (
    <div style={{paddingBottom:"100px"}}>
    {console.log(posts)}
    {console.log(addProduct)}
    <div style={{width:"100%", display: "flex", 
    "justifyContent":"center", 
    "flexDirection":"column",
    "alignItems":"center"
    }}>
      <button onClick={() => setAddProduct(!addProduct)}>Add Product</button>
      {
        addProduct && (
        <div style={{width:"100%"}}>
        <div style={{display:"flex", justifyContent:"center", paddingTop:"30px"}}>
        <div>
        <p style={{margin:0, paddingBottom:"5px"}}>Picture: </p>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div style={{paddingRight:"10px"}}>
        <p style={{margin:0, paddingBottom:"5px"}}>Name: </p>
        <input type="text"
        style={{padding:"0 10px", height:"36px"}}
        value={nameProduct}
        onChange={(e) => setNameProduct(e.target.value)}
        />
        </div>
        <div>
        <p style={{margin:0, paddingBottom:"5px"}}>Price: </p>
        <input 
        // className={s.innnpuut}
        style={{padding:"0 10px", height:"36px"}}
        inputMode="numeric"
        type="number"
        value={addPrice}
        onChange={(e) => setAddPrice(e.target.value)}
        />
        </div>
        </div>
        <div style={{textAlign:"center", paddingTop:"20px"}}>
        <button onClick={upload}>Oqqoooo</button>
        </div>
        </div>
        )
      }
    <div style={{ width:"80%" , 
    display: "flex", 
    justifyContent: "center" , 
    flexWrap: "wrap" }}>
      
    { posts === null ? "" :
      currentPosts.map((data) => {
        return <div style={{ margin:"20px", padding:"20px", width:"350px", height:"350px",
        backgroundColor:"#bbb",  borderRadius: "10px" }} > 
        <img
        height="250px"
        width="280px"
        src={require(`../../../images/${data.imgUrl}`)} 
        />
        <div style={{height:"20px" , display:"flex", justifyContent:"space-around"}}>
          <div>
          <p>{data.name}</p> 
          <p>{`${data.price} $`}</p>
          </div>
          <Link to={`/datachange/${data.id}`} className={s.link}>Change data</Link>
        </div>
        </div>
      }) 
    }
    </div>
    <nav>
      <ul className="pagination">
        {
          pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a style={{cursor:"pointer"}} className="page-link" onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
    </div>
    </div>
  )
}

export default Proccess;
