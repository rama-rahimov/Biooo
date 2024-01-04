import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { authenticate } from '../middlewear/auth.js'
import conn from '../db.js';

const router = express.Router();
router.use(cors());
router.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, '../src/images');
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/upload', authenticate , upload.single('file'), async (req, res) => {
  console.log(req.file);
  const imageeName = req.file.filename;
  const { addPrice, nameProduct } = req.body;
  const product = {price:addPrice, name:nameProduct, imgUrl: imageeName};
 let addProduct = {} ;
  try {

    let question = '' ;
    console.log(addPrice);
    if(product.imgUrl && product.imgUrl.length > 0){
        addProduct.imgUrl = product.imgUrl ;
        question += '? ' ;                                                                                  
    } 
    if(product.name && product.name.length > 0){
        addProduct.name = product.name ;
        question += ',?' ;
    }
    if(product.price > 0){
        addProduct.price = product.price ;
        question += ',?' ;
    }

    const keys = Object.keys(addProduct);
    const values = Object.values(addProduct);
    const keyForInsert = keys.join(", ");
    console.log(keyForInsert);
    console.log(values);
    console.log(question);
    conn.query(
      `INSERT INTO growth(${keyForInsert}) 
    VALUES(${question})`,
      values,
      (err, result) => {
        if (err) {
        console.log(err.message);
        res.json(err.message); 
        }
        console.log('Row inserted:' + result);
        res.json({ status: 'ok' });
      }
    );
  } catch (error) {
    res.json({ status: error });
  }
});

router.get('/get_image', authenticate , async (req, res) => {
  try {
    conn.query(`SELECT * from growth LIMIT 40`, (err, result) => {
      if (err) {
        console.log(err.message);
        res.json({ status: err.message });
      }
      res.json({ status: 'ok', data: result });
    });
  } catch (error) {
    res.json({ status: error });
  }
});

router.post('/product', (req, res) => {
  const { id } = req.body;
  conn.query(`SELECT * from growth WHERE id=?`, [id], (err, result) => {
    if (err) {
    console.log(err.message);
    res.json(err.message);
    }
    if (result[0].id !== '') {
      res.json({ status: 'ok', data: result });
    }
  });
});

router.post('/update_image', upload.single('file'), (req, res) => {
  const { filename } = req.file;
  const { id } = req.body;
  console.log("filename", filename);
  conn.query(`UPDATE growth
  SET imgUrl=?
  WHERE id=?`, [filename, id], (err) => {
  if(err){
  console.log(err.message);
  return res.json(err.message);
  }
  res.json({ status:"ok", data:"Img product changed successfully" })
  })
});

router.post('/update_price', (req, res) => {
  const { price, id } = req.body;
  console.log("price", price);
  conn.query(
    `UPDATE growth
    SET price=?
    WHERE id=?`,
    [price, id],
    (err) => {
    if (err) {
    console.log(err.message);
    return res.json(err.message);
    }
    res.json({ status: 'ok', info: 'price change successfully' });
    }
  );
});

router.post('/update_name_product', (req, res) => {
  const { name, id } = req.body;
  console.log("product", name);
  conn.query(
    `UPDATE growth
    SET name=?
    WHERE id=?`,
    [name, id],
    (err, result) => {
    if (err) {
    console.log(err.message);
    return res.json(err.message)
    }
    res.json({ status: 'ok', info: 'name product change successfully' });
    }
  );
});

router.post('/delete_product', (req, res) => {
  const { id } = req.body;
  conn.query(
    `DELETE FROM growth
    WHERE id=?`,
    [id],
    (err) => {
    if (err) {
    console.log(err.message);
    return res.json(err.message);
    }
    res.json({ status: 'ok', info: 'product delete successfully' });
    }
  );
});

export default router;