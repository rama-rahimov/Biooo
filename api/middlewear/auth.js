import jwt from 'jsonwebtoken';

const config = {
    key: "KEY_USERS"
}

export const authenticate = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["authorization"];

    if(!token){
    console.log("Global error authenticate");
     return res.status(400).send({success: false, msg: "A token is required for authenticate"});
    }
    try{
    const descoded = jwt.verify(token, config.key);
    req.currrentUser = descoded ;
    return next();
    } catch(error) {
        res.status(400).send("Invalid Token");
    }
}
