import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';
import conn from '../db.js';
import cors from 'cors';

const config = {
    key: "KEY_USERS"
}

const router = express.Router();
router.use(cors());

const hashDoPassword = async (password) => {
return await bcrypt.hash(password, 10);
}

function generetAccessToken (id, roleId) {
const payload = {
id ,
roleId
}
return jwt.sign(payload, config.key , {expiresIn: "3d"});
}

router.post("/register",[
    check('name', ("name not correct")).isLength({min: 3, max: 14}),
    check('father_name', ("father_name not correct")).isLength({min: 3, max: 14}),
    check('surname', ("surname not correct")).isLength({min: 3, max: 14}),
    check('password', ("password must be bigger 4 and less then 10")).isLength({min: 5, max: 25}),
    check('email', ("Email is not correct")).isEmail(),
], async (req, res) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
    return res.status(400).json({message: "Error status", error});
    }
    const {name, father_name, surname, phone, role, password, email} = req.body;
    const hashPassword = await hashDoPassword(password);
    conn.query(`INSERT INTO users(name, father_name, surname, phone, role, password, email) 
    VALUES (?,?,?,?,?,?,?)`, 
    [name, father_name, surname, phone, role, hashPassword , email] , (err, result) => {
    if (err){
    console.log(err);
    res.json(err);
    }
    console.log(result);
    res.json("SUCCESS");
    });
});


router.post("/login", (req, res) => {
    const { password, email} = req.body;
    conn.query(`SELECT * from users
    WHERE email=?`, [email],async (err, result) => {
    if(err){
    console.log(err);
    res.json(err);
    }
    if(!result[0]){
    console.log("Email don't exist");
    return res.json("Email don't exist");
    }
    const compare = await bcrypt.compare(password, result[0].password);
    if(!compare){
    console.log("Password not correct!");
   return res.json("Password not correct!");
    }
    const token = generetAccessToken(result[0].id, result[0].role);
    res.json(token);
    });
});


router.get('/get_image',  async (req, res) => {
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

export default router;