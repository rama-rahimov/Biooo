import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './DataChange.module.css';

const DataChange = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [price, setPrice] = useState(null);
  const [file, setFile] = useState(null);
  const [nameProduct, setNameProduct] = useState('');
  useEffect(() => {
    axios
      .post('http://localhost:3001/admin/product', { id })
      .then((result) => {
        setPost(result.data.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const changePrice = () => {
    axios
      .post('http://localhost:3001/admin/update_price', { price, id })
      .then((ahaa) => console.log(ahaa))
      .catch((err) => console.log(err));
  };

  const deleteProduct = () => {
    axios
      .post('http://localhost:3001/admin/delete_product', { price, id })
      .then((ahaa) => console.log(ahaa))
      .catch((err) => console.log(err));
  };

  const changeNameProduct = () => {
    axios
      .post('http://localhost:3001/admin/update_name_product', {
        name: nameProduct,
        id,
      })
      .then((ahaa) => console.log(ahaa))
      .catch((err) => console.log(err));
  };

  const wooorkk = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('id', id);
    axios
      .post('http://localhost:3001/admin/update_image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-rapidapi-host': 'file-upload8.p.rapidapi.com',
          'x-rapidapi-key': 'your-rapidapi-key-here',
        },
      })
      .then((ahaa) => console.log(ahaa.data))
      .catch((err) => console.log(err));
  };

  const onlyNumber = (event) => {
    const item = event.target.value;
    setPrice(item);
  };
  return (
    <div className={s.one}>
      <div className={s.two}>
        <div>
          <p className={s.pinTree}>Change picture:</p>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button className={s.btttnn} onClick={wooorkk}>
            Save
          </button>
        </div>
        <div>
          <p className={s.pinTree}>Change price:</p>
          <input
            className={s.innnpuut}
            inputMode="numeric"
            type="number"
            value={price}
            onChange={onlyNumber}
          />
          <button className={s.btttnn} onClick={changePrice}>
            Save
          </button>
        </div>
        <div>
          <p className={s.pinTree}>Change name:</p>
          <input
            value={nameProduct}
            onChange={(e) => setNameProduct(e.target.value)}
          />
          <button className={s.btttnn} onClick={changeNameProduct}>
            Save
          </button>
        </div>
      </div>
      <div className={s.four}>
        <img
          height="250px"
          width="280px"
          src={post.imgUrl ? require(`../../../images/${post.imgUrl}`) : ''}
        />
        <div>
          <div>
            <p>{post.name}</p>
            <p>{`${post.price == null ? '0' : post.price} $`}</p>
          </div>
        </div>
        <button
          style={{ border: 'none', borderRadius: '5px' }}
          onClick={deleteProduct}
        >
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default DataChange;
