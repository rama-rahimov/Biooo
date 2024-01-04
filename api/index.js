import express from 'express';
import bodyParser from 'body-parser';
import admin from './routes/admin.js';
import users from './routes/users.js';
import product from './routes/product.js';
import categories from './routes/categories.js';


const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

app.use("/admin", admin);
app.use("/users", users);
app.use("/product", product);
app.use("/categories", categories);

app.listen(3001, () => console.log('vpereed'));
