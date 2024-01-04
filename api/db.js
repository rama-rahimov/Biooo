import mysql from 'mysql';

let conn = mysql.createConnection({
    user: 'root',
    password: '12345678',
    database: 'bioplant'
});

export default conn ;

 
