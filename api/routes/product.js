import express from 'express';
import conn from '../db.js';
import cors from 'cors';
import { authenticate } from '../middlewear/auth.js';



const router = express.Router();
router.use(cors());

router.post("/basket", authenticate , (req, res) => {
    const role  = req.currrentUser.roleId ;
    const userId = req.currrentUser.id ;
    if(role !== 1){
    return res.json(10);
    }
    const {id, name, price, img} = req.body ;
    conn.query(`SELECT * FROM basket WHERE product_id=?`, [id], (err, result) => {
    if(err){
    console.log(err);
    res.json(err);
    } 
    if(!(result || []).length > 0){ 
    conn.query(`INSERT INTO basket(name, price, img, count, user_id, product_id)
    VALUES(?,?,?,?,?,?)`, [name, price, img, 1, userId, id], (err, result) => {
    if(err){
    console.log(err);
    return res.json(err);
    }
    res.json(1);
    }) 
    }
    if(!!result[0] && result[0].count > 0 ){
    const ahaa = result[0].count ;
    let countProduct = ahaa + 1 ;
    conn.query(`UPDATE basket
    SET count=?
    WHERE product_id=?`, [countProduct, id], (err) => {
    if (err) {
    console.log(err); 
    return res.json(err)
    };
    res.json(1);
    })} });
});

router.get("/get", authenticate,  (req, res) => {
    const userId = req.currrentUser.id ;
    conn.query(`SELECT price, count FROM basket where user_id=?`, [userId], (err, result) => {
        if(err){
        console.log(err);
        return res.json(err);
        }
      let vpered = result.reduce((sum, current) => sum + current.count, 0);
      const hmm = result.map(aha => {
      return aha.count * aha.price ;
       })
    let sum = 0;

    for(let i = 0; i < hmm.length; i++){
        sum += hmm[i] ;
    }
    res.json({sumPrice: sum.toFixed(2), currentCount: vpered ? vpered : 0 });
    })
});

router.get('/inbasket', authenticate, (req, res) => {
const userId = req.currrentUser.id ;
conn.query(`SELECT * FROM basket where user_id=?`, [userId], (err, result) => {
if(err){
console.log(err);
return res.json(err);
}
res.json(result);
})
});

router.get("/delte_product/:id", authenticate, (req, res) => {
const { id } = req.params ;
conn.query(`Delete from basket where product_id=?`, [id], (err, result) => {
if(err){
console.log(err);
return res.json(err);
}
console.log(result);
res.json(result);
})
});


router.get("/text", (req, res) => {
const text = `<h1>What types of Tablet repair are offered?</h1> 
  <p>The partner stores of Simply Fixable offer a wide range of services, including cracked tablet screen repair, tablet battery replacement, charging port, front and back camera, head tablet jack, loudspeaker, home/power button, back camera lens, tablet glass repair, and water damage repair.</p>`
res.json(text);
})

router.get("/update_count/:id/:count/:action", authenticate, (req, res) => {
    const { id, action, count } = req.params ;
    if(Number(action) === 0){
    if(count > 1) {
    conn.query(`Update basket SET count=? WHERE product_id=?`, [Number(count) - 1, id], (err, result) => {
    if(err){
    console.log(err);
    return res.json(err);
    }
    console.log(result.affectedRows);
    res.json(result.affectedRows);
    });
    }
    } else if (Number(action) === 1){
    conn.query(`Update basket SET count=? WHERE product_id=?`, [Number(count) + 1, id], (err, result) => {
    if(err) {
    console.log(err);
    return res.json(err);
    }
    console.log(result.affectedRows);
    res.json(result.affectedRows);
    })
    }
});


export default router;
