import express from 'express';
import conn from '../db.js';
import cors from 'cors';
const router = express.Router();


router.use(cors());
const fetchCat = async (req, res) => {
let getData = [] ;
conn.query(`SELECT * FROM categories`, [], async (err, result) => {
if(err){
console.log(err);
return res.json(err);
}
getData = result ;
if(getData){
const catList = await catLists(getData);
res.json({"Status": 200, "data": catList});
}
}); 
}

async function catLists (getData, parentId = false){
    let categoryList = [] ;
    let parentCatId;
    if(parentId === false){
        parentCatId =  getData.filter(result => result.parent_id == false );
    } else{
        parentCatId =  getData.filter(result => result.parent_id == parentId);
    }
    console.log("parentCatId", parentCatId);

    for(let data of parentCatId){
        categoryList.push({
            id: data.id,
            name: data.name,
            children: await catLists(getData, data.id)
        });
    }
    return categoryList;
   }

router.get('/', fetchCat);

export default router ;